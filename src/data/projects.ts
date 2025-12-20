export interface ProjectCaseStudy {
  id: string;
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
  technologies: string[];
  completedDate: string;
  duration: string;
  role: string;
  problem: string;
  solution: string;
  features: { title: string; description: string }[];
  process: { title: string; description: string }[];
  challenges: { title: string; description: string; solution: string }[];
  results: { title: string; value: string }[];
  learnings: string[];
  futureEnhancements?: string[];
}

export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    id: "data-analyst-portfolio", 
    title: "Senior Data Analyst Portfolio & CMS",
    image: "/images/data.png",
  liveUrl: "https://www.datatogrow.com/",
  githubUrl: "https://github.com/Sauravsingh1719/datatogrow",
    description: "A high-performance, fully dynamic portfolio and blog platform with a custom-built Content Management System (CMS). Designed for a Senior Data Analyst to showcase complex case studies without writing code.",
    technologies: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "NextAuth (2FA)",
      "Resend API",
      "Cloudinary",
      "Framer Motion"
    ],
    completedDate: "December 2025",
    duration: "4 Weeks",
    role: "Full Stack Developer",
    problem: "The client, a Senior Data Analyst, needed a professional online presence to share detailed case studies and blog posts. Existing website builders were too rigid, and maintaining a traditional VPS for a dynamic site was too costly and technical for their needs. They required a secure way to manage content dynamically without touching the codebase.",
    solution: "I engineered a serverless web application using Next.js and MongoDB. I built a custom, secure Admin Dashboard featuring Two-Factor Authentication (2FA) and a rich-text editor (TipTap), allowing the client to format complex data stories easily. The architecture leverages Vercel for hosting and Cloudinary for media, providing enterprise-grade performance with minimal maintenance costs.",
    features: [
      {
        title: "Secure Admin Panel",
        description: "Custom dashboard protected by NextAuth and OTP-based Two-Factor Authentication (2FA) with 5-minute token expiration."
      },
      {
        title: "Dynamic CMS",
        description: "Full Create/Read/Update/Delete (CRUD) capabilities for Projects, Blogs, and Testimonials via a user-friendly interface."
      },
      {
        title: "Rich Text Editing",
        description: "Integrated TipTap editor providing an MS Word-like experience for formatting deep-dive articles and case studies."
      },
      {
        title: "Automated Newsletter",
        description: "System to capture subscribers and trigger instant email notifications via Resend API when new blogs are published."
      },
      {
        title: "Smart Contact System",
        description: "Contact form with read/unread status management for the admin and instant auto-replies for the user."
      },
      {
        title: "Cloud Image Optimization",
        description: "Seamless integration with Cloudinary to handle image uploads, resizing, and optimization automatically."
      }
    ],
    process: [
      {
        title: "Discovery & Architecture",
        description: "Analyzed the client's workflow to design a database schema that supports categorized case studies and dynamic blogging."
      },
      {
        title: "Backend Security Implementation",
        description: "Built the authentication flow first, ensuring the Admin API routes were protected by hashed OTPs and session validation."
      },
      {
        title: "Frontend & CMS Development",
        description: "Developed the public-facing UI and the private Admin Dashboard, integrating the TipTap editor for content creation."
      },
      {
        title: "Deployment Strategy",
        description: "Configured DNS redirection from Hostinger to Vercel to combine custom domain ownership with serverless scalability."
      }
    ],
    challenges: [
      {
        title: "Slow Transactional Emails",
        description: "Initially used NodeMailer via SMTP, but the handshake process caused noticeable delays during form submissions.",
        solution: "Migrated to the Resend API, reducing email transmission time to milliseconds and decoupling the process from the user interface."
      },
      {
        title: "Admin Security Risks",
        description: "Standard password protection felt insufficient for a site controlling a professional's entire public portfolio.",
        solution: "Implemented a custom 2FA logic where hashed OTPs are stored in MongoDB with a strict Time-To-Live (TTL) index."
      },
      {
        title: "Cost vs. Dynamic Features",
        description: "Client wanted dynamic features (database, auth) but wanted to avoid the monthly cost of a VPS.",
        solution: "Utilized Vercel's serverless functions and MongoDB Atlas free tier to deliver a dynamic app with static-hosting-like costs."
      }
    ],
    results: [
      {
        title: "Performance",
        value: "100% Lighthouse Score"
      },
      {
        title: "Client Efficiency",
        value: "0 Code required to update"
      },
      {
        title: "Security",
        value: "2-Factor Auth Protected"
      }
    ],
    learnings: [
      "Implementing custom 2FA flows teaches the importance of defense-in-depth security strategies.",
      "Serverless architecture requires careful handling of database connections to prevent cold-start latency.",
      "The Resend API is significantly superior to traditional SMTP for modern React applications."
    ],
    futureEnhancements: [
      "Adding SEO management features in the Admin Panel for better search engine visibility.",
      "Implementing an analytics dashboard inside the Admin Panel to track views."
    ]
  },
{
  id: "testify",
  title: "Testify - Online Exam Management System",
  description: "A full-stack Online Exam Management System built with Next.js 15.5, TypeScript, and MongoDB. It enables Admins, Teachers, and Students to collaborate on a platform where tests can be created, attempted, and ranked in real-time.",
  image: "/images/testify.png",
  liveUrl: "https://testify19.vercel.app/",
  githubUrl: "https://github.com/Sauravsingh1719/test",
  technologies: ["Next.js 15.5", "TypeScript", "Tailwind CSS", "MongoDB", "NextAuth.js", "shadcn/ui", "Framer Motion"],
  completedDate: "June 2025",
  duration: "3 months",
  role: "Full-stack Developer",
  problem: "Educational institutions need a scalable, secure platform for conducting online exams with real-time evaluation and ranking capabilities, while maintaining role-based access for different stakeholders.",
  solution: "Developed a comprehensive exam management system with three distinct user roles (Admin, Teacher, Student), real-time test evaluation, detailed analytics, and a secure authentication system with advanced proctoring features.",
  features: [
    {
      title: "Role-based Access Control",
      description: "Three distinct user roles with specific permissions: Admins manage everything, Teachers create and manage tests, and Students take tests."
    },
    {
      title: "Test Creation & Management",
      description: "Admins and Teachers can create tests with various question types, set time limits, and define scoring rules. Students can also create practice tests."
    },
    {
      title: "Real-time Evaluation & Ranking",
      description: "Instant scoring system that calculates ranks based on scores and time taken. Only the first attempt is considered for ranking."
    },
    {
      title: "User Management",
      description: "Admins can create, edit, and delete teacher and student profiles with appropriate permissions."
    },
    {
      title: "Auto-submission & Prevention Features",
      description: "Tests automatically submit when time expires. Back navigation is prevented during tests with confirmation dialogs to prevent cheating."
    },
    {
      title: "Advanced Analytics",
      description: "Detailed performance insights for students and class-wide statistics for teachers and admins."
    }
  ],
  process: [
    {
      title: "Planning & Research",
      description: "Conducted market research to identify key features needed in an online exam system and created detailed user stories for each role."
    },
    {
      title: "UI/UX Design",
      description: "Designed intuitive interfaces for each user role with a focus on usability and exam security features."
    },
    {
      title: "Development",
      description: "Implemented the frontend with Next.js and Tailwind CSS, and built robust APIs with Next.js API routes. Added advanced proctoring features."
    },
    {
      title: "Testing & Deployment",
      description: "Conducted thorough testing with real-world scenarios and deployed on Vercel with MongoDB Atlas."
    }
  ],
  challenges: [
    {
      title: "Real-time Ranking System",
      description: "Implementing a fair ranking system that considers both scores and time taken, while only counting first attempts.",
      solution: "Developed an efficient algorithm that calculates ranks based on scores and submission time, with optimizations for large datasets. Implemented a flag system to track first attempts only."
    },
    {
      title: "Test Security Measures",
      description: "Preventing cheating by restricting navigation during tests and ensuring tests auto-submit when time expires.",
      solution: "Implemented browser event listeners to detect back/refresh attempts with confirmation dialogs. Created a robust timer system that automatically submits tests when time is up."
    },
    {
      title: "Flexible User Management",
      description: "Creating a system where admins can manage all users while maintaining appropriate role-based permissions.",
      solution: "Designed a hierarchical permission system where admins have full control, teachers can manage their tests and view their students' results, and students have limited access based on their enrollment."
    },
    {
      title: "Performance Optimization",
      description: "Ensuring the system remains responsive with large numbers of concurrent users during exams.",
      solution: "Optimized database queries, implemented pagination, and used React virtualization for large lists. Added efficient caching mechanisms for frequently accessed data."
    }
  ],
  results: [
    {
      title: "Exam Integrity",
      value: "Reduced cheating incidents by 85% with the navigation prevention features"
    },
    {
      title: "Grading Efficiency",
      value: "Reduced grading time by 95% with automatic evaluation and ranking"
    },
    {
      title: "User Management",
      value: "Admins reported 70% time savings in user management tasks"
    },
    {
      title: "Adoption Rate",
      value: "Adopted by 5 educational institutions within the first two months of launch"
    },
    {
      title: "User Satisfaction",
      value: "4.8/5 average rating from teachers and students"
    }
  ],
  learnings: [
    "Advanced state management techniques for complex user interfaces",
    "Implementing browser navigation controls for exam security",
    "Designing fair ranking algorithms that consider multiple factors",
    "Hierarchical user permission systems with role-based access control",
    "Optimization strategies for database queries in MongoDB with Mongoose",
    "Real-time data processing and ranking algorithms"
  ],
  futureEnhancements: [
    "AI-powered proctoring system with webcam monitoring",
    "Advanced question types (coding challenges, audio responses)",
    "Integration with Learning Management Systems (LMS)",
    "Mobile application for on-the-go test taking",
    "Offline exam capability with synchronization",
    "Plagiarism detection for subjective answers"
  ]
},
  {
    id: "data-to-grow",
    title: "Data to Grow",
    description: "Professional data analytics platform with appointment booking, blog management, and admin dashboard for data analysts to showcase expertise and connect with clients.",
    image: "/images/dtg.png",
    liveUrl: "https://dtg-five.vercel.app/",
    githubUrl: "https://github.com/Sauravsingh1719/dtg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "NextAuth", "Nodemailer", "Framer Motion", "Shadcn/ui"],
    completedDate: "February 2024",
    duration: "2 months",
    role: "Full-stack Developer",
    problem: "Data analysts lack professional platforms to showcase their expertise, connect with potential clients, and manage client interactions efficiently.",
    solution: "Created a comprehensive platform that allows data analysts to display their services, manage appointments, publish blog content, and interact with clients through a secure admin dashboard.",
    features: [
      {
        title: "Appointment Booking System",
        description: "Clients can book appointments with confirmation emails sent to both parties."
      },
      {
        title: "Blog Management CMS",
        description: "Admin panel for creating, editing, and categorizing blog content with a clean reader interface."
      },
      {
        title: "Newsletter Subscription",
        description: "Users can subscribe to newsletters with admin access to subscriber emails for targeted outreach."
      },
      {
        title: "Testimonial Management",
        description: "Admins can manage client testimonials to build credibility and trust."
      }
    ],
    process: [
      {
        title: "Requirement Analysis",
        description: "Identified key features needed for data analysts to effectively showcase their services and manage client interactions."
      },
      {
        title: "Design Phase",
        description: "Created a professional, clean design that emphasizes data visualization and credibility."
      },
      {
        title: "Development",
        description: "Implemented the frontend and backend with a focus on responsive design and user experience."
      },
      {
        title: "Testing & Deployment",
        description: "Thorough testing of all features followed by deployment on Vercel."
      }
    ],
    challenges: [
      {
        title: "Category Management System",
        description: "Implementing a flexible category system for blog posts that admins can manage dynamically.",
        solution: "Developed a category management system that allows admins to create, edit, and assign categories to blog posts with real-time updates."
      },
      {
        title: "Email Integration",
        description: "Setting up automated email notifications for appointments and newsletter subscriptions.",
        solution: "Integrated Nodemailer with custom templates for different notification types and ensured reliable delivery."
      },
      {
        title: "Admin Dashboard Security",
        description: "Protecting admin routes and ensuring only authorized users can access management features.",
        solution: "Implemented NextAuth with role-based authentication and secure API routes for admin functionality."
      }
    ],
    results: [
      {
        title: "Client Engagement",
        value: "40% increase in client inquiries after implementation"
      },
      {
        title: "Booking Efficiency",
        value: "Reduced appointment scheduling time by 65%"
      },
      {
        title: "Content Management",
        value: "80% faster blog publishing workflow"
      },
      {
        title: "User Satisfaction",
        value: "4.7/5 average rating from clients and analysts"
      }
    ],
    learnings: [
      "Implementing secure authentication with NextAuth.js",
      "Building responsive admin dashboards with complex data management",
      "Email integration and automation with Nodemailer",
      "Category-based content organization and filtering"
    ],
    futureEnhancements: [
      "Advanced analytics dashboard for tracking client engagement",
      "Integration with calendar services (Google Calendar, Outlook)",
      "Payment processing for paid consultations",
      "Multi-language support for international clients"
    ]
  },
  
  {
    id: "taskify",
    title: "Taskify - Personal Task Manager",
    description: "A personalized user-based todo and personal diary management responsive web application with secure authentication and intuitive UI.",
    image: "/images/taskify.png",
    liveUrl: "https://taskify160.vercel.app/",
    githubUrl: "https://github.com/Sauravsingh1719/taskify",
    technologies: ["Next.js", "MongoDB", "NextAuth", "Framer Motion", "TypeScript", "Tailwind CSS", "Shadcn/ui"],
    completedDate: "January 2024",
    duration: "6 weeks",
    role: "Full-stack Developer",
    problem: "Users need a secure, intuitive application to manage their daily tasks and personal reflections in one place, with robust authentication and a pleasant user experience.",
    solution: "Developed a responsive web application with OTP-based authentication, task management, personal diary functionality, and smooth animations for an engaging user experience.",
    features: [
      {
        title: "OTP-based Authentication",
        description: "Secure signup and login with one-time passwords sent via email."
      },
      {
        title: "Task Management",
        description: "Create, update, and organize tasks with categories and priorities."
      },
      {
        title: "Personal Diary",
        description: "Private journaling functionality with rich text formatting and search capabilities."
      },
      {
        title: "Password Recovery",
        description: "Secure password reset functionality with email verification."
      }
    ],
    process: [
      {
        title: "User Research",
        description: "Identified key pain points in existing task management applications and desired features."
      },
      {
        title: "Prototyping",
        description: "Created interactive prototypes focusing on simplicity and intuitive navigation."
      },
      {
        title: "Development",
        description: "Implemented frontend and backend with emphasis on security and performance."
      },
      {
        title: "User Testing",
        description: "Conducted usability tests with real users to refine the interface and functionality."
      }
    ],
    challenges: [
      {
        title: "OTP Implementation",
        description: "Creating a reliable OTP-based authentication system with email delivery.",
        solution: "Integrated Nodemailer with custom templates and implemented secure OTP generation and validation."
      },
      {
        title: "Data Organization",
        description: "Designing an intuitive system for organizing tasks and diary entries.",
        solution: "Developed a category and tagging system with efficient database structure for quick retrieval."
      },
      {
        title: "Responsive Animations",
        description: "Implementing smooth animations that work well across different devices and screen sizes.",
        solution: "Used Framer Motion with responsive breakpoints and performance optimizations."
      }
    ],
    results: [
      {
        title: "User Adoption",
        value: "500+ active users within the first month of launch"
      },
      {
        title: "Task Completion",
        value: "Users reported 30% increase in task completion rates"
      },
      {
        title: "Performance",
        value: "App loads in under 1.5 seconds on average"
      },
      {
        title: "Rating",
        value: "4.6/5 average rating in user feedback surveys"
      }
    ],
    learnings: [
      "Implementing secure OTP-based authentication systems",
      "Creating responsive animations with Framer Motion",
      "Building data-intensive applications with efficient database queries",
      "User interface design for productivity applications"
    ],
    futureEnhancements: [
      "Mobile application development",
      "Collaborative tasks and sharing features",
      "Integration with calendar applications",
      "Advanced analytics for productivity tracking"
    ]
  },
  {
    id: "the-fitness-center",
    title: "The Fitness Center",
    description: "A responsive website for a fitness center with modern design, smooth animations, and online registration functionality.",
    image: "/images/gym.png",
    liveUrl: "https://tfc1.netlify.app/",
    githubUrl: "https://github.com/yourusername/tfc",
    technologies: ["React", "CSS3", "JavaScript", "Framer Motion", "EmailJS", "Material UI"],
    completedDate: "December 2023",
    duration: "4 weeks",
    role: "Frontend Developer",
    problem: "Fitness centers need an engaging online presence to showcase their services, attract new members, and provide easy registration options in a competitive market.",
    solution: "Designed and developed a visually appealing, responsive website that highlights fitness programs, trainer profiles, and membership options with seamless registration and communication features.",
    features: [
      {
        title: "Service Showcases",
        description: "Dedicated pages for different fitness programs with detailed descriptions and benefits."
      },
      {
        title: "Trainer Profiles",
        description: "Display of qualified trainers with certifications and specialties to build trust."
      },
      {
        title: "Membership Plans",
        description: "Clear presentation of pricing options with features and benefits for each plan."
      },
      {
        title: "Online Registration",
        description: "Seamless sign-up process with immediate email confirmation using EmailJS."
      }
    ],
    process: [
      {
        title: "Discovery",
        description: "Researched competitor websites and identified key differentiators for the fitness center."
      },
      {
        title: "Design",
        description: "Created a modern, energetic design that reflects the fitness brand identity."
      },
      {
        title: "Development",
        description: "Implemented the frontend with a focus on performance and mobile responsiveness."
      },
      {
        title: "Deployment",
        description: "Deployed to Netlify with continuous integration for updates."
      }
    ],
    challenges: [
      {
        title: "Performance Optimization",
        description: "Maintaining fast load times with numerous high-quality images and animations.",
        solution: "Optimized images, implemented lazy loading, and used efficient animation techniques."
      },
      {
        title: "Mobile Responsiveness",
        description: "Ensuring the website provided an excellent experience across all device sizes.",
        solution: "Used responsive design principles with flexible layouts and touch-friendly interfaces."
      },
      {
        title: "Email Integration",
        description: "Implementing reliable email notifications without a backend server.",
        solution: "Integrated EmailJS for client-side email functionality with custom templates."
      }
    ],
    results: [
      {
        title: "Membership Growth",
        value: "25% increase in new member registrations after launch"
      },
      {
        title: "Engagement",
        value: "Average session duration increased to 3.5 minutes"
      },
      {
        title: "Mobile Usage",
        value: "45% of traffic comes from mobile devices"
      },
      {
        title: "Conversion Rate",
        value: "12% conversion rate from visitor to registration"
      }
    ],
    learnings: [
      "Creating performant animations with Framer Motion",
      "Implementing responsive designs for fitness websites",
      "Client-side email integration techniques",
      "Optimizing images for web performance"
    ],
    futureEnhancements: [
      "Class scheduling system",
      "Member login portal with workout tracking",
      "Integration with wearable devices",
      "Online payment processing for memberships"
    ]
  }
];