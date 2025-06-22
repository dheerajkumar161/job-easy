# Jobby - Job Portal Platform

A full-stack job portal application built with React, Node.js, and MongoDB. Jobby connects job seekers with employers, providing a comprehensive platform for job posting, application management, and company profiles.

## 🚀 Features

### For Job Seekers
- **Browse Jobs**: Search and filter through available job listings
- **Job Applications**: Apply to jobs with a streamlined application process
- **Profile Management**: Create and update personal profiles
- **Application Tracking**: Monitor the status of your job applications
- **Job Descriptions**: Detailed view of job requirements and company information

### For Employers/Admins
- **Company Management**: Create and manage company profiles
- **Job Posting**: Post new job opportunities with detailed descriptions
- **Applicant Management**: Review and manage job applications
- **Admin Dashboard**: Comprehensive admin panel for managing the platform
- **User Management**: Oversee user accounts and company registrations

### General Features
- **Authentication**: Secure user registration and login system
- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS
- **Real-time Updates**: Dynamic content updates using Redux state management
- **File Upload**: Support for resume and profile image uploads via Cloudinary
- **Modern UI**: Beautiful, intuitive interface with Radix UI components

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **Redux Toolkit** - State management with Redux Persist
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible UI components
- **Framer Motion** - Animation library
- **Axios** - HTTP client for API requests
- **Lucide React** - Icon library

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **Multer** - File upload middleware
- **Cloudinary** - Cloud image storage
- **CORS** - Cross-origin resource sharing
- **Cookie Parser** - Cookie parsing middleware

## 📁 Project Structure

```
jobby/
├── backend/                 # Backend server
│   ├── controllers/        # Route controllers
│   ├── middlewares/        # Custom middleware
│   ├── models/            # MongoDB schemas
│   ├── routes/            # API routes
│   ├── utils/             # Utility functions
│   └── index.js           # Server entry point
├── frontend/              # React application
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── admin/     # Admin-specific components
│   │   │   ├── auth/      # Authentication components
│   │   │   ├── shared/    # Shared components
│   │   │   └── ui/        # UI components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── redux/         # Redux store and slices
│   │   └── utils/         # Utility functions
│   └── public/            # Static assets
└── package.json           # Root package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd jobby
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install
   
   # Install frontend dependencies
   npm install --prefix frontend
   ```

3. **Environment Setup**
   
   Create a `.env` file in the root directory:
   ```env
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

4. **Start the development server**
   ```bash
   # Start both frontend and backend
   npm run dev
   
   # Or start them separately:
   # Backend only
   npm start
   
   # Frontend only (in frontend directory)
   cd frontend && npm run dev
   ```

5. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3000

## 📚 API Endpoints

### Authentication
- `POST /api/v1/user/register` - User registration
- `POST /api/v1/user/login` - User login
- `POST /api/v1/user/logout` - User logout

### Users
- `GET /api/v1/user/profile` - Get user profile
- `PUT /api/v1/user/profile` - Update user profile

### Jobs
- `GET /api/v1/job` - Get all jobs
- `POST /api/v1/job` - Create new job (admin only)
- `GET /api/v1/job/:id` - Get job by ID
- `PUT /api/v1/job/:id` - Update job (admin only)
- `DELETE /api/v1/job/:id` - Delete job (admin only)

### Companies
- `GET /api/v1/company` - Get all companies
- `POST /api/v1/company` - Create new company (admin only)
- `GET /api/v1/company/:id` - Get company by ID
- `PUT /api/v1/company/:id` - Update company (admin only)

### Applications
- `POST /api/v1/application` - Submit job application
- `GET /api/v1/application/user` - Get user's applications
- `GET /api/v1/application/job/:jobId` - Get applications for a job (admin only)

## 🔧 Available Scripts

### Root Directory
- `npm run dev` - Start development server (both frontend and backend)
- `npm run build` - Build the application for production
- `npm start` - Start the production server

### Frontend Directory
- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 UI Components

The application uses a custom UI component library built with:
- **Radix UI** for accessible primitives
- **Tailwind CSS** for styling
- **Class Variance Authority** for component variants
- **Tailwind Merge** for class merging

## 🔐 Authentication & Authorization

- JWT-based authentication
- Protected routes for admin functionality
- Role-based access control
- Secure password hashing with bcryptjs

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile devices

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Environment Variables for Production
Make sure to set the following environment variables in your production environment:
- `MONGODB_URI`
- `JWT_SECRET`
- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`
- `PORT` (optional, defaults to 3000)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

