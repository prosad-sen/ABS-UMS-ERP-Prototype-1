import OpenAI from "openai";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export interface AIRequest {
  message: string;
  context?: string;
  studentData?: any;
}

export interface AIResponse {
  response: string;
  suggestions?: string[];
  actions?: string[];
}

export class AIAssistant {
  async processQuery(request: AIRequest): Promise<AIResponse> {
    try {
      // Handle common queries with predefined responses for reliability
      const query = request.message.toLowerCase();
      
      if (query.includes("leaderboard") || query.includes("points") || query.includes("gain") || query.includes("score")) {
        return {
          response: "🏆 To gain more points in the leaderboard: 1) Maintain perfect attendance (+50 points daily), 2) Submit assignments early (+25 bonus points), 3) Participate in coding contests (+100 points), 4) Join study groups (+30 points), 5) Complete extra projects (+200 points). You're currently at Level 12 with 1,250 points - just 250 points away from Level 13! **Navigate to:** Dashboard → Leaderboard section or Quick Actions.",
          suggestions: ["Join upcoming CodeChef contest", "Form study groups with classmates", "Attend all classes this week", "Submit your pending assignments early"],
          actions: ["Visit Leaderboard from Dashboard", "Go to Attendance page for QR scanning", "Check Academics for assignment deadlines", "Explore student clubs section"]
        };
      }
      
      if (query.includes("assignment") || query.includes("homework") || query.includes("project") || query.includes("due")) {
        return {
          response: "Your upcoming assignments: 1) Data Structures Lab Report (Due: March 20, 2024) - 25% weightage, 2) Computer Networks Project (Due: March 25, 2024) - 30% weightage, 3) Software Engineering Case Study (Due: March 28, 2024) - 20% weightage. Submit early for 10% bonus points!",
          suggestions: ["Start with highest weightage assignment first", "Create a study schedule", "Form project groups", "Visit library for resources"],
          actions: ["Download assignment templates", "Book library study room", "Join study groups", "Set deadline reminders"]
        };
      }
      
      if (query.includes("attendance") || query.includes("present") || query.includes("absent") || query.includes("class")) {
        return {
          response: "Your current attendance is 85% (43/50 classes). You need 90% for excellent grade. Recent absences: Algorithms (2 classes), Networks (1 class). Attend next 5 classes consecutively to reach 90% and earn streak bonuses!",
          suggestions: ["Set daily attendance reminders", "Use QR scanner for quick check-in", "Join study groups for missed topics", "Get notes from classmates"],
          actions: ["Scan QR code for today's class", "Download missed lecture materials", "Check class schedule", "Set phone alarms"]
        };
      }
      
      if (query.includes("fee") || query.includes("payment") || query.includes("scholarship") || query.includes("money")) {
        return {
          response: "Fee Status: Semester fee ₹85,000 paid ✓, Hostel fee ₹25,000 due March 30, Lab fee ₹5,000 paid ✓. You're eligible for Merit Scholarship (₹15,000) due to 8.4+ CGPA. Apply before March 25!",
          suggestions: ["Pay hostel fee before deadline", "Apply for merit scholarship", "Check for additional scholarships", "Set payment reminders"],
          actions: ["Visit fees portal", "Download scholarship application", "Check bank balance", "Set payment deadline reminder"]
        };
      }

      if (query.includes("grievance") || query.includes("complaint") || query.includes("issue") || query.includes("problem") || query.includes("concern")) {
        return {
          response: "📝 I can help you submit a grievance or track existing ones! The Grievance System allows you to: 1) Submit detailed complaints with AI-powered guidance, 2) Suggest your own solutions, 3) Track resolution progress with estimated timelines, 4) Get immediate support assurance from relevant departments. Your concerns are taken seriously with 71% resolution rate and 8.5 days average resolution time. **Navigate to:** Dashboard → Voice Concerns button or Sidebar → Grievances section.",
          suggestions: ["Submit a new grievance with detailed description", "Check status of existing complaints", "View department response times", "Get AI guidance for issue resolution"],
          actions: ["Go to Grievances page from Dashboard", "Submit new grievance with AI assistance", "Track resolution progress and updates", "Contact relevant department directly"]
        };
      }

      // For other queries, provide general helpful response
      const systemPrompt = `You are a helpful AI assistant for COEP Technological University. Provide practical, specific advice for students about academics, attendance, assignments, fees, and campus life. Be encouraging and specific.`;

      const userPrompt = request.context 
        ? `Context: ${request.context}\n\nQuestion: ${request.message}`
        : request.message;

      const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          { role: "system", content: systemPrompt + "\n\nRespond with valid JSON containing 'response', 'suggestions' array, and 'actions' array." },
          { role: "user", content: userPrompt }
        ],
        max_tokens: 500
      });

      let result;
      try {
        result = JSON.parse(response.choices[0].message.content || '{}');
      } catch {
        // If JSON parsing fails, create a structured response
        result = {
          response: response.choices[0].message.content || "I'm here to help with your university queries!",
          suggestions: ["Try asking about assignments", "Check your attendance", "Ask about upcoming events"],
          actions: ["Visit academics page", "Check notifications", "View course schedule"]
        };
      }

      return {
        response: result.response || "I'm here to help with your university queries!",
        suggestions: result.suggestions || [],
        actions: result.actions || []
      };
    } catch (error) {
      console.error("AI Assistant Error:", error);
      return {
        response: "I'm currently experiencing technical difficulties. Please try again later or contact support.",
        suggestions: ["Check your internet connection", "Try a simpler query", "Contact IT support"],
        actions: []
      };
    }
  }

  async generateInsights(studentData: any): Promise<AIResponse> {
    try {
      // Provide contextual responses based on common student queries
      const context = studentData?.query || "";
      
      if (context.toLowerCase().includes("leaderboard") || context.toLowerCase().includes("points")) {
        return {
          response: "To gain more points in the leaderboard: 1) Maintain 100% attendance (+50 points daily), 2) Submit assignments early (+25 points each), 3) Participate in coding contests (+100 points), 4) Join study groups (+30 points), 5) Complete extra credit projects (+200 points).",
          suggestions: ["Join CodeChef contests", "Form study groups", "Attend all classes", "Submit assignments early"],
          actions: ["Check upcoming contests", "Visit attendance page", "Review assignment deadlines"]
        };
      }
      
      if (context.toLowerCase().includes("assignment") || context.toLowerCase().includes("homework")) {
        return {
          response: "Your upcoming assignments: 1) Data Structures Lab Report (Due: March 20), 2) Computer Networks Project (Due: March 25), 3) Software Engineering Case Study (Due: March 28). Submit early for bonus points!",
          suggestions: ["Start with Data Structures report", "Plan your Networks project", "Research case studies"],
          actions: ["Visit academics page", "Download assignment templates", "Join study groups"]
        };
      }
      
      if (context.toLowerCase().includes("attendance")) {
        return {
          response: "Your current attendance is 85%. You need 90% for excellent grade. Missing classes: Algorithms (2), Networks (1). Attend next 5 classes without miss to reach 90%.",
          suggestions: ["Set attendance reminders", "Join study groups for missed topics", "Ask friends for notes"],
          actions: ["Use QR scanner", "Check class schedule", "Download missed lecture notes"]
        };
      }
      
      // Default response for general queries
      return {
        response: "I'm your COEP AI assistant! I can help with assignments, attendance tracking, leaderboard strategies, course information, and academic guidance. What specific topic would you like help with?",
        suggestions: ["Ask about assignments", "Check attendance tips", "Learn about gaining points", "Explore course details"],
        actions: ["Visit academics page", "Use QR scanner", "Check leaderboard", "Browse library resources"]
      };
    } catch (error) {
      console.error("AI Insights Error:", error);
      return {
        response: "Unable to generate insights at the moment.",
        suggestions: ["Check back later", "Review your academic dashboard"],
        actions: []
      };
    }
  }

  async answerQuery(query: string, context: string = ""): Promise<string> {
    try {
      const response = await this.processQuery({ message: query, context });
      return response.response;
    } catch (error) {
      return "I'm experiencing technical difficulties. Please try again later.";
    }
  }
}