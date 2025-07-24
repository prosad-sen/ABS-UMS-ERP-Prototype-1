import {
  users,
  students,
  faculty,
  courses,
  enrollments,
  facultyCourses,
  attendance,
  feeStructure,
  feePayments,
  books,
  bookBorrowings,
  assignments,
  assignmentSubmissions,
  announcements,
  type User,
  type UpsertUser,
  type Student,
  type InsertStudent,
  type Faculty,
  type InsertFaculty,
  type Course,
  type InsertCourse,
  type Enrollment,
  type InsertEnrollment,
  type Attendance,
  type InsertAttendance,
  type FeePayment,
  type InsertFeePayment,
  type Book,
  type InsertBook,
  type BookBorrowing,
  type InsertBookBorrowing,
  type Assignment,
  type InsertAssignment,
  type AssignmentSubmission,
  type InsertAssignmentSubmission,
  type Announcement,
  type InsertAnnouncement,
  type FeeStructure,
  type FacultyCourse,
} from "@shared/schema";
import { db } from "./db";
import { eq, and, desc, gte, lte, sql, count, avg } from "drizzle-orm";

// Interface for storage operations
export interface IStorage {
  // User operations (IMPORTANT) these user operations are mandatory for Replit Auth.
  getUser(id: string): Promise<User | undefined>;
  upsertUser(user: UpsertUser): Promise<User>;
  
  // Student operations
  getStudent(id: number): Promise<Student | undefined>;
  getStudentByUserId(userId: string): Promise<Student | undefined>;
  getStudentByStudentId(studentId: string): Promise<Student | undefined>;
  createStudent(student: InsertStudent): Promise<Student>;
  updateStudent(id: number, updates: Partial<InsertStudent>): Promise<Student>;
  getStudentsByProgram(program: string, branch?: string): Promise<Student[]>;
  
  // Faculty operations
  getFaculty(id: number): Promise<Faculty | undefined>;
  getFacultyByUserId(userId: string): Promise<Faculty | undefined>;
  getFacultyByEmployeeId(employeeId: string): Promise<Faculty | undefined>;
  createFaculty(faculty: InsertFaculty): Promise<Faculty>;
  updateFaculty(id: number, updates: Partial<InsertFaculty>): Promise<Faculty>;
  
  // Course operations
  getCourse(id: number): Promise<Course | undefined>;
  getCourseByCode(courseCode: string): Promise<Course | undefined>;
  createCourse(course: InsertCourse): Promise<Course>;
  getCoursesBySemester(semester: number, branch: string): Promise<Course[]>;
  getAllCourses(): Promise<Course[]>;
  
  // Enrollment operations
  createEnrollment(enrollment: InsertEnrollment): Promise<Enrollment>;
  getStudentEnrollments(studentId: number, semester?: number, academicYear?: string): Promise<(Enrollment & { course: Course })[]>;
  getCourseEnrollments(courseId: number, semester: number, academicYear: string): Promise<(Enrollment & { student: Student })[]>;
  
  // Faculty-Course assignments
  assignFacultyCourse(facultyId: number, courseId: number, semester: number, academicYear: string): Promise<FacultyCourse>;
  getFacultyCourses(facultyId: number, semester?: number, academicYear?: string): Promise<(FacultyCourse & { course: Course })[]>;
  
  // Attendance operations
  markAttendance(attendance: InsertAttendance): Promise<Attendance>;
  getStudentAttendance(studentId: number, courseId?: number, startDate?: Date, endDate?: Date): Promise<(Attendance & { course: Course })[]>;
  getCourseAttendance(courseId: number, date: Date): Promise<(Attendance & { student: Student })[]>;
  getAttendanceStats(studentId: number, courseId?: number): Promise<{ totalClasses: number; attendedClasses: number; percentage: number }>;
  
  // Fee operations
  getFeeStructure(program: string, branch: string, semester: number, academicYear: string): Promise<FeeStructure | undefined>;
  createFeePayment(payment: InsertFeePayment): Promise<FeePayment>;
  getStudentFeePayments(studentId: number, academicYear?: string): Promise<FeePayment[]>;
  getStudentFeeDues(studentId: number): Promise<{ totalDue: number; payments: FeePayment[]; structure: FeeStructure | null }>;
  
  // Library operations
  getBook(id: number): Promise<Book | undefined>;
  searchBooks(query: string, category?: string): Promise<Book[]>;
  createBook(book: InsertBook): Promise<Book>;
  borrowBook(borrowing: InsertBookBorrowing): Promise<BookBorrowing>;
  returnBook(borrowingId: number, returnDate: Date, fine?: number): Promise<BookBorrowing>;
  getStudentBorrowings(studentId: number, status?: string): Promise<(BookBorrowing & { book: Book })[]>;
  
  // Assignment operations
  createAssignment(assignment: InsertAssignment): Promise<Assignment>;
  getAssignment(id: number): Promise<Assignment | undefined>;
  getCourseAssignments(courseId: number): Promise<Assignment[]>;
  submitAssignment(submission: InsertAssignmentSubmission): Promise<AssignmentSubmission>;
  getStudentAssignments(studentId: number, status?: string): Promise<(AssignmentSubmission & { assignment: Assignment & { course: Course } })[]>;
  
  // Announcement operations
  createAnnouncement(announcement: InsertAnnouncement): Promise<Announcement>;
  getAnnouncements(targetAudience?: string, limit?: number): Promise<(Announcement & { author: User })[]>;
  
  // Dashboard/Analytics operations
  getStudentDashboardStats(studentId: number): Promise<{
    cgpa: number | null;
    attendance: number;
    pendingAssignments: number;
    pendingFees: number;
  }>;
  
  // Academic operations
  getStudentAcademicRecord(studentId: number): Promise<{
    enrollments: (Enrollment & { course: Course })[];
    cgpa: number | null;
    totalCredits: number;
  }>;
}

export class DatabaseStorage implements IStorage {
  // User operations (IMPORTANT) these user operations are mandatory for Replit Auth.
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(userData)
      .onConflictDoUpdate({
        target: users.id,
        set: {
          ...userData,
          updatedAt: new Date(),
        },
      })
      .returning();
    return user;
  }

  // Student operations
  async getStudent(id: number): Promise<Student | undefined> {
    const [student] = await db.select().from(students).where(eq(students.id, id));
    return student;
  }

  async getStudentByUserId(userId: string): Promise<Student | undefined> {
    const [student] = await db.select().from(students).where(eq(students.userId, userId));
    return student;
  }

  async getStudentByStudentId(studentId: string): Promise<Student | undefined> {
    const [student] = await db.select().from(students).where(eq(students.studentId, studentId));
    return student;
  }

  async createStudent(student: InsertStudent): Promise<Student> {
    const [newStudent] = await db.insert(students).values(student).returning();
    return newStudent;
  }

  async updateStudent(id: number, updates: Partial<InsertStudent>): Promise<Student> {
    const [updatedStudent] = await db
      .update(students)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(students.id, id))
      .returning();
    return updatedStudent;
  }

  async getStudentsByProgram(program: string, branch?: string): Promise<Student[]> {
    const query = db.select().from(students).where(eq(students.program, program));
    if (branch) {
      query.where(eq(students.branch, branch));
    }
    return await query;
  }

  // Faculty operations
  async getFaculty(id: number): Promise<Faculty | undefined> {
    const [facultyMember] = await db.select().from(faculty).where(eq(faculty.id, id));
    return facultyMember;
  }

  async getFacultyByUserId(userId: string): Promise<Faculty | undefined> {
    const [facultyMember] = await db.select().from(faculty).where(eq(faculty.userId, userId));
    return facultyMember;
  }

  async getFacultyByEmployeeId(employeeId: string): Promise<Faculty | undefined> {
    const [facultyMember] = await db.select().from(faculty).where(eq(faculty.employeeId, employeeId));
    return facultyMember;
  }

  async createFaculty(facultyData: InsertFaculty): Promise<Faculty> {
    const [newFaculty] = await db.insert(faculty).values(facultyData).returning();
    return newFaculty;
  }

  async updateFaculty(id: number, updates: Partial<InsertFaculty>): Promise<Faculty> {
    const [updatedFaculty] = await db
      .update(faculty)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(faculty.id, id))
      .returning();
    return updatedFaculty;
  }

  // Course operations
  async getCourse(id: number): Promise<Course | undefined> {
    const [course] = await db.select().from(courses).where(eq(courses.id, id));
    return course;
  }

  async getCourseByCode(courseCode: string): Promise<Course | undefined> {
    const [course] = await db.select().from(courses).where(eq(courses.courseCode, courseCode));
    return course;
  }

  async createCourse(course: InsertCourse): Promise<Course> {
    const [newCourse] = await db.insert(courses).values(course).returning();
    return newCourse;
  }

  async getCoursesBySemester(semester: number, branch: string): Promise<Course[]> {
    return await db
      .select()
      .from(courses)
      .where(and(eq(courses.semester, semester), eq(courses.branch, branch)));
  }

  async getAllCourses(): Promise<Course[]> {
    return await db.select().from(courses);
  }

  // Enrollment operations
  async createEnrollment(enrollment: InsertEnrollment): Promise<Enrollment> {
    const [newEnrollment] = await db.insert(enrollments).values(enrollment).returning();
    return newEnrollment;
  }

  async getStudentEnrollments(studentId: number, semester?: number, academicYear?: string): Promise<(Enrollment & { course: Course })[]> {
    let query = db
      .select({
        id: enrollments.id,
        studentId: enrollments.studentId,
        courseId: enrollments.courseId,
        semester: enrollments.semester,
        academicYear: enrollments.academicYear,
        grade: enrollments.grade,
        gradePoints: enrollments.gradePoints,
        status: enrollments.status,
        createdAt: enrollments.createdAt,
        updatedAt: enrollments.updatedAt,
        course: courses,
      })
      .from(enrollments)
      .innerJoin(courses, eq(enrollments.courseId, courses.id))
      .where(eq(enrollments.studentId, studentId));

    if (semester) {
      query = query.where(eq(enrollments.semester, semester));
    }
    if (academicYear) {
      query = query.where(eq(enrollments.academicYear, academicYear));
    }

    return await query;
  }

  async getCourseEnrollments(courseId: number, semester: number, academicYear: string): Promise<(Enrollment & { student: Student })[]> {
    return await db
      .select({
        id: enrollments.id,
        studentId: enrollments.studentId,
        courseId: enrollments.courseId,
        semester: enrollments.semester,
        academicYear: enrollments.academicYear,
        grade: enrollments.grade,
        gradePoints: enrollments.gradePoints,
        status: enrollments.status,
        createdAt: enrollments.createdAt,
        updatedAt: enrollments.updatedAt,
        student: students,
      })
      .from(enrollments)
      .innerJoin(students, eq(enrollments.studentId, students.id))
      .where(
        and(
          eq(enrollments.courseId, courseId),
          eq(enrollments.semester, semester),
          eq(enrollments.academicYear, academicYear)
        )
      );
  }

  // Faculty-Course assignments
  async assignFacultyCourse(facultyId: number, courseId: number, semester: number, academicYear: string): Promise<FacultyCourse> {
    const [assignment] = await db
      .insert(facultyCourses)
      .values({ facultyId, courseId, semester, academicYear })
      .returning();
    return assignment;
  }

  async getFacultyCourses(facultyId: number, semester?: number, academicYear?: string): Promise<(FacultyCourse & { course: Course })[]> {
    let query = db
      .select({
        id: facultyCourses.id,
        facultyId: facultyCourses.facultyId,
        courseId: facultyCourses.courseId,
        semester: facultyCourses.semester,
        academicYear: facultyCourses.academicYear,
        role: facultyCourses.role,
        createdAt: facultyCourses.createdAt,
        course: courses,
      })
      .from(facultyCourses)
      .innerJoin(courses, eq(facultyCourses.courseId, courses.id))
      .where(eq(facultyCourses.facultyId, facultyId));

    if (semester) {
      query = query.where(eq(facultyCourses.semester, semester));
    }
    if (academicYear) {
      query = query.where(eq(facultyCourses.academicYear, academicYear));
    }

    return await query;
  }

  // Attendance operations
  async markAttendance(attendanceData: InsertAttendance): Promise<Attendance> {
    const [newAttendance] = await db.insert(attendance).values(attendanceData).returning();
    return newAttendance;
  }

  async getStudentAttendance(studentId: number, courseId?: number, startDate?: Date, endDate?: Date): Promise<(Attendance & { course: Course })[]> {
    let query = db
      .select({
        id: attendance.id,
        studentId: attendance.studentId,
        courseId: attendance.courseId,
        facultyId: attendance.facultyId,
        date: attendance.date,
        time: attendance.time,
        status: attendance.status,
        method: attendance.method,
        qrCode: attendance.qrCode,
        photoVerified: attendance.photoVerified,
        latitude: attendance.latitude,
        longitude: attendance.longitude,
        createdAt: attendance.createdAt,
        course: courses,
      })
      .from(attendance)
      .innerJoin(courses, eq(attendance.courseId, courses.id))
      .where(eq(attendance.studentId, studentId));

    if (courseId) {
      query = query.where(eq(attendance.courseId, courseId));
    }
    if (startDate) {
      query = query.where(gte(attendance.date, startDate.toISOString().split('T')[0]));
    }
    if (endDate) {
      query = query.where(lte(attendance.date, endDate.toISOString().split('T')[0]));
    }

    return await query.orderBy(desc(attendance.date));
  }

  async getCourseAttendance(courseId: number, date: Date): Promise<(Attendance & { student: Student })[]> {
    return await db
      .select({
        id: attendance.id,
        studentId: attendance.studentId,
        courseId: attendance.courseId,
        facultyId: attendance.facultyId,
        date: attendance.date,
        time: attendance.time,
        status: attendance.status,
        method: attendance.method,
        qrCode: attendance.qrCode,
        photoVerified: attendance.photoVerified,
        latitude: attendance.latitude,
        longitude: attendance.longitude,
        createdAt: attendance.createdAt,
        student: students,
      })
      .from(attendance)
      .innerJoin(students, eq(attendance.studentId, students.id))
      .where(
        and(
          eq(attendance.courseId, courseId),
          eq(attendance.date, date.toISOString().split('T')[0])
        )
      );
  }

  async getAttendanceStats(studentId: number, courseId?: number): Promise<{ totalClasses: number; attendedClasses: number; percentage: number }> {
    let query = db
      .select({
        total: count(),
        attended: sql<number>`sum(case when ${attendance.status} = 'present' then 1 else 0 end)`,
      })
      .from(attendance)
      .where(eq(attendance.studentId, studentId));

    if (courseId) {
      query = query.where(eq(attendance.courseId, courseId));
    }

    const [stats] = await query;
    const totalClasses = stats?.total || 0;
    const attendedClasses = Number(stats?.attended) || 0;
    const percentage = totalClasses > 0 ? (attendedClasses / totalClasses) * 100 : 0;

    return { totalClasses, attendedClasses, percentage };
  }

  // Fee operations
  async getFeeStructure(program: string, branch: string, semester: number, academicYear: string): Promise<FeeStructure | undefined> {
    const [structure] = await db
      .select()
      .from(feeStructure)
      .where(
        and(
          eq(feeStructure.program, program),
          eq(feeStructure.branch, branch),
          eq(feeStructure.semester, semester),
          eq(feeStructure.academicYear, academicYear)
        )
      );
    return structure;
  }

  async createFeePayment(payment: InsertFeePayment): Promise<FeePayment> {
    const [newPayment] = await db.insert(feePayments).values(payment).returning();
    return newPayment;
  }

  async getStudentFeePayments(studentId: number, academicYear?: string): Promise<FeePayment[]> {
    let query = db
      .select()
      .from(feePayments)
      .where(eq(feePayments.studentId, studentId));

    if (academicYear) {
      query = query.where(eq(feePayments.academicYear, academicYear));
    }

    return await query.orderBy(desc(feePayments.paymentDate));
  }

  async getStudentFeeDues(studentId: number): Promise<{ totalDue: number; payments: FeePayment[]; structure: FeeStructure | null }> {
    const payments = await this.getStudentFeePayments(studentId);
    
    // Get current student to determine fee structure
    const student = await this.getStudent(studentId);
    if (!student) {
      return { totalDue: 0, payments: [], structure: null };
    }

    const currentYear = new Date().getFullYear();
    const academicYear = `${currentYear}-${String(currentYear + 1).slice(-2)}`;
    
    const structure = await this.getFeeStructure(
      student.program,
      student.branch,
      student.currentSemester || 1,
      academicYear
    );

    const totalPaid = payments
      .filter(p => p.status === 'completed')
      .reduce((sum, p) => sum + Number(p.amount), 0);
    
    const totalRequired = structure ? Number(structure.totalFee) : 0;
    const totalDue = Math.max(0, totalRequired - totalPaid);

    return { totalDue, payments, structure };
  }

  // Library operations
  async getBook(id: number): Promise<Book | undefined> {
    const [book] = await db.select().from(books).where(eq(books.id, id));
    return book;
  }

  async searchBooks(query: string, category?: string): Promise<Book[]> {
    let dbQuery = db
      .select()
      .from(books)
      .where(
        sql`${books.title} ILIKE ${`%${query}%`} OR ${books.author} ILIKE ${`%${query}%`} OR ${books.isbn} ILIKE ${`%${query}%`}`
      );

    if (category) {
      dbQuery = dbQuery.where(eq(books.category, category));
    }

    return await dbQuery.limit(50);
  }

  async createBook(book: InsertBook): Promise<Book> {
    const [newBook] = await db.insert(books).values(book).returning();
    return newBook;
  }

  async borrowBook(borrowing: InsertBookBorrowing): Promise<BookBorrowing> {
    const [newBorrowing] = await db.insert(bookBorrowings).values(borrowing).returning();
    
    // Update available copies
    await db
      .update(books)
      .set({
        availableCopies: sql`${books.availableCopies} - 1`,
        updatedAt: new Date(),
      })
      .where(eq(books.id, borrowing.bookId));

    return newBorrowing;
  }

  async returnBook(borrowingId: number, returnDate: Date, fine: number = 0): Promise<BookBorrowing> {
    const [borrowing] = await db
      .update(bookBorrowings)
      .set({
        returnDate: returnDate.toISOString().split('T')[0],
        fine: fine.toString(),
        status: 'returned',
        updatedAt: new Date(),
      })
      .where(eq(bookBorrowings.id, borrowingId))
      .returning();

    // Update available copies
    await db
      .update(books)
      .set({
        availableCopies: sql`${books.availableCopies} + 1`,
        updatedAt: new Date(),
      })
      .where(eq(books.id, borrowing.bookId));

    return borrowing;
  }

  async getStudentBorrowings(studentId: number, status?: string): Promise<(BookBorrowing & { book: Book })[]> {
    let query = db
      .select({
        id: bookBorrowings.id,
        studentId: bookBorrowings.studentId,
        bookId: bookBorrowings.bookId,
        issueDate: bookBorrowings.issueDate,
        dueDate: bookBorrowings.dueDate,
        returnDate: bookBorrowings.returnDate,
        fine: bookBorrowings.fine,
        status: bookBorrowings.status,
        createdAt: bookBorrowings.createdAt,
        updatedAt: bookBorrowings.updatedAt,
        book: books,
      })
      .from(bookBorrowings)
      .innerJoin(books, eq(bookBorrowings.bookId, books.id))
      .where(eq(bookBorrowings.studentId, studentId));

    if (status) {
      query = query.where(eq(bookBorrowings.status, status));
    }

    return await query.orderBy(desc(bookBorrowings.issueDate));
  }

  // Assignment operations
  async createAssignment(assignment: InsertAssignment): Promise<Assignment> {
    const [newAssignment] = await db.insert(assignments).values(assignment).returning();
    return newAssignment;
  }

  async getAssignment(id: number): Promise<Assignment | undefined> {
    const [assignment] = await db.select().from(assignments).where(eq(assignments.id, id));
    return assignment;
  }

  async getCourseAssignments(courseId: number): Promise<Assignment[]> {
    return await db
      .select()
      .from(assignments)
      .where(and(eq(assignments.courseId, courseId), eq(assignments.status, 'active')))
      .orderBy(desc(assignments.dueDate));
  }

  async submitAssignment(submission: InsertAssignmentSubmission): Promise<AssignmentSubmission> {
    const [newSubmission] = await db.insert(assignmentSubmissions).values(submission).returning();
    return newSubmission;
  }

  async getStudentAssignments(studentId: number, status?: string): Promise<(AssignmentSubmission & { assignment: Assignment & { course: Course } })[]> {
    let query = db
      .select({
        id: assignmentSubmissions.id,
        assignmentId: assignmentSubmissions.assignmentId,
        studentId: assignmentSubmissions.studentId,
        submissionText: assignmentSubmissions.submissionText,
        attachments: assignmentSubmissions.attachments,
        submittedAt: assignmentSubmissions.submittedAt,
        marksObtained: assignmentSubmissions.marksObtained,
        feedback: assignmentSubmissions.feedback,
        status: assignmentSubmissions.status,
        createdAt: assignmentSubmissions.createdAt,
        updatedAt: assignmentSubmissions.updatedAt,
        assignment: {
          id: assignments.id,
          courseId: assignments.courseId,
          facultyId: assignments.facultyId,
          title: assignments.title,
          description: assignments.description,
          dueDate: assignments.dueDate,
          maxMarks: assignments.maxMarks,
          attachments: assignments.attachments,
          instructions: assignments.instructions,
          status: assignments.status,
          createdAt: assignments.createdAt,
          updatedAt: assignments.updatedAt,
          course: courses,
        },
      })
      .from(assignmentSubmissions)
      .innerJoin(assignments, eq(assignmentSubmissions.assignmentId, assignments.id))
      .innerJoin(courses, eq(assignments.courseId, courses.id))
      .where(eq(assignmentSubmissions.studentId, studentId));

    if (status) {
      query = query.where(eq(assignmentSubmissions.status, status));
    }

    return await query.orderBy(desc(assignments.dueDate));
  }

  // Announcement operations
  async createAnnouncement(announcement: InsertAnnouncement): Promise<Announcement> {
    const [newAnnouncement] = await db.insert(announcements).values(announcement).returning();
    return newAnnouncement;
  }

  async getAnnouncements(targetAudience: string = 'all', limit: number = 10): Promise<(Announcement & { author: User })[]> {
    return await db
      .select({
        id: announcements.id,
        title: announcements.title,
        content: announcements.content,
        authorId: announcements.authorId,
        priority: announcements.priority,
        targetAudience: announcements.targetAudience,
        tags: announcements.tags,
        attachments: announcements.attachments,
        expiryDate: announcements.expiryDate,
        isActive: announcements.isActive,
        createdAt: announcements.createdAt,
        updatedAt: announcements.updatedAt,
        author: users,
      })
      .from(announcements)
      .innerJoin(users, eq(announcements.authorId, users.id))
      .where(
        and(
          eq(announcements.isActive, true),
          sql`(${announcements.targetAudience} = ${targetAudience} OR ${announcements.targetAudience} = 'all')`,
          sql`(${announcements.expiryDate} IS NULL OR ${announcements.expiryDate} > NOW())`
        )
      )
      .orderBy(desc(announcements.createdAt))
      .limit(limit);
  }

  // Dashboard/Analytics operations
  async getStudentDashboardStats(studentId: number): Promise<{
    cgpa: number | null;
    attendance: number;
    pendingAssignments: number;
    pendingFees: number;
  }> {
    // Get student CGPA
    const student = await this.getStudent(studentId);
    const cgpa = student?.cgpa ? Number(student.cgpa) : null;

    // Get overall attendance percentage
    const attendanceStats = await this.getAttendanceStats(studentId);
    const attendance = attendanceStats.percentage;

    // Get pending assignments count
    const pendingAssignments = await db
      .select({ count: count() })
      .from(assignments)
      .innerJoin(enrollments, eq(assignments.courseId, enrollments.courseId))
      .leftJoin(
        assignmentSubmissions,
        and(
          eq(assignmentSubmissions.assignmentId, assignments.id),
          eq(assignmentSubmissions.studentId, studentId)
        )
      )
      .where(
        and(
          eq(enrollments.studentId, studentId),
          eq(assignments.status, 'active'),
          gte(assignments.dueDate, new Date()),
          sql`${assignmentSubmissions.id} IS NULL`
        )
      );

    // Get pending fees
    const feeDues = await this.getStudentFeeDues(studentId);

    return {
      cgpa,
      attendance,
      pendingAssignments: pendingAssignments[0]?.count || 0,
      pendingFees: feeDues.totalDue,
    };
  }

  // Academic operations
  async getStudentAcademicRecord(studentId: number): Promise<{
    enrollments: (Enrollment & { course: Course })[];
    cgpa: number | null;
    totalCredits: number;
  }> {
    const enrollments = await this.getStudentEnrollments(studentId);
    
    // Calculate CGPA
    const gradedEnrollments = enrollments.filter(e => e.gradePoints !== null);
    const totalGradePoints = gradedEnrollments.reduce((sum, e) => sum + Number(e.gradePoints || 0) * e.course.credits, 0);
    const totalCredits = gradedEnrollments.reduce((sum, e) => sum + e.course.credits, 0);
    const cgpa = totalCredits > 0 ? totalGradePoints / totalCredits : null;

    return {
      enrollments,
      cgpa,
      totalCredits,
    };
  }
}

export const storage = new DatabaseStorage();
