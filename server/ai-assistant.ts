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
      const systemPrompt = `You are an AI assistant for COEP Technological University's management system. 
      You help students, faculty, and staff with academic information, course details, attendance queries, 
      fee information, library resources, and general university guidance.
      
      Context: You have access to comprehensive university data including:
      - Student records across 10 years (2015-2024)
      - Course catalog for all engineering branches
      - Attendance and academic performance data
      - Fee structures and scholarship information
      - Library resources and research materials
      
      Provide helpful, accurate responses and suggest relevant actions when appropriate.
      Keep responses concise but informative. Always maintain a professional, supportive tone.`;

      const userPrompt = request.context 
        ? `Context: ${request.context}\n\nQuestion: ${request.message}`
        : request.message;

      const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ],
        response_format: { type: "json_object" },
        max_tokens: 500
      });

      const result = JSON.parse(response.choices[0].message.content || '{}');

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
      const prompt = `Analyze this student's academic data and provide personalized insights:
      
      Student Data: ${JSON.stringify(studentData)}
      
      Provide insights in JSON format with:
      - response: Main insight summary
      - suggestions: Array of actionable recommendations
      - actions: Array of specific next steps
      
      Focus on academic performance, attendance patterns, upcoming deadlines, and improvement opportunities.`;

      const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [{ role: "user", content: prompt }],
        response_format: { type: "json_object" },
        max_tokens: 400
      });

      const result = JSON.parse(response.choices[0].message.content || '{}');
      return {
        response: result.response || "Your academic performance is on track!",
        suggestions: result.suggestions || ["Keep up the good work", "Stay consistent with attendance"],
        actions: result.actions || ["Review upcoming assignments", "Check library resources"]
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