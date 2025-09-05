Phase 1: Core Admin Features - Work Breakdown Structure (WBS)
1. DATABASE SETUP & SCHEMA
Estimated Time: 2-3 hours

1.1 Database Configuration
 Install PostgreSQL locally
 Create database oursouls_db
 Set up connection configuration
 Update .env with database credentials
 Test database connection
1.2 Core Tables Implementation
 1.2.1 users table

id (UUID, PK)
email (unique)
password_hash
role ('admin', 'therapist', 'client')
first_name, last_name
status ('active', 'inactive', 'pending')
created_at, updated_at
 1.2.2 user_sessions table

id (UUID, PK)
user_id (FK)
session_token (unique)
expires_at
created_at
 1.2.3 therapist_profiles table

id (UUID, PK)
user_id (unique FK)
license_number
bio
consultation_fee
is_verified (boolean)
is_active (boolean)
created_at, updated_at
 1.2.4 appointments table (basic)

id (UUID, PK)
client_id (FK)
therapist_id (FK)
appointment_date
start_time, end_time
status ('scheduled', 'completed', 'cancelled')
created_at, updated_at
1.3 Sample Data Creation
 Create admin user (admin@oursouls.com)
 Create 5 sample client users
 Create 3 sample therapist users
 Create 2 sample therapist profiles
 Create 10 sample appointments
2. BACKEND API DEVELOPMENT
Estimated Time: 4-5 hours

2.1 Authentication System
 2.1.1 JWT Configuration

JWT secret setup
Token generation function
Token verification middleware
 2.1.2 Password Security

bcrypt password hashing
Password validation
Secure login process
 2.1.3 Auth Endpoints

POST /api/auth/login
POST /api/auth/logout
GET /api/auth/me (get current user)
2.2 Role-Based Access Control
 2.2.1 Middleware Functions

requireAuth - verify valid token
requireRole(role) - verify user role
requireAdmin - admin-only access
 2.2.2 Authorization Testing

Test admin access
Test role restrictions
Test unauthorized access
2.3 Admin API Endpoints
 2.3.1 Dashboard Overview API

GET /api/admin/overview
Return: user counts, therapist counts, appointment counts
Response format: { totalUsers, totalTherapists, pendingVerifications, totalAppointments }
 2.3.2 User Management API

GET /api/admin/users (with filters)
GET /api/admin/users/:id
PUT /api/admin/users/:id (update role/status)
DELETE /api/admin/users/:id (deactivate)
 2.3.3 Therapist Management API

GET /api/admin/therapists
GET /api/admin/therapists/pending (verification queue)
PUT /api/admin/therapists/:id/verify
PUT /api/admin/therapists/:id/status (activate/deactivate)
 2.3.4 Appointment Management API

GET /api/admin/appointments
GET /api/admin/appointments/stats
PUT /api/admin/appointments/:id/status
3. FRONTEND IMPLEMENTATION
Estimated Time: 6-7 hours

3.1 Authentication Integration
 3.1.1 Auth Context/Store

Create auth context or Zustand store
Login/logout functions
User state management
Token storage (localStorage/cookies)
 3.1.2 Login Updates

Update existing Login.tsx to work with backend
Add role-based redirects
Handle admin login flow
3.2 Route Protection
 3.2.1 Protected Route Component

Create <ProtectedRoute> wrapper
Role-based access control
Redirect logic for unauthorized users
 3.2.2 Admin Route Setup

Add /admin route in App.tsx
Protect with admin role requirement
Hide admin links from regular users
3.3 Admin Dashboard Layout
 3.3.1 Admin Layout Component

Create AdminLayout.tsx
Admin-specific header/sidebar
Navigation menu for admin sections
 3.3.2 Dashboard Overview Page

Create AdminDashboard.tsx
Metrics cards (users, therapists, appointments)
Recent activity feed
Quick action buttons
3.4 User Management Interface
 3.4.1 User List Component

Create UserManagement.tsx
Searchable/filterable user table
Pagination support
Role badges and status indicators
 3.4.2 User Actions

Edit user modal/drawer
Role change dropdown
Activate/deactivate toggle
Bulk action checkboxes
3.5 Therapist Management Interface
 3.5.1 Therapist List Component

Create TherapistManagement.tsx
Verification status indicators
Profile completeness progress
License verification section
 3.5.2 Verification Queue

Pending verification list
Document viewer (if applicable)
Approve/reject actions
Verification notes/comments
3.6 Appointment Overview Interface
 3.6.1 Appointment Dashboard

Create AppointmentManagement.tsx
Today's appointments list
Status distribution chart
Quick stats (completed, cancelled, etc.)
 3.6.2 Appointment Actions

View appointment details
Change appointment status
Search/filter appointments
Export functionality
4. INTEGRATION & TESTING
Estimated Time: 2-3 hours

4.1 API Integration
 Connect frontend components to backend APIs
 Error handling and loading states
 Success/error notifications
 Data refresh mechanisms
4.2 End-to-End Testing
 4.2.1 Admin Login Flow

Login as admin user
Verify dashboard access
Test regular user cannot access admin
 4.2.2 User Management Flow

View user list
Change user role
Activate/deactivate user
Search and filter users
 4.2.3 Therapist Management Flow

View therapist list
Access verification queue
Verify/reject therapist
Update therapist status
 4.2.4 Appointment Management Flow

View appointment overview
Check appointment details
Update appointment status
4.3 UI/UX Polish
 Responsive design testing
 Loading states and spinners
 Error message improvements
 Success feedback notifications
5. DEPLOYMENT PREPARATION
Estimated Time: 1-2 hours

5.1 Environment Setup
 Production environment variables
 Database migration scripts
 Build configuration
 Error logging setup
5.2 Security Review
 Admin route protection audit
 SQL injection prevention
 XSS protection
 Rate limiting consideration

