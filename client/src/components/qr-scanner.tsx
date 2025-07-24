import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { AlertCircle, CheckCircle } from "lucide-react";

interface QRScannerProps {
  onScan: (data: string) => void;
  onError: (error: string) => void;
}

export default function QRScanner({ onScan, onError }: QRScannerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [error, setError] = useState<string>("");
  const { toast } = useToast();

  const verifyAttendanceMutation = useMutation({
    mutationFn: async (data: { qrCode: string; latitude?: number; longitude?: number }) => {
      const response = await apiRequest("POST", "/api/qr/verify-attendance", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Attendance Marked",
        description: "Your attendance has been successfully recorded.",
        variant: "default",
      });
      onScan("success");
    },
    onError: (error: Error) => {
      toast({
        title: "Attendance Failed",
        description: error.message || "Failed to mark attendance. Please try again.",
        variant: "destructive",
      });
      onError(error.message);
    },
  });

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { 
          facingMode: "environment",
          width: { ideal: 640 },
          height: { ideal: 480 }
        }
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        videoRef.current.play();
        setStream(mediaStream);
        setIsScanning(true);
        setError("");
        
        // Start scanning for QR codes
        setTimeout(scanForQRCode, 1000);
      }
    } catch (err) {
      const errorMessage = "Unable to access camera. Please check permissions.";
      setError(errorMessage);
      onError(errorMessage);
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
    setIsScanning(false);
  };

  const scanForQRCode = () => {
    if (!isScanning || !videoRef.current || !canvasRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    if (!context || video.readyState !== video.HAVE_ENOUGH_DATA) {
      setTimeout(scanForQRCode, 100);
      return;
    }

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    try {
      // Simple QR code detection - in a real implementation, you'd use a proper QR code library
      // For demo purposes, we'll simulate QR code detection with a manual trigger
      setTimeout(scanForQRCode, 500);
    } catch (err) {
      setTimeout(scanForQRCode, 500);
    }
  };

  const handleManualQRInput = () => {
    // For demo purposes, simulate a QR code scan
    const mockQRData = btoa(JSON.stringify({
      courseId: 1,
      date: new Date().toISOString().split('T')[0],
      time: new Date().toTimeString().split(' ')[0],
      facultyId: "faculty1",
      timestamp: Date.now(),
    }));

    // Get location if available
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          verifyAttendanceMutation.mutate({
            qrCode: mockQRData,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        () => {
          verifyAttendanceMutation.mutate({ qrCode: mockQRData });
        }
      );
    } else {
      verifyAttendanceMutation.mutate({ qrCode: mockQRData });
    }
  };

  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  return (
    <div className="space-y-4">
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="relative bg-gray-100 rounded-lg overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-64 object-cover"
          playsInline
          muted
        />
        <canvas
          ref={canvasRef}
          className="hidden"
        />
        
        {!isScanning && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-dashed border-gray-400 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <QrCode className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-gray-600 mb-4">Camera not started</p>
            </div>
          </div>
        )}

        {isScanning && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-48 h-48 border-2 border-coep-blue rounded-lg">
                <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-coep-blue"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-coep-blue"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-coep-blue"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-coep-blue"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex space-x-2">
        {!isScanning ? (
          <Button onClick={startCamera} className="bg-coep-blue hover:bg-coep-light-blue">
            Start Camera
          </Button>
        ) : (
          <Button onClick={stopCamera} variant="outline">
            Stop Camera
          </Button>
        )}
        
        <Button 
          onClick={handleManualQRInput}
          variant="outline"
          disabled={verifyAttendanceMutation.isPending}
        >
          {verifyAttendanceMutation.isPending ? "Marking..." : "Demo Scan"}
        </Button>
      </div>

      <p className="text-sm text-gray-500">
        Position the QR code within the scanning area. Make sure the code is clearly visible and well-lit.
      </p>
    </div>
  );
}
