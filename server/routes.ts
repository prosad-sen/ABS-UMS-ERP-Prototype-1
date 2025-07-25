import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { setupAuth, isAuthenticated } from "./replitAuth";
import { handleAIChat } from "./ai-chat";
import { 
  insertStudentSchema,
  insertFacultySchema,
  insertCourseSchema,
  insertEnrollmentSchema,
  insertAttendanceSchema,
  insertFeePaymentSchema,
  insertBookSchema,
  insertBookBorrowingSchema,
  insertAssignmentSchema,
  insertAssignmentSubmissionSchema,
  insertAnnouncementSchema,
} from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Auth middleware
  await setupAuth(app);
  
  // Import and seed dummy data
  const { seedDummyData } = await import('./dummy-data');
  
  // Seed data route (for development)
  app.post('/api/seed-data', async (req, res) => {
    try {
      await seedDummyData();
      res.json({ message: 'COEP dummy data seeded successfully!' });
    } catch (error) {
      console.error('Error seeding data:', error);
      res.status(500).json({ message: 'Failed to seed data', error: String(error) });
    }
  });

  // Auth routes
  app.get('/api/auth/user', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const user = await storage.getUser(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Get role-specific data
      let roleData = null;
      if (user.role === 'student') {
        roleData = await storage.getStudentByUserId(userId);
      } else if (user.role === 'faculty') {
        roleData = await storage.getFacultyByUserId(userId);
      }

      res.json({ ...user, roleData });
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Failed to fetch user" });
    }
  });

  // Dashboard routes
  app.get('/api/dashboard/stats', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const user = await storage.getUser(userId);
      
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      if (user.role === 'student') {
        const student = await storage.getStudentByUserId(userId);
        if (!student) {
          return res.status(404).json({ message: "Student not found" });
        }
        
        const stats = await storage.getStudentDashboardStats(student.id);
        res.json(stats);
      } else {
        // For other roles, return empty stats for now
        res.json({
          cgpa: null,
          attendance: 0,
          pendingAssignments: 0,
          pendingFees: 0,
        });
      }
    } catch (error) {
      console.error("Error fetching dashboard stats:", error);
      res.status(500).json({ message: "Failed to fetch dashboard stats" });
    }
  });

  // Student routes
  app.get('/api/students/profile', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const student = await storage.getStudentByUserId(userId);
      
      if (!student) {
        return res.status(404).json({ message: "Student not found" });
      }

      res.json(student);
    } catch (error) {
      console.error("Error fetching student profile:", error);
      res.status(500).json({ message: "Failed to fetch student profile" });
    }
  });

  app.get('/api/students/academic-record', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const student = await storage.getStudentByUserId(userId);
      
      if (!student) {
        return res.status(404).json({ message: "Student not found" });
      }

      const academicRecord = await storage.getStudentAcademicRecord(student.id);
      res.json(academicRecord);
    } catch (error) {
      console.error("Error fetching academic record:", error);
      res.status(500).json({ message: "Failed to fetch academic record" });
    }
  });

  // Attendance routes
  app.get('/api/attendance', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const student = await storage.getStudentByUserId(userId);
      
      if (!student) {
        return res.status(404).json({ message: "Student not found" });
      }

      const { courseId, startDate, endDate } = req.query;
      const attendance = await storage.getStudentAttendance(
        student.id,
        courseId ? parseInt(courseId as string) : undefined,
        startDate ? new Date(startDate as string) : undefined,
        endDate ? new Date(endDate as string) : undefined
      );

      res.json(attendance);
    } catch (error) {
      console.error("Error fetching attendance:", error);
      res.status(500).json({ message: "Failed to fetch attendance" });
    }
  });

  app.get('/api/attendance/stats', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const student = await storage.getStudentByUserId(userId);
      
      if (!student) {
        return res.status(404).json({ message: "Student not found" });
      }

      const { courseId } = req.query;
      const stats = await storage.getAttendanceStats(
        student.id,
        courseId ? parseInt(courseId as string) : undefined
      );

      res.json(stats);
    } catch (error) {
      console.error("Error fetching attendance stats:", error);
      res.status(500).json({ message: "Failed to fetch attendance stats" });
    }
  });

  app.post('/api/attendance/mark', isAuthenticated, async (req, res) => {
    try {
      const validatedData = insertAttendanceSchema.parse(req.body);
      const attendance = await storage.markAttendance(validatedData);
      res.json(attendance);
    } catch (error) {
      console.error("Error marking attendance:", error);
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to mark attendance" });
    }
  });

  // Fee routes
  app.get('/api/fees/dues', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const student = await storage.getStudentByUserId(userId);
      
      if (!student) {
        return res.status(404).json({ message: "Student not found" });
      }

      const feeDues = await storage.getStudentFeeDues(student.id);
      res.json(feeDues);
    } catch (error) {
      console.error("Error fetching fee dues:", error);
      res.status(500).json({ message: "Failed to fetch fee dues" });
    }
  });

  app.get('/api/fees/payments', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const student = await storage.getStudentByUserId(userId);
      
      if (!student) {
        return res.status(404).json({ message: "Student not found" });
      }

      const { academicYear } = req.query;
      const payments = await storage.getStudentFeePayments(
        student.id,
        academicYear as string
      );

      res.json(payments);
    } catch (error) {
      console.error("Error fetching fee payments:", error);
      res.status(500).json({ message: "Failed to fetch fee payments" });
    }
  });

  app.post('/api/fees/pay', isAuthenticated, async (req, res) => {
    try {
      const validatedData = insertFeePaymentSchema.parse(req.body);
      const payment = await storage.createFeePayment(validatedData);
      res.json(payment);
    } catch (error) {
      console.error("Error processing fee payment:", error);
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to process fee payment" });
    }
  });

  // Library routes
  app.get('/api/library/books/search', isAuthenticated, async (req, res) => {
    try {
      const { q, category } = req.query;
      if (!q) {
        return res.status(400).json({ message: "Search query is required" });
      }

      const books = await storage.searchBooks(q as string, category as string);
      res.json(books);
    } catch (error) {
      console.error("Error searching books:", error);
      res.status(500).json({ message: "Failed to search books" });
    }
  });

  app.get('/api/library/borrowings', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const student = await storage.getStudentByUserId(userId);
      
      if (!student) {
        return res.status(404).json({ message: "Student not found" });
      }

      const { status } = req.query;
      const borrowings = await storage.getStudentBorrowings(
        student.id,
        status as string
      );

      res.json(borrowings);
    } catch (error) {
      console.error("Error fetching borrowings:", error);
      res.status(500).json({ message: "Failed to fetch borrowings" });
    }
  });

  app.post('/api/library/borrow', isAuthenticated, async (req, res) => {
    try {
      const validatedData = insertBookBorrowingSchema.parse(req.body);
      const borrowing = await storage.borrowBook(validatedData);
      res.json(borrowing);
    } catch (error) {
      console.error("Error borrowing book:", error);
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to borrow book" });
    }
  });

  // Assignment routes
  app.get('/api/assignments/student', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const student = await storage.getStudentByUserId(userId);
      
      if (!student) {
        return res.status(404).json({ message: "Student not found" });
      }

      const { status } = req.query;
      const assignments = await storage.getStudentAssignments(
        student.id,
        status as string
      );

      res.json(assignments);
    } catch (error) {
      console.error("Error fetching student assignments:", error);
      res.status(500).json({ message: "Failed to fetch student assignments" });
    }
  });

  app.post('/api/assignments/submit', isAuthenticated, async (req, res) => {
    try {
      const validatedData = insertAssignmentSubmissionSchema.parse(req.body);
      const submission = await storage.submitAssignment(validatedData);
      res.json(submission);
    } catch (error) {
      console.error("Error submitting assignment:", error);
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to submit assignment" });
    }
  });

  // Announcements routes
  app.get('/api/announcements', isAuthenticated, async (req: any, res) => {
    try {
      const { audience = 'all', limit = 10 } = req.query;
      const announcements = await storage.getAnnouncements(
        audience as string,
        parseInt(limit as string)
      );

      res.json(announcements);
    } catch (error) {
      console.error("Error fetching announcements:", error);
      res.status(500).json({ message: "Failed to fetch announcements" });
    }
  });

  // Courses routes
  app.get('/api/courses', isAuthenticated, async (req, res) => {
    try {
      const { semester, branch } = req.query;
      
      if (semester && branch) {
        const courses = await storage.getCoursesBySemester(
          parseInt(semester as string),
          branch as string
        );
        res.json(courses);
      } else {
        const courses = await storage.getAllCourses();
        res.json(courses);
      }
    } catch (error) {
      console.error("Error fetching courses:", error);
      res.status(500).json({ message: "Failed to fetch courses" });
    }
  });

  // QR Code generation for attendance
  app.post('/api/qr/generate-attendance', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const user = await storage.getUser(userId);
      
      if (!user || user.role !== 'faculty') {
        return res.status(403).json({ message: "Only faculty can generate QR codes" });
      }

      const { courseId, date, time } = req.body;
      if (!courseId || !date || !time) {
        return res.status(400).json({ message: "Course ID, date, and time are required" });
      }

      // Generate QR code data
      const qrData = {
        courseId,
        date,
        time,
        facultyId: userId,
        timestamp: Date.now(),
      };

      const qrCode = Buffer.from(JSON.stringify(qrData)).toString('base64');
      
      res.json({ qrCode, data: qrData });
    } catch (error) {
      console.error("Error generating QR code:", error);
      res.status(500).json({ message: "Failed to generate QR code" });
    }
  });

  // QR Code verification for attendance
  app.post('/api/qr/verify-attendance', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const student = await storage.getStudentByUserId(userId);
      
      if (!student) {
        return res.status(404).json({ message: "Student not found" });
      }

      const { qrCode, latitude, longitude } = req.body;
      if (!qrCode) {
        return res.status(400).json({ message: "QR code is required" });
      }

      try {
        const qrData = JSON.parse(Buffer.from(qrCode, 'base64').toString());
        const { courseId, date, time, facultyId, timestamp } = qrData;

        // Check if QR code is still valid (within 15 minutes)
        const now = Date.now();
        const qrAge = now - timestamp;
        const maxAge = 15 * 60 * 1000; // 15 minutes

        if (qrAge > maxAge) {
          return res.status(400).json({ message: "QR code has expired" });
        }

        // Get faculty info
        const faculty = await storage.getFacultyByUserId(facultyId);
        if (!faculty) {
          return res.status(400).json({ message: "Invalid QR code - faculty not found" });
        }

        // Mark attendance
        const attendanceData = {
          studentId: student.id,
          courseId: parseInt(courseId),
          facultyId: faculty.id,
          date,
          time,
          status: 'present' as const,
          method: 'qr' as const,
          qrCode,
          photoVerified: false,
          latitude: latitude ? latitude.toString() : null,
          longitude: longitude ? longitude.toString() : null,
        };

        const attendance = await storage.markAttendance(attendanceData);
        res.json({ success: true, attendance });
      } catch (parseError) {
        return res.status(400).json({ message: "Invalid QR code format" });
      }
    } catch (error) {
      console.error("Error verifying QR code:", error);
      res.status(500).json({ message: "Failed to verify QR code" });
    }
  });

  // AI Chat endpoint
  app.post('/api/ai/chat', async (req, res) => {
    try {
      const result = await handleAIChat(req.body);
      res.json(result);
    } catch (error) {
      console.error('AI Chat API Error:', error);
      res.status(500).json({ 
        response: "I'm experiencing technical difficulties. Please try again later.",
        type: 'text'
      });
    }
  });

  // QR Code Attendance Routes
  app.post('/api/attendance/scan', async (req, res) => {
    try {
      const { qrData, studentId } = req.body;
      
      // Mock QR code validation and attendance marking
      if (qrData && qrData.includes('COEP_ATTENDANCE')) {
        // Extract course and session info from QR
        const courseInfo = qrData.split('_');
        const courseCode = courseInfo[2] || 'CS301';
        const sessionDate = new Date().toISOString().split('T')[0];
        
        // Mark attendance (in real app, this would update database)
        const attendanceRecord = {
          studentId,
          courseCode,
          date: sessionDate,
          status: 'present',
          timestamp: new Date().toISOString(),
          method: 'qr_scan'
        };
        
        res.json({
          success: true,
          message: `Attendance marked successfully for ${courseCode}`,
          record: attendanceRecord
        });
      } else {
        res.status(400).json({
          success: false,
          message: 'Invalid QR code. Please scan a valid attendance QR code.'
        });
      }
    } catch (error) {
      console.error('QR Scan Error:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to process QR code scan. Please try again.'
      });
    }
  });

  // Generate mock QR code for testing
  app.get('/api/attendance/generate-qr/:courseCode', (req, res) => {
    const { courseCode } = req.params;
    const timestamp = Date.now();
    const qrData = `COEP_ATTENDANCE_${courseCode}_${timestamp}`;
    
    res.json({
      qrData,
      courseCode,
      timestamp,
      expiresIn: 900000 // 15 minutes
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
