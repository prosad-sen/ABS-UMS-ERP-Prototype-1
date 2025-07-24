export interface QRAttendanceData {
  courseId: number;
  date: string;
  time: string;
  facultyId: string;
  timestamp: number;
}

export function generateQRData(courseId: number, facultyId: string): string {
  const now = new Date();
  const qrData: QRAttendanceData = {
    courseId,
    date: now.toISOString().split('T')[0],
    time: now.toTimeString().split(' ')[0],
    facultyId,
    timestamp: Date.now(),
  };

  return btoa(JSON.stringify(qrData));
}

export function parseQRData(qrCode: string): QRAttendanceData | null {
  try {
    const decoded = atob(qrCode);
    const data = JSON.parse(decoded) as QRAttendanceData;
    
    // Validate required fields
    if (!data.courseId || !data.date || !data.time || !data.facultyId || !data.timestamp) {
      return null;
    }

    return data;
  } catch (error) {
    console.error('Error parsing QR data:', error);
    return null;
  }
}

export function isQRDataValid(data: QRAttendanceData, maxAgeMinutes: number = 15): boolean {
  const now = Date.now();
  const qrAge = now - data.timestamp;
  const maxAge = maxAgeMinutes * 60 * 1000; // Convert to milliseconds

  return qrAge <= maxAge;
}

export function formatQRDisplayData(data: QRAttendanceData): {
  course: string;
  date: string;
  time: string;
  faculty: string;
  validity: string;
} {
  return {
    course: `Course ID: ${data.courseId}`,
    date: new Date(data.date).toLocaleDateString(),
    time: data.time,
    faculty: `Faculty ID: ${data.facultyId}`,
    validity: `Valid until: ${new Date(data.timestamp + 15 * 60 * 1000).toLocaleTimeString()}`,
  };
}

// Location utilities for attendance
export function getCurrentLocation(): Promise<{ latitude: number; longitude: number }> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by this browser.'));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        reject(new Error(`Geolocation error: ${error.message}`));
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000,
      }
    );
  });
}

// Calculate distance between two coordinates (Haversine formula)
export function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371; // Radius of the Earth in kilometers
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in kilometers
  return distance * 1000; // Convert to meters
}

// Check if student is within attendance range (default 100 meters)
export function isWithinAttendanceRange(
  studentLat: number,
  studentLon: number,
  classroomLat: number,
  classroomLon: number,
  maxDistanceMeters: number = 100
): boolean {
  const distance = calculateDistance(studentLat, studentLon, classroomLat, classroomLon);
  return distance <= maxDistanceMeters;
}
