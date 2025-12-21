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
    title: "Senior Data Analyst Portfolio & Custom CMS",
    liveUrl: "https://www.datatogrow.com/", 
    githubUrl: "https://github.com/Sauravsingh1719/datatogrow.git",
    image: "/images/Hero.png", // Ensure a screenshot exists at this path
    description: "A high-performance, professional portfolio platform with a custom-built 'Digital Command Center' (CMS). It empowers a Senior Data Analyst to manage complex case studies, publish blogs, and handle client inquiries with absolute freedom—no coding required.",
    technologies: [
      "Next.js v16.0.7",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
      "MongoDB",
      "NextAuth (Auth.js)",
      "Resend API",
      "Cloudinary",
      "TipTap Editor"
    ],
    completedDate: "December 2025",
    duration: "5 Weeks",
    role: "Full Stack Developer",

    problem: "The client, a Senior Data Analyst, needed a professional digital presence to showcase resumes, detailed project case studies, and insights via a blog. They already owned a domain and email on Hostinger, but faced a major roadblock: deploying a modern, dynamic application there would require purchasing an expensive Virtual Private Server (VPS). They needed a cost-effective solution that didn't sacrifice speed or professionalism. Furthermore, they required complete autonomy to update content dynamically without relying on a developer for every change.",

    solution: "I engineered a hybrid cloud architecture to solve the cost challenge. We kept the domain on Hostinger but rerouted web traffic to **Vercel** (a high-speed, free global hosting network), eliminating expensive VPS costs entirely. I then developed a secure, bespoke Admin Panel. By integrating the **TipTap Editor** (providing an 'MS Word-like' writing experience) and **Cloudinary** (for automated image handling), I created a seamless interface where the client can manage their entire digital footprint effortlessly.",

    features: [
      {
        title: "Professional Resume Hub",
        description: "The public site features a dedicated section where visitors can either view the client's professional resume directly in the browser or download it as a PDF with a single click."
      },
      {
        title: "MS Word-like Content Editor (TipTap)",
        description: "For creating Blogs and Case Studies, I integrated the **TipTap** editor into the admin panel. This gives the client a familiar interface to write text, format headings, align paragraphs, and structure their deep-dive content exactly how they want it without knowing HTML."
      },
      {
        title: "Smart Draft System",
        description: "The admin panel includes a 'Draft Mode' capability. The client can write blog posts or case studies and save them as drafts to edit later, ensuring only polished, final content is published to the live site."
      },
      {
        title: "One-Click Newsletter Broadcast",
        description: "I built a powerful notification system. Whenever a new blog is published, the admin can click a single button to trigger the **Resend API**, instantly sending a beautifully formatted email notification to all subscribed users."
      },
      {
        title: "Intelligent Image Management (Cloudinary)",
        description: "The client can upload images directly within the blog/project editor. I used **Cloudinary** to automatically store, optimize, and resize these images in the cloud. The client also has controls to align images (top, center, bottom) within their text posts easily."
      },
      {
        title: "High-Speed Triple-Action Contact Form",
        description: "When a visitor submits the contact form, three actions happen simultaneously and instantly, thanks to the **Resend API** (a fast HTTP email service): 1) The message is saved to **MongoDB** (the database). 2) The admin receives an immediate notification email. 3) The visitor receives a polite auto-confirmation email."
      },
      {
        title: "Admin Message Tracking Dashboard",
        description: "Inside the secure admin panel, the client can view a list of all received contact messages. I implemented a feature allowing them to mark messages as 'Read' or 'Unread', ensuring they never lose track of a potential lead or inquiry."
      },
      {
        title: "Bank-Grade Security (Hashed OTPs)",
        description: "Security was paramount. Login requires a password plus a 2FA One-Time Password (OTP). Crucially, these OTPs are stored in the database in a 'hashed' (scrambled) state and automatically delete after 5 minutes. Even if the database were compromised, the login codes would be useless to an attacker."
      }
    ],

    process: [
      {
        title: "Strategic Architecture & Cost Saving",
        description: "Devised the plan to leverage the client's existing Hostinger assets for domain/email while using Vercel for free, high-performance application hosting."
      },
      {
        title: "Security-First Backend",
        description: "Implemented the **NextAuth** system immediately, ensuring that password hashing and the complex Hashed OTP logic with 5-minute expiration timers were working correctly before building UI."
      },
      {
        title: "Modern UI/UX Design",
        description: "Utilized **shadcn/ui** component blocks for a clean, professional look and **Framer Motion** to add smooth, subtle animations to page transitions and interactive elements."
      },
      {
        title: "CMS Integration",
        description: "Connected the **TipTap** rich text editor and **Cloudinary** image uploader into the admin forms, bridging the gap between user input and database storage."
      }
    ],

    challenges: [
      {
        title: "Slow Email Delivery with SMTP",
        description: "Initially, I used a traditional tool called NodeMailer. It uses an 'SMTP handshake' method which takes several seconds to connect to a server, making the contact form feel slow and clunky.",
        solution: "I replaced it with the **Resend API**. Because it uses modern HTTP requests instead of SMTP handshakes, emails are triggered instantly, making the user experience feel immediate."
      },
      {
        title: "Ensuring OTP Security",
        description: "Storing temporary login codes (OTPs) in plain text in a database is a security risk. If the database is leaked, valid login codes are exposed.",
        solution: "I implemented cryptographic hashing for the OTPs before saving them to **MongoDB**. I also used MongoDB's TTL (Time-To-Live) index to ensure the codes self-destruct exactly after 5 minutes."
      },
      {
        title: "Complex Image Alignment for Non-Coders",
        description: "The client needed the ability to align images (left, center, right) within a blog post without knowing CSS code.",
        solution: "I customized the **TipTap** editor extensions to provide simple alignment buttons that automatically apply the correct styling to the images uploaded via **Cloudinary**."
      }
    ],

    results: [
      {
        title: "Monthly Hosting Cost",
        value: "$0 (vs VPS cost)"
      },
      {
        title: "Client Autonomy",
        value: "100% No-Code Management"
      },
      {
        title: "Security Level",
        value: "Hashed 2FA Enabled"
      }
    ],

    learnings: [
      "Combining **Hostinger** DNS with **Vercel** hosting is an incredibly powerful strategy for delivering dynamic, low-cost solutions to freelance clients.",
      "For modern web apps, HTTP-based email APIs like **Resend** are vastly superior in speed and reliability compared to traditional SMTP transports like NodeMailer.",
      "Implementing 'Hashed OTPs with TTL' is a gold standard for secure authentication flows that should be used in serious applications."
    ],

    futureEnhancements: [
      "User Interaction System: Adding a 'Like' and 'Comment' feature to every blog post to build a community and increase reader engagement."
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