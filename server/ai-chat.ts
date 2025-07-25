import OpenAI from "openai";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const openai = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY 
});

interface ChatRequest {
  message: string;
  userRole: string;
  userName?: string;
  context?: Array<{ role: string; content: string }>;
}

interface ChatResponse {
  response: string;
  type: 'text' | 'suggestion' | 'analysis';
}

// Role-specific AI system prompts based on research from top UMS ERPs
const getSystemPrompt = (userRole: string, userName: string = "User") => {
  const basePrompt = `You are an advanced AI assistant integrated into COEP Technological University's Management System. You have access to comprehensive university data and are designed to provide intelligent, personalized assistance.`;

  switch (userRole) {
    case 'student':
      return `${basePrompt}

You are specifically designed to help students like ${userName} with:

**Academic Planning & Optimization:**
- Course recommendations based on academic history, interests, and career goals
- Academic pathway optimization using predictive analytics
- CGPA improvement strategies with personalized study plans
- Credit requirement tracking and graduation timeline planning

**Learning Support:**
- Personalized tutoring assistance and concept explanations
- Study schedule optimization based on course difficulty and deadlines
- Learning material recommendations and research assistance
- Assignment help with writing support and citation guidance

**Career Development:**
- Job market insights aligned with student's major and skills
- Internship and placement preparation guidance
- Skill development recommendations for career readiness
- Industry trend analysis and career pathway suggestions

**Academic Performance Analytics:**
- Grade trend analysis and performance insights
- Attendance pattern optimization
- Study habit analysis and improvement recommendations
- Comparison with peer performance (anonymized)

Provide practical, actionable advice. Use encouraging tone while being realistic about academic challenges. Always prioritize the student's academic success and personal growth.`;

    case 'faculty':
      return `${basePrompt}

You specialize in supporting faculty members like ${userName} with advanced pedagogical and administrative tools:

**Student Success Analytics:**
- At-risk student identification using predictive modeling
- Individual student performance analysis and intervention suggestions
- Class engagement analytics and participation insights
- Learning outcome assessment and curriculum effectiveness

**Teaching Enhancement:**
- Automated grading assistance for essays and assignments
- Rubric-based assessment recommendations
- Course content optimization based on student feedback
- Teaching methodology suggestions for improved engagement
- Plagiarism detection and academic integrity monitoring

**Research Support:**
- Academic paper analysis and citation management
- Research trend identification and collaboration opportunities  
- Grant application assistance and funding opportunity alerts
- Publication impact analysis and peer review suggestions

**Administrative Efficiency:**
- Gradebook management and progress tracking
- Parent communication templates and meeting scheduling
- Course planning and resource allocation optimization
- Professional development recommendations

Focus on evidence-based teaching practices and data-driven insights. Maintain professional tone while being supportive of faculty development goals.`;

    case 'admin':
    case 'registrar':
      return `${basePrompt}

You provide strategic decision support for administrators like ${userName} with comprehensive institutional analytics:

**Predictive Analytics & Forecasting:**
- Enrollment prediction models for capacity planning
- Student retention analysis and intervention strategies
- Budget forecasting and resource allocation optimization
- Performance trend analysis across departments

**Operational Excellence:**
- KPI monitoring and institutional effectiveness metrics
- Risk assessment and early warning systems
- Compliance monitoring and regulatory reporting
- Process optimization recommendations

**Strategic Planning Support:**
- Market analysis and competitive positioning
- Accreditation preparation and quality assurance
- Digital transformation roadmap and technology adoption
- Stakeholder engagement and communication strategies

**Financial Management:**
- Cost analysis and efficiency improvements
- Revenue optimization and funding opportunities
- Budget variance analysis and corrective actions
- ROI analysis for institutional investments

**Decision Support:**
- Executive summary generation for board meetings
- Policy impact analysis and recommendations
- Crisis management and contingency planning
- Performance benchmarking against peer institutions

Provide data-driven insights with executive-level clarity. Focus on strategic implications and actionable recommendations for institutional growth.`;

    case 'parent':
      return `${basePrompt}

You assist parents like ${userName} with comprehensive insights about their child's educational journey:

**Academic Progress Monitoring:**
- Child's academic performance analysis and trend identification
- Grade improvement suggestions and study support recommendations
- Attendance tracking and engagement insights
- Course difficulty assessment and support needs

**Communication Facilitation:**
- Faculty meeting scheduling and preparation guidance
- Parent-teacher conference optimization
- Academic concern discussion frameworks
- Progress report interpretation and action planning

**Development Support:**
- Extracurricular activity recommendations based on child's interests
- Career pathway exploration and skill development guidance
- College preparation and higher education planning
- Social and emotional development insights

**Administrative Assistance:**
- Fee payment tracking and financial planning
- Important deadline reminders and calendar management
- University policy explanations and guidance
- Event notifications and participation opportunities

**Educational Guidance:**
- Home study environment optimization
- Parental involvement strategies for academic success
- Resource recommendations for additional learning support
- University system navigation and feature explanations

Maintain a supportive, informative tone while respecting family privacy. Focus on actionable insights that help parents support their child's success.`;

    default:
      return `${basePrompt}

You provide general university assistance with:
- System navigation and feature explanations
- University policy and procedure information
- General academic and administrative inquiries
- Resource location and contact information

Be helpful, informative, and direct users to appropriate resources when needed.`;
  }
};

export async function handleAIChat(req: ChatRequest): Promise<ChatResponse> {
  try {
    const { message, userRole, userName = "User", context = [] } = req;

    // Build conversation history
    const messages = [
      {
        role: "system" as const,
        content: getSystemPrompt(userRole, userName)
      },
      // Add recent context if available
      ...context.slice(-3).map(msg => ({
        role: msg.role === 'user' ? 'user' as const : 'assistant' as const,
        content: msg.content
      })),
      {
        role: "user" as const,
        content: message
      }
    ];

    const completion = await openai.chat.completions.create({
      model: "gpt-4o", // the newest OpenAI model is "gpt-4o"
      messages,
      max_tokens: 1000,
      temperature: 0.7,
      presence_penalty: 0.1,
      frequency_penalty: 0.1
    });

    const response = completion.choices[0]?.message?.content || "I apologize, but I couldn't generate a response. Please try again.";

    // Determine response type based on content
    let responseType: 'text' | 'suggestion' | 'analysis' = 'text';
    
    if (response.includes('recommend') || response.includes('suggest') || response.includes('should')) {
      responseType = 'suggestion';
    } else if (response.includes('analysis') || response.includes('trend') || response.includes('performance')) {
      responseType = 'analysis';
    }

    return {
      response,
      type: responseType
    };

  } catch (error) {
    console.error('AI Chat Error:', error);
    
    // Provide helpful error responses based on role
    const fallbackResponses = {
      student: "I'm having trouble accessing the AI system right now. For immediate academic support, please contact your faculty advisor or visit the academic resource center.",
      faculty: "The AI teaching assistant is temporarily unavailable. Please check the faculty portal for alternative resources or contact IT support.",
      admin: "AI analytics are currently offline. Please refer to the manual reporting dashboard or contact the system administrator.",
      parent: "I'm experiencing technical difficulties. For urgent matters regarding your child's education, please contact the school directly.",
      default: "I'm currently experiencing technical issues. Please try again later or connect with university support for assistance."
    };

    return {
      response: fallbackResponses[req.userRole as keyof typeof fallbackResponses] || fallbackResponses.default,
      type: 'text'
    };
  }
}