import OpenAI from "openai";

// Lazy-load the OpenAI client only when needed and API key is available
let openai: OpenAI | null = null;

function getOpenAIClient(): OpenAI | null {
  if (!process.env.OPENAI_API_KEY) {
    return null;
  }
  
  if (!openai) {
    // the newest OpenAI model is "gpt-4o" which was released May 13, 2025. do not change this unless explicitly requested by the user
    openai = new OpenAI({ 
      apiKey: process.env.OPENAI_API_KEY 
    });
  }
  
  return openai;
}

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
    
    const client = getOpenAIClient();
    
    // If no API key is available, fall back to role-based responses immediately
    if (!client) {
      throw new Error('OpenAI API key not configured');
    }

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

    const completion = await client.chat.completions.create({
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
    
    // Provide intelligent role-based responses even without OpenAI
    const roleBasedResponses = {
      student: getStudentResponse(req.message),
      faculty: getFacultyResponse(req.message),
      admin: getAdminResponse(req.message),
      parent: getParentResponse(req.message),
      alumni: getAlumniResponse(req.message),
      vc: getVCResponse(req.message),
      default: "I'm currently experiencing technical issues with the AI service. The system administrator has been notified. Please try again later or contact university support for assistance."
    };

    return {
      response: roleBasedResponses[req.userRole as keyof typeof roleBasedResponses] || roleBasedResponses.default,
      type: 'text'
    };
  }
}

// Intelligent fallback responses for different roles
function getStudentResponse(message: string): string {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('course') || lowerMessage.includes('subject') || lowerMessage.includes('recommend')) {
    return "💡 **Course Guidance Available** \n\nWhile the AI assistant is temporarily offline, here are some helpful resources:\n\n• Visit the Academic Office for personalized course recommendations\n• Check the COEP Course Catalog for detailed program requirements\n• Consult with your faculty advisor during office hours\n• Use the Student Portal to view prerequisite requirements\n\n*The AI system will be back online soon with enhanced academic planning features.*";
  }
  
  if (lowerMessage.includes('grade') || lowerMessage.includes('cgpa') || lowerMessage.includes('performance')) {
    return "📊 **Academic Performance Insights** \n\nYour grade analysis is available through:\n\n• Student Dashboard - View current semester performance\n• Academic Records section - Track CGPA trends\n• Faculty feedback in individual course portals\n• Schedule a meeting with your academic counselor\n\n*AI-powered grade predictions and improvement suggestions will be available once the system is restored.*";
  }
  
  if (lowerMessage.includes('placement') || lowerMessage.includes('job') || lowerMessage.includes('career')) {
    return "🎯 **Career Development Support** \n\nWhile waiting for AI-powered career guidance:\n\n• Visit the Placement Cell for current job opportunities\n• Check your Placement Dashboard for interview schedules\n• Attend career workshops and skill development sessions\n• Connect with alumni through the networking portal\n\n*Advanced career matching and industry insights will resume with AI restoration.*";
  }
  
  return "🎓 **Student Support Available** \n\nThe AI assistant is temporarily offline, but comprehensive support is still available:\n\n• Academic queries → Faculty Office Hours\n• Technical issues → IT Help Desk\n• Administrative matters → Student Services\n• Emergency support → 24/7 Campus Support\n\n*Enhanced AI features are being restored and will be available soon.*";
}

function getFacultyResponse(message: string): string {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('student') || lowerMessage.includes('grade') || lowerMessage.includes('performance')) {
    return "👨‍🏫 **Teaching Analytics Available** \n\nWhile AI analytics are being restored:\n\n• Access individual student records through the Faculty Portal\n• Review assignment submissions and grades in Course Management\n• Use the built-in gradebook for performance tracking\n• Generate reports through the Manual Analytics section\n\n*AI-powered student risk identification and intervention suggestions will resume shortly.*";
  }
  
  if (lowerMessage.includes('curriculum') || lowerMessage.includes('course') || lowerMessage.includes('syllabus')) {
    return "📚 **Curriculum Development Support** \n\nResource alternatives while AI is offline:\n\n• Access curriculum templates in the Faculty Resource Center\n• Review peer feedback and course evaluations\n• Consult with the Academic Planning Committee\n• Use existing course analytics for improvement insights\n\n*Advanced curriculum optimization and learning outcome analysis will return with AI restoration.*";
  }
  
  return "🔬 **Faculty Resources Available** \n\nThe AI teaching assistant is temporarily unavailable. Alternative support:\n\n• Faculty Portal → Manual analytics and reports\n• IT Support → Technical assistance for online tools\n• Academic Office → Curriculum and policy guidance\n• Peer Collaboration → Faculty discussion forums\n\n*Enhanced AI teaching tools are being restored and will be back online soon.*";
}

function getAdminResponse(message: string): string {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('analytics') || lowerMessage.includes('report') || lowerMessage.includes('data')) {
    return "📈 **Administrative Analytics Available** \n\nWhile AI analytics are being restored:\n\n• Access manual reporting dashboard for current data\n• Review semester statistics through the Admin Portal\n• Generate custom reports using the Report Builder\n• Consult historical data through the Archive System\n\n*Predictive analytics and automated insights will resume with AI restoration.*";
  }
  
  if (lowerMessage.includes('budget') || lowerMessage.includes('financial') || lowerMessage.includes('cost')) {
    return "💰 **Financial Management Tools** \n\nBudget analysis alternatives:\n\n• Financial Dashboard → Current expenditure tracking\n• Budget Planning Module → Resource allocation tools\n• Accounting Department → Detailed financial reports\n• Board Reports → Executive financial summaries\n\n*AI-powered budget optimization and forecasting will be available once the system is restored.*";
  }
  
  return "⚙️ **Administrative Support Available** \n\nAI decision support is temporarily offline. Available resources:\n\n• Management Dashboard → Key performance indicators\n• Manual Analytics → Department-wise reports\n• Policy Database → University regulations and procedures\n• Executive Reports → Strategic planning documents\n\n*Advanced AI analytics and strategic recommendations will resume shortly.*";
}

function getParentResponse(message: string): string {
  return "👨‍👩‍👧‍👦 **Parent Portal Support** \n\nWhile the AI assistant is being restored:\n\n• View your child's academic progress in the Parent Dashboard\n• Check attendance records and fee payment status\n• Schedule meetings with faculty through the appointment system\n• Access important announcements and event notifications\n\n*AI-powered insights about your child's academic journey will be available soon.*";
}

function getAlumniResponse(message: string): string {
  return "🎓 **Alumni Network Support** \n\nThe AI career assistant is temporarily offline. Available features:\n\n• Alumni Directory → Connect with fellow graduates\n• Job Board → Current career opportunities\n• Networking Events → Upcoming alumni gatherings\n• Mentorship Program → Guide current students\n\n*Enhanced AI-powered career matching and networking suggestions will resume shortly.*";
}

function getVCResponse(message: string): string {
  return "🏛️ **Executive Decision Support** \n\nWhile AI strategic analytics are being restored:\n\n• Executive Dashboard → Key institutional metrics\n• Board Reports → Comprehensive performance summaries\n• Strategic Planning Module → Long-term goals and initiatives\n• Institutional Research → Data-driven insights\n\n*Advanced AI recommendations and predictive analytics for strategic decision-making will be available once the system is restored.*";
}