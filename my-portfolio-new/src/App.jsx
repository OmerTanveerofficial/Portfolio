import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Briefcase, Code, Database, ArrowRight, Sparkles } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'experience', 'education', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);

      const elements = document.querySelectorAll('.fade-in-section');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const id = el.getAttribute('data-id');
        if (rect.top < window.innerHeight * 0.85) {
          setIsVisible(prev => ({ ...prev, [id]: true }));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const experience = [
    {
      company: "flicken.io",
      position: "Front End Developer (Internship)",
      period: "2024",
      description: "Worked on building responsive and interactive user interfaces using React.js. Collaborated with the team to implement modern web design patterns and optimize application performance.",
      achievements: [
        "Developed responsive web applications using React.js",
        "Implemented modern UI/UX designs",
        "Collaborated with backend team for API integration"
      ]
    },
    {
      company: "DigiTec Ultra",
      position: "Web Development Internee",
      period: "2023 - 2024",
      description: "Gained foundational knowledge in web development technologies including HTML, CSS, JavaScript, and React.js. Built multiple projects to strengthen front-end development skills.",
      achievements: [
        "Learned and applied HTML, CSS, and JavaScript fundamentals",
        "Built interactive web applications using React.js",
        "Developed problem-solving skills through practical projects"
      ]
    }
  ];

  const projects = [
    {
      title: "Zakaat Web Application",
      description: "A comprehensive Zakaat management system built with React that enables users to perform CRUD operations, donate money, manage authentication, and contribute to specific categories.",
      technologies: ["React", "JavaScript", "Authentication", "CRUD"],
      github: "https://github.com/OmerTanveerofficial/Zakaat-Web-Application",
      stars: "1",
      gradient: "from-purple-400 to-pink-600"
    },
    {
      title: "E-Commerce Shopping Website",
      description: "Full-featured e-commerce platform for clothing with complete CRUD functionality. Demonstrates real-world React concepts including state management and routing.",
      technologies: ["React", "JavaScript", "E-commerce", "State Management"],
      github: "https://github.com/OmerTanveerofficial/Ecommerce-Shopping-Website-CRUD",
      gradient: "from-blue-400 to-cyan-600"
    },
    {
      title: "Shoe Size Measurement & AR",
      description: "Innovative e-commerce store featuring shoe size measurement and augmented reality capabilities with machine learning algorithms.",
      technologies: ["React", "Vite", "ML", "AR", "Computer Vision"],
      github: "https://github.com/OmerTanveerofficial/Shoe-Size-Measurement-and-AR-with-e-commerce-store-using-React",
      gradient: "from-green-400 to-emerald-600"
    },
    {
      title: "Weather Forecast App",
      description: "Real-time weather forecast application built with React using modern hooks. Integrates weather APIs to provide accurate weather information.",
      technologies: ["React", "JavaScript", "API Integration", "Hooks"],
      github: "https://github.com/OmerTanveerofficial/weatherforecast",
      gradient: "from-orange-400 to-red-600"
    },
    {
      title: "Rainfall Prediction System",
      description: "Machine learning project for weather forecasting using Python and datasets in Google Colab with predictive algorithms.",
      technologies: ["Python", "ML", "Google Colab", "Data Analysis"],
      github: "https://github.com/OmerTanveerofficial/Rainfall-Prediction",
      gradient: "from-indigo-400 to-purple-600"
    },
    {
      title: "JavaScript Calculator",
      description: "Clean and functional calculator application built with vanilla JavaScript featuring a user-friendly interface with standard arithmetic operations.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/OmerTanveerofficial/Calculator",
      gradient: "from-pink-400 to-rose-600"
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Capital University of Science and Technology",
      period: "2021 - 2025",
      description: "Comprehensive computer science education covering core programming concepts, algorithms, and software development.",
      courses: ["C++", "Object-Oriented Programming", "Database Management (MySQL)", "Design and Analysis of Algorithms", "Theory of Automata,", "Data Structures", "Web Development (HTML, CSS, JavaScript, React)", "Software Engineering Principles", "Operating Systems", "Computer Networks", "Artificial Intelligence Basics","Penetration Testing", "Python"],
      project: {
        title: "E-Commerce Shoe Website with AR",
        description: "Final Year Project featuring an admin panel with CRUD operations, virtual shoe try-on using Augmented Reality, and shoe size measurement through camera integration.",
        link: "https://rook-fyp.vercel.app/",
        technologies: ["React", "AR Technology", "Computer Vision", "Admin Dashboard"]
      }
    },
    {
      degree: "FSC Pre-Engineering",
      institution: "Punjab College Multan",
      period: "2019 - 2021",
      description: "Focused on Mathematics, Physics, and Chemistry, building a strong analytical and problem-solving foundation."
    }
  ];

  const skills = {
    "Frontend": ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js","Redux","TypeScript", "Responsive Design", "UI/UX Design(Figma)", "Tailwind CSS", "Bootstrap"],
    "Backend & Database": ["MySQL", "MongoDB", "REST APIs", "Database Design"],
    "Tools & Technologies": ["Git", "GitHub", "VS Code", "Chrome DevTools", "npm", "LucidChart"],
    "Core Competencies": ["Problem Solving", "Team Collaboration", "Agile Development", "Code Review"]
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
        
        .fade-in-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .fade-in-section.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Omer Tanveer
            </div>
            
            <div className="hidden md:flex space-x-8">
              {[
                ['home', 'Home'],
                ['experience', 'Experience'],
                ['education', 'Education'],
                ['projects', 'Projects'],
                ['skills', 'Skills'],
                ['contact', 'Contact']
              ].map(([id, label]) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`text-sm font-medium transition-all duration-300 relative group ${
                    activeSection === id 
                      ? 'text-blue-600' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {label}
                  <span className={`absolute -bottom-8 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ${
                    activeSection === id ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                  }`}></span>
                </button>
              ))}
            </div>

            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/omer-tanveer-1b71a6324/" target="_blank" rel="noopener noreferrer" 
                className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-110 transform">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/OmerTanveerofficial" target="_blank" rel="noopener noreferrer" 
                className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-110 transform">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="text-blue-600 animate-pulse" size={20} />
                <p className="text-blue-600 font-medium">FRONT END DEVELOPER</p>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Creating <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">engaging</span> web experiences
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-fade-in-up animation-delay-200">
                Front End Developer with 1+ years of experience specializing in React.js and modern web technologies. 
                Passionate about building responsive, user-friendly interfaces.
              </p>
              <div className="flex gap-4 animate-fade-in-up animation-delay-400">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  Get In Touch <ArrowRight size={18} />
                </button>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-medium hover:border-blue-600 hover:text-blue-600 hover:shadow-lg transition-all duration-300"
                >
                  View Projects
                </button>
              </div>
            </div>
            
            <div className="animate-fade-in-up animation-delay-300 flex justify-center md:justify-end">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <div className="relative">
                  <img 
                    src="../public/Omer_photo.jpg" 
                    alt="Omer Tanveer"
                    className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/20 to-purple-600/20 group-hover:opacity-0 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-12 fade-in-section" data-id="exp-title">
            <Briefcase className="text-blue-600" size={32} />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Professional Experience
            </h2>
          </div>
          
          <div className="space-y-8">
            {experience.map((job, idx) => (
              <div 
                key={idx} 
                className={`bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 fade-in-section ${
                  isVisible[`exp-${idx}`] ? 'visible' : ''
                }`}
                data-id={`exp-${idx}`}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{job.position}</h3>
                    <p className="text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">{job.company}</p>
                  </div>
                  <span className="text-gray-500 font-medium mt-2 md:mt-0 bg-blue-50 px-4 py-1 rounded-full">{job.period}</span>
                </div>
                <p className="text-gray-700 mb-4">{job.description}</p>
                <div className="space-y-2">
                  {job.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-2 group">
                      <span className="text-blue-600 mt-1 group-hover:scale-125 transition-transform">•</span>
                      <span className="text-gray-600">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="py-20 px-6 relative bg-gradient-to-br from-blue-50/50 to-purple-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-12 fade-in-section" data-id="edu-title">
            <Database className="text-blue-600" size={32} />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Education
            </h2>
          </div>
          
          <div className="space-y-8">
            {education.map((edu, idx) => (
              <div 
                key={idx} 
                className={`bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 fade-in-section ${
                  isVisible[`edu-${idx}`] ? 'visible' : ''
                }`}
                data-id={`edu-${idx}`}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{edu.degree}</h3>
                    <p className="text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">{edu.institution}</p>
                  </div>
                  <span className="text-gray-500 font-medium mt-2 md:mt-0 bg-blue-50 px-4 py-1 rounded-full">{edu.period}</span>
                </div>
                <p className="text-gray-700 mb-4">{edu.description}</p>
                
                {edu.courses && (
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Key Courses:</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, i) => (
                        <span key={i} className="text-xs bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 px-3 py-1 rounded-full border border-blue-100">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {edu.project && (
                  <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100">
                    <div className="flex items-start gap-2 mb-2">
                      <Code className="text-blue-600 mt-1" size={20} />
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-1">{edu.project.title}</h4>
                        <p className="text-gray-700 text-sm mb-2">{edu.project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {edu.project.technologies.map((tech, i) => (
                            <span key={i} className="text-xs bg-white text-gray-700 px-2 py-1 rounded border border-blue-200">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <a 
                          href={edu.project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors text-sm group"
                        >
                          View Live Project <ExternalLink size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-12 fade-in-section" data-id="proj-title">
            <Code className="text-blue-600" size={32} />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div 
                key={idx} 
                className={`group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-200 fade-in-section ${
                  isVisible[`proj-${idx}`] ? 'visible' : ''
                }`}
                data-id={`proj-${idx}`}
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="text-xs bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 px-3 py-1 rounded-full border border-blue-100 hover:scale-110 transition-transform cursor-default">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {project.stars && (
                    <p className="text-sm text-yellow-600 font-medium mb-4 flex items-center gap-1">
                      <span className="animate-pulse">⭐</span> {project.stars} star
                    </p>
                  )}
                  
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-900 font-medium hover:text-blue-600 transition-colors group"
                  >
                    View on GitHub <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-12 fade-in-section" data-id="skill-title">
            <Database className="text-blue-600" size={32} />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Technical Skills
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items], idx) => (
              <div 
                key={idx} 
                className={`bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 fade-in-section ${
                  isVisible[`skill-${idx}`] ? 'visible' : ''
                }`}
                data-id={`skill-${idx}`}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">{category}</h3>
                <div className="space-y-2">
                  {items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-blue-600">•</span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-600">
              Open to new opportunities and collaborations. Feel free to reach out!
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 shadow-xl">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input 
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition-colors resize-none"
                ></textarea>
              </div>
              <button 
                onClick={(e) => e.preventDefault()}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Connect with me:</p>
            <div className="flex justify-center gap-8">
              <a href="https://github.com/OmerTanveerofficial" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-900 hover:text-blue-600 transition-colors">
                <Github size={20} />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/omer-tanveer-1b71a6324/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-900 hover:text-blue-600 transition-colors">
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a href="https://www.instagram.com/omer_tanveer.93/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-900 hover:text-blue-600 transition-colors">
                <Mail size={20} />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-8 px-6 relative">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2025 Omer Tanveer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}