# COEP University Management System

## Overview

This is a comprehensive University Management System (UMS) designed for COEP Technological University. It's built as a full-stack web application with a modern React frontend and Express.js backend, using PostgreSQL for data storage through Drizzle ORM. The system supports multiple user roles including students, faculty, administrators, and other university staff.

## User Preferences

Preferred communication style: Simple, everyday language.

## Current Issues (July 24, 2025)
- User reports application not loading at http://localhost:5000
- Server confirmed running and responding with HTTP 200
- Multiple test pages created but user still reports "No" access
- Possible browser/network connectivity issue on user's end
- Need to provide multiple URL options and troubleshooting steps

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom COEP theme colors
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with role-based access control
- **Authentication**: Replit Auth integration with session management
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Session Storage**: PostgreSQL-based session store using connect-pg-simple

### Data Storage Solutions
- **Primary Database**: PostgreSQL (configured for Neon serverless)
- **ORM**: Drizzle ORM with schema-first approach
- **Migrations**: Drizzle Kit for database schema management
- **Session Storage**: PostgreSQL sessions table for authentication state

## Key Components

### Authentication System
- Replit OAuth integration for secure authentication
- Role-based access control (student, faculty, admin, parent, finance, hr, librarian, alumni)
- Session-based authentication with PostgreSQL storage
- Automatic user provisioning and role assignment

### Database Schema
- **Users**: Core user table with role assignments
- **Students**: Extended student information with academic details
- **Faculty**: Faculty profiles and course assignments
- **Courses**: Course management and enrollment tracking
- **Attendance**: QR code-based attendance system
- **Fees**: Fee structure and payment tracking
- **Library**: Book management and borrowing system
- **Assignments**: Assignment creation and submission tracking
- **Announcements**: University-wide communication system

### Core Modules
1. **Student Information System (SIS)**: Complete student lifecycle management
2. **Attendance Management**: QR code scanning for automated attendance
3. **Academic Records**: Course enrollment, grades, and transcripts
4. **Fee Management**: Online payments and financial tracking
5. **Learning Management System (LMS)**: Course materials and assignments
6. **Library Management**: Book catalog and borrowing system
7. **Profile Management**: User profile and academic information

### UI/UX Design
- Responsive design optimized for desktop and mobile
- COEP-branded color scheme with blue primary colors
- Consistent component design using shadcn/ui
- Accessible UI components with ARIA support
- Professional academic interface design

## Data Flow

### Authentication Flow
1. User selects role on landing page
2. Redirected to Replit OAuth for authentication
3. User data synchronized with local database
4. Role-specific dashboard and permissions applied
5. Session maintained in PostgreSQL for persistence

### Application Flow
1. Authenticated users access role-specific dashboards
2. API requests include authentication cookies
3. Server validates sessions and applies role-based access
4. Database queries executed through Drizzle ORM
5. Real-time updates via React Query cache invalidation

### Data Synchronization
- TanStack Query handles client-side caching and synchronization
- Optimistic updates for better user experience
- Background refetching for data consistency
- Error boundaries for graceful error handling

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL serverless driver
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **express**: Node.js web framework
- **passport**: Authentication middleware
- **openid-client**: OAuth integration

### UI Dependencies
- **@radix-ui/**: Headless UI components
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **react-hook-form**: Form state management
- **zod**: Schema validation

### Development Tools
- **vite**: Frontend build tool
- **typescript**: Type safety
- **drizzle-kit**: Database migration tool
- **tsx**: TypeScript execution for development

## Deployment Strategy

### Development Environment
- Vite dev server for frontend with HMR
- tsx for backend TypeScript execution
- Replit integration for cloud development
- Environment variables for database configuration

### Production Build
- Vite builds optimized frontend bundle
- esbuild bundles backend for Node.js execution
- Static files served from Express server
- Database migrations applied via Drizzle Kit

### Database Strategy
- PostgreSQL database provisioned via environment variables
- Schema managed through Drizzle ORM migrations
- Session storage integrated with authentication system
- Connection pooling for production scalability

### Security Considerations
- Environment-based configuration management
- Session-based authentication with secure cookies
- Role-based access control throughout the application
- SQL injection protection through parameterized queries
- CSRF protection via session management

The system is designed to be scalable, maintainable, and user-friendly, providing a comprehensive solution for university management needs while maintaining security and performance standards.