import {
  pgTable,
  text,
  varchar,
  timestamp,
  jsonb,
  index,
  serial,
  integer,
  decimal,
  boolean,
  date,
  time,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Session storage table.
// (IMPORTANT) This table is mandatory for Replit Auth, don't drop it.
export const sessions = pgTable(
  "sessions",
  {
    sid: varchar("sid").primaryKey(),
    sess: jsonb("sess").notNull(),
    expire: timestamp("expire").notNull(),
  },
  (table) => [index("IDX_session_expire").on(table.expire)]
);

// User storage table.
// (IMPORTANT) This table is mandatory for Replit Auth, don't drop it.
export const users = pgTable("users", {
  id: varchar("id").primaryKey().notNull(),
  email: varchar("email").unique(),
  firstName: varchar("first_name"),
  lastName: varchar("last_name"),
  profileImageUrl: varchar("profile_image_url"),
  role: varchar("role").notNull().default("student"), // student, faculty, admin, parent, finance, hr, librarian, alumni
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Students table
export const students = pgTable("students", {
  id: serial("id").primaryKey(),
  userId: varchar("user_id").references(() => users.id).notNull(),
  studentId: varchar("student_id").unique().notNull(),
  rollNumber: varchar("roll_number").unique().notNull(),
  admissionYear: integer("admission_year").notNull(),
  program: varchar("program").notNull(), // B.Tech, M.Tech, B.Plan
  branch: varchar("branch").notNull(), // Computer Engineering, Mechanical, etc.
  currentSemester: integer("current_semester").default(1),
  cgpa: decimal("cgpa", { precision: 4, scale: 2 }),
  dateOfBirth: date("date_of_birth"),
  gender: varchar("gender"),
  bloodGroup: varchar("blood_group"),
  fatherName: varchar("father_name"),
  motherName: varchar("mother_name"),
  address: text("address"),
  phone: varchar("phone"),
  emergencyContact: varchar("emergency_contact"),
  status: varchar("status").default("active"), // active, graduated, dropped
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Faculty table
export const faculty = pgTable("faculty", {
  id: serial("id").primaryKey(),
  userId: varchar("user_id").references(() => users.id).notNull(),
  employeeId: varchar("employee_id").unique().notNull(),
  department: varchar("department").notNull(),
  designation: varchar("designation").notNull(), // Professor, Associate Professor, etc.
  specialization: text("specialization"),
  qualification: text("qualification"),
  experience: integer("experience"), // in years
  joiningDate: date("joining_date"),
  phone: varchar("phone"),
  address: text("address"),
  status: varchar("status").default("active"), // active, inactive
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Courses table
export const courses = pgTable("courses", {
  id: serial("id").primaryKey(),
  courseCode: varchar("course_code").unique().notNull(),
  courseName: varchar("course_name").notNull(),
  credits: integer("credits").notNull(),
  semester: integer("semester").notNull(),
  branch: varchar("branch").notNull(),
  description: text("description"),
  syllabus: text("syllabus"),
  isElective: boolean("is_elective").default(false),
  maxCapacity: integer("max_capacity").default(60),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Course enrollments
export const enrollments = pgTable("enrollments", {
  id: serial("id").primaryKey(),
  studentId: integer("student_id").references(() => students.id).notNull(),
  courseId: integer("course_id").references(() => courses.id).notNull(),
  semester: integer("semester").notNull(),
  academicYear: varchar("academic_year").notNull(), // 2024-25
  grade: varchar("grade"), // A+, A, B+, etc.
  gradePoints: decimal("grade_points", { precision: 4, scale: 2 }),
  status: varchar("status").default("enrolled"), // enrolled, completed, dropped
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Faculty course assignments
export const facultyCourses = pgTable("faculty_courses", {
  id: serial("id").primaryKey(),
  facultyId: integer("faculty_id").references(() => faculty.id).notNull(),
  courseId: integer("course_id").references(() => courses.id).notNull(),
  semester: integer("semester").notNull(),
  academicYear: varchar("academic_year").notNull(),
  role: varchar("role").default("instructor"), // instructor, co-instructor
  createdAt: timestamp("created_at").defaultNow(),
});

// Attendance table
export const attendance = pgTable("attendance", {
  id: serial("id").primaryKey(),
  studentId: integer("student_id").references(() => students.id).notNull(),
  courseId: integer("course_id").references(() => courses.id).notNull(),
  facultyId: integer("faculty_id").references(() => faculty.id).notNull(),
  date: date("date").notNull(),
  time: time("time").notNull(),
  status: varchar("status").notNull(), // present, absent, late
  method: varchar("method").default("manual"), // qr, photo, manual
  qrCode: varchar("qr_code"),
  photoVerified: boolean("photo_verified").default(false),
  latitude: decimal("latitude", { precision: 10, scale: 8 }),
  longitude: decimal("longitude", { precision: 11, scale: 8 }),
  createdAt: timestamp("created_at").defaultNow(),
});

// Fee structure
export const feeStructure = pgTable("fee_structure", {
  id: serial("id").primaryKey(),
  program: varchar("program").notNull(),
  branch: varchar("branch").notNull(),
  semester: integer("semester").notNull(),
  tuitionFee: decimal("tuition_fee", { precision: 10, scale: 2 }).notNull(),
  developmentFee: decimal("development_fee", { precision: 10, scale: 2 }),
  labFee: decimal("lab_fee", { precision: 10, scale: 2 }),
  libraryFee: decimal("library_fee", { precision: 10, scale: 2 }),
  examFee: decimal("exam_fee", { precision: 10, scale: 2 }),
  otherFees: decimal("other_fees", { precision: 10, scale: 2 }),
  totalFee: decimal("total_fee", { precision: 10, scale: 2 }).notNull(),
  academicYear: varchar("academic_year").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// Fee payments
export const feePayments = pgTable("fee_payments", {
  id: serial("id").primaryKey(),
  studentId: integer("student_id").references(() => students.id).notNull(),
  receiptNumber: varchar("receipt_number").unique().notNull(),
  amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
  feeType: varchar("fee_type").notNull(), // tuition, development, lab, etc.
  paymentMethod: varchar("payment_method").notNull(), // upi, card, netbanking, cash
  transactionId: varchar("transaction_id"),
  paymentDate: timestamp("payment_date").notNull(),
  dueDate: date("due_date"),
  status: varchar("status").default("completed"), // pending, completed, failed
  semester: integer("semester").notNull(),
  academicYear: varchar("academic_year").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// Library books
export const books = pgTable("books", {
  id: serial("id").primaryKey(),
  isbn: varchar("isbn").unique(),
  title: varchar("title").notNull(),
  author: varchar("author").notNull(),
  publisher: varchar("publisher"),
  publishedYear: integer("published_year"),
  category: varchar("category").notNull(),
  totalCopies: integer("total_copies").default(1),
  availableCopies: integer("available_copies").default(1),
  location: varchar("location"), // shelf location
  description: text("description"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Book borrowings
export const bookBorrowings = pgTable("book_borrowings", {
  id: serial("id").primaryKey(),
  studentId: integer("student_id").references(() => students.id).notNull(),
  bookId: integer("book_id").references(() => books.id).notNull(),
  issueDate: date("issue_date").notNull(),
  dueDate: date("due_date").notNull(),
  returnDate: date("return_date"),
  fine: decimal("fine", { precision: 8, scale: 2 }).default("0"),
  status: varchar("status").default("issued"), // issued, returned, overdue
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Assignments
export const assignments = pgTable("assignments", {
  id: serial("id").primaryKey(),
  courseId: integer("course_id").references(() => courses.id).notNull(),
  facultyId: integer("faculty_id").references(() => faculty.id).notNull(),
  title: varchar("title").notNull(),
  description: text("description"),
  dueDate: timestamp("due_date").notNull(),
  maxMarks: integer("max_marks").default(100),
  attachments: text("attachments"), // JSON array of file URLs
  instructions: text("instructions"),
  status: varchar("status").default("active"), // active, inactive
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Assignment submissions
export const assignmentSubmissions = pgTable("assignment_submissions", {
  id: serial("id").primaryKey(),
  assignmentId: integer("assignment_id").references(() => assignments.id).notNull(),
  studentId: integer("student_id").references(() => students.id).notNull(),
  submissionText: text("submission_text"),
  attachments: text("attachments"), // JSON array of file URLs
  submittedAt: timestamp("submitted_at").defaultNow(),
  marksObtained: decimal("marks_obtained", { precision: 5, scale: 2 }),
  feedback: text("feedback"),
  status: varchar("status").default("submitted"), // submitted, graded, late
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Announcements
export const announcements = pgTable("announcements", {
  id: serial("id").primaryKey(),
  title: varchar("title").notNull(),
  content: text("content").notNull(),
  authorId: varchar("author_id").references(() => users.id).notNull(),
  priority: varchar("priority").default("normal"), // high, normal, low
  targetAudience: varchar("target_audience").default("all"), // all, students, faculty
  tags: text("tags"), // JSON array
  attachments: text("attachments"), // JSON array of file URLs
  expiryDate: timestamp("expiry_date"),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Relations
export const usersRelations = relations(users, ({ one, many }) => ({
  student: one(students, {
    fields: [users.id],
    references: [students.userId],
  }),
  faculty: one(faculty, {
    fields: [users.id],
    references: [faculty.userId],
  }),
  announcements: many(announcements),
}));

export const studentsRelations = relations(students, ({ one, many }) => ({
  user: one(users, {
    fields: [students.userId],
    references: [users.id],
  }),
  enrollments: many(enrollments),
  attendance: many(attendance),
  feePayments: many(feePayments),
  bookBorrowings: many(bookBorrowings),
  assignmentSubmissions: many(assignmentSubmissions),
}));

export const facultyRelations = relations(faculty, ({ one, many }) => ({
  user: one(users, {
    fields: [faculty.userId],
    references: [users.id],
  }),
  facultyCourses: many(facultyCourses),
  attendance: many(attendance),
  assignments: many(assignments),
}));

export const coursesRelations = relations(courses, ({ many }) => ({
  enrollments: many(enrollments),
  facultyCourses: many(facultyCourses),
  attendance: many(attendance),
  assignments: many(assignments),
}));

export const enrollmentsRelations = relations(enrollments, ({ one }) => ({
  student: one(students, {
    fields: [enrollments.studentId],
    references: [students.id],
  }),
  course: one(courses, {
    fields: [enrollments.courseId],
    references: [courses.id],
  }),
}));

export const facultyCoursesRelations = relations(facultyCourses, ({ one }) => ({
  faculty: one(faculty, {
    fields: [facultyCourses.facultyId],
    references: [faculty.id],
  }),
  course: one(courses, {
    fields: [facultyCourses.courseId],
    references: [courses.id],
  }),
}));

export const attendanceRelations = relations(attendance, ({ one }) => ({
  student: one(students, {
    fields: [attendance.studentId],
    references: [students.id],
  }),
  course: one(courses, {
    fields: [attendance.courseId],
    references: [courses.id],
  }),
  faculty: one(faculty, {
    fields: [attendance.facultyId],
    references: [faculty.id],
  }),
}));

export const booksRelations = relations(books, ({ many }) => ({
  bookBorrowings: many(bookBorrowings),
}));

export const bookBorrowingsRelations = relations(bookBorrowings, ({ one }) => ({
  student: one(students, {
    fields: [bookBorrowings.studentId],
    references: [students.id],
  }),
  book: one(books, {
    fields: [bookBorrowings.bookId],
    references: [books.id],
  }),
}));

export const assignmentsRelations = relations(assignments, ({ one, many }) => ({
  course: one(courses, {
    fields: [assignments.courseId],
    references: [courses.id],
  }),
  faculty: one(faculty, {
    fields: [assignments.facultyId],
    references: [faculty.id],
  }),
  assignmentSubmissions: many(assignmentSubmissions),
}));

export const assignmentSubmissionsRelations = relations(assignmentSubmissions, ({ one }) => ({
  assignment: one(assignments, {
    fields: [assignmentSubmissions.assignmentId],
    references: [assignments.id],
  }),
  student: one(students, {
    fields: [assignmentSubmissions.studentId],
    references: [students.id],
  }),
}));

export const announcementsRelations = relations(announcements, ({ one }) => ({
  author: one(users, {
    fields: [announcements.authorId],
    references: [users.id],
  }),
}));

// Insert schemas
export const insertUserSchema = createInsertSchema(users).omit({
  createdAt: true,
  updatedAt: true,
});

export const insertStudentSchema = createInsertSchema(students).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertFacultySchema = createInsertSchema(faculty).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertCourseSchema = createInsertSchema(courses).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertEnrollmentSchema = createInsertSchema(enrollments).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertAttendanceSchema = createInsertSchema(attendance).omit({
  id: true,
  createdAt: true,
});

export const insertFeePaymentSchema = createInsertSchema(feePayments).omit({
  id: true,
  createdAt: true,
});

export const insertBookSchema = createInsertSchema(books).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertBookBorrowingSchema = createInsertSchema(bookBorrowings).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertAssignmentSchema = createInsertSchema(assignments).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertAssignmentSubmissionSchema = createInsertSchema(assignmentSubmissions).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertAnnouncementSchema = createInsertSchema(announcements).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

// Types
export type UpsertUser = typeof users.$inferInsert;
export type User = typeof users.$inferSelect;
export type InsertStudent = z.infer<typeof insertStudentSchema>;
export type Student = typeof students.$inferSelect;
export type InsertFaculty = z.infer<typeof insertFacultySchema>;
export type Faculty = typeof faculty.$inferSelect;
export type InsertCourse = z.infer<typeof insertCourseSchema>;
export type Course = typeof courses.$inferSelect;
export type InsertEnrollment = z.infer<typeof insertEnrollmentSchema>;
export type Enrollment = typeof enrollments.$inferSelect;
export type InsertAttendance = z.infer<typeof insertAttendanceSchema>;
export type Attendance = typeof attendance.$inferSelect;
export type InsertFeePayment = z.infer<typeof insertFeePaymentSchema>;
export type FeePayment = typeof feePayments.$inferSelect;
export type InsertBook = z.infer<typeof insertBookSchema>;
export type Book = typeof books.$inferSelect;
export type InsertBookBorrowing = z.infer<typeof insertBookBorrowingSchema>;
export type BookBorrowing = typeof bookBorrowings.$inferSelect;
export type InsertAssignment = z.infer<typeof insertAssignmentSchema>;
export type Assignment = typeof assignments.$inferSelect;
export type InsertAssignmentSubmission = z.infer<typeof insertAssignmentSubmissionSchema>;
export type AssignmentSubmission = typeof assignmentSubmissions.$inferSelect;
export type InsertAnnouncement = z.infer<typeof insertAnnouncementSchema>;
export type Announcement = typeof announcements.$inferSelect;
export type FeeStructure = typeof feeStructure.$inferSelect;
export type FacultyCourse = typeof facultyCourses.$inferSelect;
