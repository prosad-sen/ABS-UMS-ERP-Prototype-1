import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Camera, QrCode, AlertCircle, CheckCircle } from 'lucide-react';

interface QRScannerProps {
  onScan: (data: string) => void;
  onError: (error: string) => void;
}

export default function QRScanner({ onScan, onError }: QRScannerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { 
          facingMode: 'environment',
          width: { ideal: 640 },
          height: { ideal: 480 }
        }
      });
      
      setStream(mediaStream);
      setHasPermission(true);
      setError(null);
      
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        videoRef.current.play();
      }
    } catch (err) {
      console.error('Camera access error:', err);
      setHasPermission(false);
      setError('Camera access denied. Please allow camera permission and try again.');
      onError('Camera access denied');
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
    setIsScanning(false);
  };

  const scanQRCode = () => {
    if (!videoRef.current || !canvasRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    if (!context) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0);

    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    
    // Simple QR code simulation - in production, use a proper QR code library
    // For demo purposes, we'll simulate QR detection
    const simulateQRDetection = () => {
      // Generate a sample QR code data for attendance
      const currentDate = new Date().toISOString().split('T')[0];
      const currentTime = new Date().toISOString().split('T')[1].split('.')[0];
      const qrData = `COEP_ATTENDANCE_${currentDate}_${currentTime}_COURSE_CS101`;
      
      // Simulate successful scan after 2 seconds
      setTimeout(() => {
        onScan(qrData);
        setIsScanning(false);
        stopCamera();
      }, 2000);
    };

    if (isScanning) {
      simulateQRDetection();
    }
  };

  const handleStartScanning = async () => {
    await startCamera();
    setIsScanning(true);
  };

  const handleStopScanning = () => {
    setIsScanning(false);
    stopCamera();
  };

  useEffect(() => {
    let scanInterval: NodeJS.Timeout;
    
    if (isScanning && videoRef.current) {
      scanInterval = setInterval(scanQRCode, 100);
    }

    return () => {
      if (scanInterval) {
        clearInterval(scanInterval);
      }
    };
  }, [isScanning]);

  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <QrCode className="h-5 w-5" />
          QR Code Scanner
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {hasPermission === null && (
          <Alert>
            <Camera className="h-4 w-4" />
            <AlertDescription>
              Camera permission required for QR scanning.
            </AlertDescription>
          </Alert>
        )}

        {hasPermission === false && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Camera access denied. Please enable camera permission in your browser settings.
            </AlertDescription>
          </Alert>
        )}

        <div className="relative">
          <video
            ref={videoRef}
            className="w-full h-64 bg-gray-100 rounded-lg object-cover"
            autoPlay
            playsInline
            muted
          />
          <canvas
            ref={canvasRef}
            className="hidden"
          />
          
          {isScanning && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 border-2 border-coep-blue rounded-lg animate-pulse">
                <div className="w-full h-full border border-dashed border-coep-blue rounded-lg flex items-center justify-center">
                  <QrCode className="h-12 w-12 text-coep-blue animate-pulse" />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex gap-2">
          {!isScanning ? (
            <Button 
              onClick={handleStartScanning}
              className="flex-1 flex items-center gap-2"
              disabled={hasPermission === false}
            >
              <Camera className="h-4 w-4" />
              Start Scanning
            </Button>
          ) : (
            <Button 
              onClick={handleStopScanning}
              variant="outline"
              className="flex-1 flex items-center gap-2"
            >
              <AlertCircle className="h-4 w-4" />
              Stop Scanning
            </Button>
          )}
        </div>

        {isScanning && (
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
              <div className="w-3 h-3 border border-coep-blue border-t-transparent rounded-full animate-spin"></div>
              Scanning for QR code...
            </div>
          </div>
        )}

        <div className="text-xs text-gray-500 text-center">
          Position the QR code within the frame to mark your attendance
        </div>
      </CardContent>
    </Card>
  );
}