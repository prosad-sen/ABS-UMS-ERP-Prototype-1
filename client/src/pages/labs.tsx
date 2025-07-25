import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AWSLabSystem from "@/components/labs/aws-lab-system";
import { Cloud, Server, Code, Database } from "lucide-react";

export default function Labs() {
  const labStats = {
    totalLabs: 12,
    completed: 3,
    inProgress: 2,
    assigned: 7,
    awsCredits: 150.00,
    hoursUsed: 24.5
  };

  return (
    <div className="space-y-6 p-3 lg:p-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">AWS Cloud Labs</h1>
          <p className="text-gray-600">Hands-on cloud computing experience with Amazon Web Services</p>
        </div>
        <div className="flex space-x-2">
          <Badge className="bg-orange-100 text-orange-800">
            <Cloud className="h-4 w-4 mr-1" />
            AWS Learner Lab
          </Badge>
          <Badge className="bg-green-100 text-green-800">
            ${labStats.awsCredits} Credits Available
          </Badge>
        </div>
      </div>

      {/* Lab Statistics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Server className="h-8 w-8 mx-auto text-orange-600 mb-2" />
            <p className="text-2xl font-bold">{labStats.totalLabs}</p>
            <p className="text-sm text-gray-600">Total Labs</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Code className="h-8 w-8 mx-auto text-green-600 mb-2" />
            <p className="text-2xl font-bold">{labStats.completed}</p>
            <p className="text-sm text-gray-600">Completed</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Database className="h-8 w-8 mx-auto text-blue-600 mb-2" />
            <p className="text-2xl font-bold">{labStats.inProgress}</p>
            <p className="text-sm text-gray-600">In Progress</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Cloud className="h-8 w-8 mx-auto text-purple-600 mb-2" />
            <p className="text-2xl font-bold">{labStats.hoursUsed}h</p>
            <p className="text-sm text-gray-600">Lab Hours</p>
          </CardContent>
        </Card>
      </div>

      {/* AWS Lab System */}
      <AWSLabSystem />
    </div>
  );
}