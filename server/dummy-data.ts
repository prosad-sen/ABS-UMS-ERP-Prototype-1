import { db } from "./db";
import { 
  users, students, faculty, courses, enrollments, facultyCourses, 
  attendance, feeStructure, feePayments, books, bookBorrowings,
  assignments, assignmentSubmissions, announcements
} from "@shared/schema";

// COEP-specific data based on actual university structure
const COEP_PROGRAMS = [
  'B.Tech',
  'M.Tech',
  'MBA',
  'M.Plan',
  'Ph.D'
];

const COEP_BRANCHES = [
  'Computer Science & Engineering',
  'Mechanical Engineering',
  'Electrical Engineering',
  'Civil Engineering',
  'Electronics & Telecommunication',
  'Chemical Engineering',
  'Instrumentation & Control Engineering',
  'Production Engineering',
  'Metallurgy & Materials Engineering',
  'Information Technology',
  'Applied Sciences',
  'Management Studies',
  'Architecture & Planning'
];

const COEP_COURSES = [
  // Computer Science courses
  { code: 'CS101', name: 'Programming Fundamentals', credits: 4, branch: 'Computer Science & Engineering' },
  { code: 'CS201', name: 'Data Structures & Algorithms', credits: 4, branch: 'Computer Science & Engineering' },
  { code: 'CS301', name: 'Database Management Systems', credits: 4, branch: 'Computer Science & Engineering' },
  { code: 'CS401', name: 'Machine Learning', credits: 4, branch: 'Computer Science & Engineering' },
  { code: 'CS501', name: 'Artificial Intelligence', credits: 4, branch: 'Computer Science & Engineering' },
  
  // Mechanical Engineering courses
  { code: 'ME101', name: 'Engineering Mechanics', credits: 4, branch: 'Mechanical Engineering' },
  { code: 'ME201', name: 'Thermodynamics', credits: 4, branch: 'Mechanical Engineering' },
  { code: 'ME301', name: 'Heat Transfer', credits: 4, branch: 'Mechanical Engineering' },
  { code: 'ME401', name: 'Machine Design', credits: 4, branch: 'Mechanical Engineering' },
  
  // Electrical Engineering courses
  { code: 'EE101', name: 'Circuit Analysis', credits: 4, branch: 'Electrical Engineering' },
  { code: 'EE201', name: 'Digital Electronics', credits: 4, branch: 'Electrical Engineering' },
  { code: 'EE301', name: 'Power Systems', credits: 4, branch: 'Electrical Engineering' },
  { code: 'EE401', name: 'Control Systems', credits: 4, branch: 'Electrical Engineering' },
  
  // Civil Engineering courses
  { code: 'CE101', name: 'Surveying', credits: 4, branch: 'Civil Engineering' },
  { code: 'CE201', name: 'Structural Analysis', credits: 4, branch: 'Civil Engineering' },
  { code: 'CE301', name: 'Concrete Technology', credits: 4, branch: 'Civil Engineering' },
  { code: 'CE401', name: 'Transportation Engineering', credits: 4, branch: 'Civil Engineering' },
  
  // ENTC courses
  { code: 'ENTC101', name: 'Analog Electronics', credits: 4, branch: 'Electronics & Telecommunication' },
  { code: 'ENTC201', name: 'Digital Signal Processing', credits: 4, branch: 'Electronics & Telecommunication' },
  { code: 'ENTC301', name: 'Communication Systems', credits: 4, branch: 'Electronics & Telecommunication' },
  { code: 'ENTC401', name: 'Wireless Networks', credits: 4, branch: 'Electronics & Telecommunication' },
  
  // Chemical Engineering courses
  { code: 'CHE101', name: 'Chemical Process Principles', credits: 4, branch: 'Chemical Engineering' },
  { code: 'CHE201', name: 'Mass Transfer Operations', credits: 4, branch: 'Chemical Engineering' },
  { code: 'CHE301', name: 'Chemical Reaction Engineering', credits: 4, branch: 'Chemical Engineering' },
  { code: 'CHE401', name: 'Process Control', credits: 4, branch: 'Chemical Engineering' },
  
  // Common courses
  { code: 'MATH101', name: 'Engineering Mathematics I', credits: 4, branch: 'Applied Sciences' },
  { code: 'MATH201', name: 'Engineering Mathematics II', credits: 4, branch: 'Applied Sciences' },
  { code: 'PHY101', name: 'Engineering Physics', credits: 4, branch: 'Applied Sciences' },
  { code: 'CHEM101', name: 'Engineering Chemistry', credits: 4, branch: 'Applied Sciences' },
  { code: 'ENG101', name: 'Communication Skills', credits: 3, branch: 'Applied Sciences' },
  { code: 'MGT101', name: 'Engineering Economics', credits: 3, branch: 'Management Studies' }
];

const COEP_BOOKS = [
  // Computer Science Books
  { title: 'Introduction to Algorithms', author: 'Thomas H. Cormen', isbn: '9780262033848', category: 'Computer Science', totalCopies: 50 },
  { title: 'Computer Networks', author: 'Andrew S. Tanenbaum', isbn: '9780132126953', category: 'Computer Science', totalCopies: 30 },
  { title: 'Database System Concepts', author: 'Abraham Silberschatz', isbn: '9780078022159', category: 'Computer Science', totalCopies: 40 },
  { title: 'Operating System Concepts', author: 'Abraham Silberschatz', isbn: '9781118063330', category: 'Computer Science', totalCopies: 35 },
  { title: 'Artificial Intelligence: A Modern Approach', author: 'Stuart Russell', isbn: '9780136042594', category: 'Computer Science', totalCopies: 25 },
  
  // Mechanical Engineering Books
  { title: 'Shigley\'s Mechanical Engineering Design', author: 'Richard G. Budynas', isbn: '9780073398204', category: 'Mechanical Engineering', totalCopies: 45 },
  { title: 'Fundamentals of Thermodynamics', author: 'Claus Borgnakke', isbn: '9781118131992', category: 'Mechanical Engineering', totalCopies: 40 },
  { title: 'Mechanics of Materials', author: 'Russell C. Hibbeler', isbn: '9780134319650', category: 'Mechanical Engineering', totalCopies: 50 },
  { title: 'Heat and Mass Transfer', author: 'Frank P. Incropera', isbn: '9780470501979', category: 'Mechanical Engineering', totalCopies: 35 },
  
  // Electrical Engineering Books
  { title: 'Fundamentals of Electric Circuits', author: 'Charles K. Alexander', isbn: '9780073380575', category: 'Electrical Engineering', totalCopies: 45 },
  { title: 'Power System Analysis', author: 'John J. Grainger', isbn: '9780070612938', category: 'Electrical Engineering', totalCopies: 30 },
  { title: 'Digital Design', author: 'M. Morris Mano', isbn: '9780134549897', category: 'Electrical Engineering', totalCopies: 40 },
  
  // Civil Engineering Books
  { title: 'Structural Analysis', author: 'Russell C. Hibbeler', isbn: '9780134610672', category: 'Civil Engineering', totalCopies: 40 },
  { title: 'Design of Concrete Structures', author: 'Arthur H. Nilson', isbn: '9780073293493', category: 'Civil Engineering', totalCopies: 35 },
  { title: 'Transportation Engineering', author: 'C. Jotin Khisty', isbn: '9780134481548', category: 'Civil Engineering', totalCopies: 30 },
  
  // General Engineering
  { title: 'Engineering Mathematics', author: 'K.A. Stroud', isbn: '9780831134709', category: 'Mathematics', totalCopies: 100 },
  { title: 'Engineering Physics', author: 'H.K. Malik', isbn: '9780070151932', category: 'Physics', totalCopies: 80 },
  { title: 'Engineering Chemistry', author: 'Jain & Jain', isbn: '9788121928885', category: 'Chemistry', totalCopies: 70 }
];

// Generate realistic Indian names
const FIRST_NAMES = [
  'Aarav', 'Vivaan', 'Aditya', 'Vihaan', 'Arjun', 'Sai', 'Reyansh', 'Ayaan', 'Krishna', 'Ishaan',
  'Shaurya', 'Atharv', 'Advik', 'Pranav', 'Rishabh', 'Gaurrang', 'Harsh', 'Kian', 'Kunal', 'Rohan',
  'Aadhya', 'Saanvi', 'Aanya', 'Diya', 'Pihu', 'Prisha', 'Ananya', 'Fatima', 'Anika', 'Kavya',
  'Aarohi', 'Arya', 'Ira', 'Myra', 'Sara', 'Pari', 'Alisha', 'Riya', 'Khushi', 'Sia'
];

const LAST_NAMES = [
  'Sharma', 'Verma', 'Gupta', 'Kumar', 'Singh', 'Patel', 'Joshi', 'Shah', 'Agarwal', 'Mehta',
  'Desai', 'Kulkarni', 'Jain', 'More', 'Pawar', 'Bhosale', 'Jadhav', 'Patil', 'Sawant', 'Gaikwad',
  'Shinde', 'Kadam', 'Mane', 'Chavan', 'Raut', 'Salunkhe', 'Thorat', 'Nikam', 'Kale', 'Deshpande'
];

function generateStudentId(year: number, branch: string, rollNo: number): string {
  const branchCode = {
    'Computer Science & Engineering': 'CS',
    'Mechanical Engineering': 'ME',
    'Electrical Engineering': 'EE',
    'Civil Engineering': 'CE',
    'Electronics & Telecommunication': 'ENTC',
    'Chemical Engineering': 'CHE',
    'Instrumentation & Control Engineering': 'ICE',
    'Production Engineering': 'PE',
    'Metallurgy & Materials Engineering': 'MME',
    'Information Technology': 'IT'
  }[branch] || 'GEN';
  
  return `${year}${branchCode}${rollNo.toString().padStart(3, '0')}`;
}

function generateEmployeeId(department: string, empNo: number): string {
  const deptCode = {
    'Computer Science & Engineering': 'CS',
    'Mechanical Engineering': 'ME',
    'Electrical Engineering': 'EE',
    'Civil Engineering': 'CE',
    'Electronics & Telecommunication': 'ENTC',
    'Chemical Engineering': 'CHE',
    'Instrumentation & Control Engineering': 'ICE',
    'Production Engineering': 'PE',
    'Metallurgy & Materials Engineering': 'MME',
    'Information Technology': 'IT',
    'Applied Sciences': 'AS',
    'Management Studies': 'MGT'
  }[department] || 'GEN';
  
  return `EMP${deptCode}${empNo.toString().padStart(4, '0')}`;
}

function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function generateCGPA(): number {
  // Generate realistic CGPA between 6.0 to 10.0 with bias toward 7.5-8.5
  const random = Math.random();
  if (random < 0.1) return +(6.0 + Math.random() * 1.0).toFixed(2); // 10% below 7.0
  if (random < 0.7) return +(7.0 + Math.random() * 1.5).toFixed(2); // 60% between 7.0-8.5
  if (random < 0.95) return +(8.5 + Math.random() * 1.0).toFixed(2); // 25% between 8.5-9.5
  return +(9.5 + Math.random() * 0.5).toFixed(2); // 5% above 9.5
}

export async function seedDummyData() {

  
  try {
    // 1. Create Books

    const bookRecords = [];
    for (const book of COEP_BOOKS) {
      bookRecords.push({
        title: book.title,
        author: book.author,
        isbn: book.isbn,
        category: book.category,
        totalCopies: book.totalCopies,
        availableCopies: book.totalCopies,
        publisher: 'Academic Press',
        publishedYear: 2015 + Math.floor(Math.random() * 8),
        location: `Section ${book.category.charAt(0)}`,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    await db.insert(books).values(bookRecords);
    
    // 2. Create Courses

    const courseRecords = [];
    for (const course of COEP_COURSES) {
      courseRecords.push({
        courseCode: course.code,
        courseName: course.name,
        credits: course.credits,
        branch: course.branch,
        semester: Math.floor(Math.random() * 8) + 1,
        description: `Comprehensive study of ${course.name} covering theoretical and practical aspects.`,
        syllabus: `Detailed syllabus for ${course.name} including modules, practicals, and assessments.`,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    await db.insert(courses).values(courseRecords);
    
    // 3. Create Faculty (120 faculty members)

    const facultyUsers = [];
    const facultyRecords = [];
    
    for (let i = 1; i <= 120; i++) {
      const firstName = getRandomElement(FIRST_NAMES);
      const lastName = getRandomElement(LAST_NAMES);
      const department = getRandomElement(COEP_BRANCHES);
      const employeeId = generateEmployeeId(department, i);
      const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@coeptech.ac.in`;
      
      // Create user record
      facultyUsers.push({
        id: `faculty_${i}`,
        email: email,
        firstName: firstName,
        lastName: lastName,
        profileImageUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=${firstName}${lastName}`,
        role: 'faculty',
        createdAt: new Date(),
        updatedAt: new Date()
      });
      
      // Create faculty record
      facultyRecords.push({
        userId: `faculty_${i}`,
        employeeId: employeeId,
        department: department,
        designation: getRandomElement(['Assistant Professor', 'Associate Professor', 'Professor', 'Head of Department']),
        qualification: getRandomElement(['Ph.D', 'M.Tech', 'M.E']),
        experience: 5 + Math.floor(Math.random() * 20),
        specialization: `${department} specialization`,
        contactNumber: `+91${Math.floor(Math.random() * 9000000000) + 1000000000}`,
        officeLocation: `${department.slice(0, 2)} Building, Room ${100 + i}`,
        joiningDate: new Date(2010 + Math.floor(Math.random() * 14), Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString().split('T')[0],
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    
    await db.insert(users).values(facultyUsers);
    await db.insert(faculty).values(facultyRecords);
    
    // 4. Create Students (10,000+ students across 10 years)

    const studentUsers = [];
    const studentRecords = [];
    
    let studentCounter = 1;
    
    // Generate students for years 2015-2024 (10 years)
    for (let year = 2015; year <= 2024; year++) {
      const studentsThisYear = year === 2024 ? 1200 : // Current year - more admissions
                               year >= 2021 ? 1100 : // Recent years
                               year >= 2018 ? 1000 : // Mid years
                               900; // Earlier years - total ~10,400 students
      
      for (let j = 1; j <= studentsThisYear; j++) {
        const firstName = getRandomElement(FIRST_NAMES);
        const lastName = getRandomElement(LAST_NAMES);
        const branch = getRandomElement(COEP_BRANCHES.slice(0, 10)); // Only engineering branches for B.Tech
        const studentId = generateStudentId(year, branch, j);
        const email = `${studentId.toLowerCase()}@student.coeptech.ac.in`;
        
        // Determine current semester based on admission year
        const currentYear = 2024;
        const yearsPassed = currentYear - year;
        let currentSemester = Math.min(yearsPassed * 2 + 1, 8);
        
        // Some students might have graduated
        const hasGraduated = yearsPassed >= 4;
        if (hasGraduated) currentSemester = 8;
        
        // Create user record with Indian student profile images
        const indianStudentImages = [
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
          'https://images.unsplash.com/photo-1494790108755-2616c728a018?w=150&h=150&fit=crop&crop=face',
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
          'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop&crop=face',
          'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face',
          'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face'
        ];
        
        studentUsers.push({
          id: `student_${studentCounter}`,
          email: email,
          firstName: firstName,
          lastName: lastName,
          profileImageUrl: indianStudentImages[studentCounter % indianStudentImages.length],
          role: 'student',
          createdAt: new Date(),
          updatedAt: new Date()
        });
        
        // Create student record
        studentRecords.push({
          userId: `student_${studentCounter}`,
          studentId: studentId,
          rollNumber: `${year}${j.toString().padStart(3, '0')}`,
          program: 'B.Tech',
          branch: branch,
          batch: year.toString(),
          admissionYear: year,
          currentSemester: currentSemester,
          admissionDate: new Date(year, 6, 15).toISOString().split('T')[0], // July 15th admission
          cgpa: hasGraduated ? generateCGPA() : (currentSemester >= 2 ? generateCGPA() : null),
          contactNumber: `+91${Math.floor(Math.random() * 9000000000) + 1000000000}`,
          address: `${Math.floor(Math.random() * 999) + 1}, ${getRandomElement(['MG Road', 'FC Road', 'Karve Road', 'Paud Road', 'Baner', 'Kothrud', 'Viman Nagar'])}, Pune - ${Math.floor(Math.random() * 100000) + 400000}`,
          parentName: `${getRandomElement(FIRST_NAMES)} ${lastName}`,
          parentContact: `+91${Math.floor(Math.random() * 9000000000) + 1000000000}`,
          isActive: !hasGraduated || Math.random() > 0.8, // Some graduated students remain active (for alumni)
          createdAt: new Date(),
          updatedAt: new Date()
        });
        
        studentCounter++;
      }
    }
    
    await db.insert(users).values(studentUsers);
    await db.insert(students).values(studentRecords);
    
    // 5. Create Fee Structure

    const feeRecords = [];
    const currentYear = new Date().getFullYear();
    
    for (const branch of COEP_BRANCHES.slice(0, 10)) {
      for (let semester = 1; semester <= 8; semester++) {
        for (let year = currentYear - 2; year <= currentYear + 1; year++) {
          const academicYear = `${year}-${String(year + 1).slice(-2)}`;
          feeRecords.push({
            program: 'B.Tech',
            branch: branch,
            semester: semester,
            academicYear: academicYear,
            tuitionFee: '75000',
            developmentFee: '15000',
            examFee: '5000',
            libraryFee: '2000',
            sportsFee: '1500',
            totalFee: '98500',
            dueDate: new Date(year, semester <= 4 ? 6 : 0, 30).toISOString().split('T')[0], // July for odd semesters, January for even
            createdAt: new Date(),
            updatedAt: new Date()
          });
        }
      }
    }
    await db.insert(feeStructure).values(feeRecords);
    
    // Data seeded successfully
    
  } catch (error) {
    // Error seeding data
    throw error;
  }
}