import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, MapPin, Users, Bed } from 'lucide-react';

interface Room {
  id: number;
  roomNo: string;
  type: string;
  capacity: number;
  amenities: string[];
  price: number;
  available: boolean;
  images: string[];
}

export default function HostelBookingSystem() {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [bookingStep, setBookingStep] = useState(1);

  const hostelRooms = [
    {
      id: 1,
      roomNo: "H1-101",
      type: "Single",
      capacity: 1,
      amenities: ["WiFi", "AC", "Study Table", "Wardrobe"],
      price: 8500,
      available: true,
      images: ["/api/placeholder/300/200"]
    },
    {
      id: 2,
      roomNo: "H1-201",
      type: "Double Sharing",
      capacity: 2,
      amenities: ["WiFi", "AC", "Study Table", "Wardrobe", "Balcony"],
      price: 6500,
      available: true,
      images: ["/api/placeholder/300/200"]
    },
    {
      id: 3,
      roomNo: "H2-105",
      type: "Triple Sharing",
      capacity: 3,
      amenities: ["WiFi", "Fan", "Study Table", "Wardrobe"],
      price: 4500,
      available: false,
      images: ["/api/placeholder/300/200"]
    }
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6" style={{paddingTop: '0px', marginTop: '0px'}}>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Hostel Booking System</h1>
        <p className="text-gray-600">Find and book your ideal hostel accommodation</p>
      </div>

      {/* Booking Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-center space-x-4 mb-6">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                bookingStep >= step ? 'bg-coep-blue text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                {step}
              </div>
              {step < 3 && <div className={`w-16 h-1 mx-2 ${
                bookingStep > step ? 'bg-coep-blue' : 'bg-gray-200'
              }`} />}
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-sm text-gray-600">
            {bookingStep === 1 && "Choose Room Type"}
            {bookingStep === 2 && "Select Dates & Details"}
            {bookingStep === 3 && "Confirm Booking"}
          </p>
        </div>
      </div>

      {/* Room Selection */}
      {bookingStep === 1 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hostelRooms.map((room) => (
            <Card 
              key={room.id} 
              className={`hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1 ${
                selectedRoom?.id === room.id ? 'ring-2 ring-coep-blue' : ''
              }`}
              onClick={() => !room.available ? null : setSelectedRoom(room)}
            >
              <CardHeader className="p-0">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-t-lg flex items-center justify-center">
                  <Bed className="w-16 h-16 text-coep-blue" />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold">{room.roomNo}</h3>
                  <Badge variant={room.available ? "default" : "destructive"}>
                    {room.available ? "Available" : "Occupied"}
                  </Badge>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{room.type} ({room.capacity} person{room.capacity > 1 ? 's' : ''})</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>₹{room.price}/month</span>
                  </div>
                </div>

                <div className="mt-3">
                  <p className="text-xs text-gray-500 mb-2">Amenities:</p>
                  <div className="flex flex-wrap gap-1">
                    {room.amenities.slice(0, 3).map((amenity, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs px-2 py-1">
                        {amenity}
                      </Badge>
                    ))}
                    {room.amenities.length > 3 && (
                      <Badge variant="outline" className="text-xs px-2 py-1">
                        +{room.amenities.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                <Button 
                  className="w-full mt-4" 
                  disabled={!room.available}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (room.available) {
                      setSelectedRoom(room);
                      setBookingStep(2);
                    }
                  }}
                >
                  {room.available ? "Select Room" : "Not Available"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Booking Details */}
      {bookingStep === 2 && selectedRoom && (
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Booking Details - Room {selectedRoom.roomNo}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Check-in Date</label>
                  <Input type="date" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Duration (months)</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Month</SelectItem>
                      <SelectItem value="3">3 Months</SelectItem>
                      <SelectItem value="6">6 Months</SelectItem>
                      <SelectItem value="12">12 Months</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Meal Plan</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select meal plan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">No Meals</SelectItem>
                    <SelectItem value="breakfast">Breakfast Only (+₹1500/month)</SelectItem>
                    <SelectItem value="full">Full Meals (+₹3500/month)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Special Requirements</label>
                <Input placeholder="Any special requirements or preferences..." />
              </div>

              <div className="flex justify-between pt-4">
                <Button variant="outline" onClick={() => setBookingStep(1)}>
                  Back to Rooms
                </Button>
                <Button onClick={() => setBookingStep(3)}>
                  Continue to Payment
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Booking Confirmation */}
      {bookingStep === 3 && selectedRoom && (
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Booking Confirmation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-3">Booking Summary</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Room:</span>
                    <span>{selectedRoom.roomNo} ({selectedRoom.type})</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly Rent:</span>
                    <span>₹{selectedRoom.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Security Deposit:</span>
                    <span>₹{selectedRoom.price}</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-semibold">
                    <span>Total Amount:</span>
                    <span>₹{selectedRoom.price * 2}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Payment Options</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="outline" className="h-16 flex flex-col">
                    <span className="font-semibold">Online Payment</span>
                    <span className="text-xs text-gray-600">UPI / Card / Net Banking</span>
                  </Button>
                  <Button variant="outline" className="h-16 flex flex-col">
                    <span className="font-semibold">Bank Transfer</span>
                    <span className="text-xs text-gray-600">NEFT / RTGS</span>
                  </Button>
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <Button variant="outline" onClick={() => setBookingStep(2)}>
                  Back to Details
                </Button>
                <Button className="bg-green-600 hover:bg-green-700">
                  Confirm Booking
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}