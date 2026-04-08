import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Briefcase, Code, Database, ArrowRight, Sparkles, Globe, Brain, Eye, Activity, Terminal, Layers } from 'lucide-react';

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
      description: "Built responsive and interactive user interfaces using React.js. Collaborated with cross-functional teams to implement modern web design patterns and optimize application performance.",
      achievements: [
        "Developed responsive web applications using React.js and Tailwind CSS",
        "Implemented modern UI/UX designs following HCI principles",
        "Integrated REST APIs and optimized frontend performance"
      ]
    },
    {
      company: "DigiTec Ultra",
      position: "Web Development Intern",
      period: "2023 - 2024",
      description: "Built foundational expertise in full-stack web development through hands-on projects, working with modern JavaScript frameworks and backend technologies.",
      achievements: [
        "Built interactive web applications using React.js and Node.js",
        "Developed database-driven applications with MySQL and MongoDB",
        "Delivered multiple client-facing projects from concept to deployment"
      ]
    }
  ];

  const projects = [
    {
      title: "VitalSense",
      subtitle: "Contactless Health Monitor",
      description: "Real-time vital signs monitoring using just a webcam. Measures heart rate via rPPG (remote photoplethysmography), breathing rate, SpO2, stress level, and eye fatigue using computer vision and signal processing.",
      technologies: ["Python", "OpenCV", "MediaPipe", "SciPy", "Flask", "Chart.js"],
      github: "https://github.com/OmerTanveerofficial/VitalSense",
      live: "https://vitalsense-demo.vercel.app",
      gradient: "from-emerald-400 to-cyan-600",
      icon: <Activity size={24} />,
      featured: true
    },
    {
      title: "Facial Recognition System",
      subtitle: "Real-Time Face Analysis",
      description: "Production-quality facial recognition system with emotion detection (7 emotions), age/gender estimation, and face registration. Uses OpenCV DNN, dlib, and Keras CNN models.",
      technologies: ["Python", "OpenCV", "dlib", "TensorFlow", "Keras", "Flask"],
      github: "https://github.com/OmerTanveerofficial/Facial-Recognition-System",
      gradient: "from-rose-400 to-pink-600",
      icon: <Eye size={24} />,
      featured: true
    },
    {
      title: "Python DSA",
      subtitle: "Algorithms & Data Structures",
      description: "Comprehensive library of data structures and algorithms — sorting, searching, trees, graphs, dynamic programming, greedy algorithms, and backtracking with clean implementations.",
      technologies: ["Python", "Algorithms", "Data Structures", "Graph Theory"],
      github: "https://github.com/OmerTanveerofficial/python-dsa",
      gradient: "from-amber-400 to-orange-600",
      icon: <Terminal size={24} />,
      featured: true
    },
    {
      title: "E-Commerce Platform",
      subtitle: "Full-Stack Web Application",
      description: "Modern e-commerce platform with product catalog, user authentication, responsive design, and deployment on Vercel. Built with React and Tailwind CSS.",
      technologies: ["React", "Tailwind CSS", "Node.js", "Vite"],
      github: "https://github.com/OmerTanveerofficial/e-comm",
      gradient: "from-blue-400 to-indigo-600",
      icon: <Globe size={24} />
    },
    {
      title: "Shoe Size Measurement & AR",
      subtitle: "Augmented Reality E-Commerce",
      description: "E-commerce store featuring shoe size measurement through camera integration and augmented reality try-on capabilities with machine learning algorithms.",
      technologies: ["React", "Vite", "Computer Vision", "AR", "ML"],
      github: "https://github.com/OmerTanveerofficial/Shoe-Size-Measurement-and-AR-with-e-commerce-store-using-React",
      live: "https://rook-fyp.vercel.app/",
      gradient: "from-violet-400 to-purple-600",
      icon: <Layers size={24} />
    },
    {
      title: "Rainfall Prediction System",
      subtitle: "Machine Learning Forecasting",
      description: "Weather prediction system using machine learning algorithms for rainfall forecasting. Built with Python, scikit-learn, and Google Colab with real-world weather datasets.",
      technologies: ["Python", "scikit-learn", "Pandas", "Data Analysis"],
      github: "https://github.com/OmerTanveerofficial/Rainfall-Prediction",
      gradient: "from-sky-400 to-blue-600",
      icon: <Brain size={24} />
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Capital University of Science and Technology",
      period: "2021 - 2025",
      description: "Comprehensive computer science education covering algorithms, AI, software engineering, and full-stack development.",
      courses: ["Data Structures & Algorithms", "Artificial Intelligence", "Operating Systems", "Computer Networks", "Database Management", "Software Engineering", "Design & Analysis of Algorithms", "Theory of Automata", "Web Development", "Penetration Testing", "Python", "C++", "OOP"],
      project: {
        title: "E-Commerce Shoe Website with AR",
        description: "Final Year Project featuring virtual shoe try-on using Augmented Reality, shoe size measurement through camera, and a full admin dashboard with CRUD operations.",
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
    "AI & Computer Vision": ["OpenCV", "MediaPipe", "TensorFlow / Keras", "dlib", "Signal Processing (SciPy)", "rPPG / Photoplethysmography", "Face Detection & Recognition", "Emotion Analysis"],
    "Programming Languages": ["Python", "JavaScript (ES6+)", "TypeScript", "C++", "Java", "SQL"],
    "Web Development": ["React.js", "Node.js", "Flask", "Tailwind CSS", "REST APIs", "Chart.js", "HTML5 / CSS3", "Vite"],
    "Tools & Databases": ["Git / GitHub", "Docker", "Linux", "MongoDB", "MySQL", "SQLite", "VS Code", "Vercel"]
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
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animate-fade-in-up { animation: fadeInUp 1s ease-out forwards; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animation-delay-200 { animation-delay: 0.2s; opacity: 0; }
        .animation-delay-300 { animation-delay: 0.3s; opacity: 0; }
        .animation-delay-400 { animation-delay: 0.4s; opacity: 0; }

        .fade-in-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .fade-in-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .project-card-featured {
          background: linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7));
          position: relative;
        }

        .project-card-featured::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          border-radius: 999px 999px 0 0;
        }

        .stat-number {
          font-variant-numeric: tabular-nums;
        }
      `}</style>

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
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
                      ? 'text-emerald-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {label}
                  <span className={`absolute -bottom-8 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-600 to-blue-600 transition-all duration-300 ${
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
                <Sparkles className="text-emerald-600 animate-pulse" size={20} />
                <p className="text-emerald-600 font-medium tracking-wide">SOFTWARE ENGINEER</p>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Building <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">intelligent</span> software systems
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-fade-in-up animation-delay-200">
                Software Engineer specializing in computer vision, machine learning, and full-stack development.
                I build real-time systems that combine signal processing with modern web technologies.
              </p>
              <div className="flex gap-4 animate-fade-in-up animation-delay-400">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-emerald-200 hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  Get In Touch <ArrowRight size={18} />
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-medium hover:border-emerald-600 hover:text-emerald-600 hover:shadow-lg transition-all duration-300"
                >
                  View Projects
                </button>
              </div>

              <div className="flex gap-8 mt-10 animate-fade-in-up animation-delay-400">
                <div>
                  <p className="text-3xl font-bold text-gray-900 stat-number">6+</p>
                  <p className="text-sm text-gray-500">Projects Built</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900 stat-number">3+</p>
                  <p className="text-sm text-gray-500">AI/ML Projects</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900 stat-number">8+</p>
                  <p className="text-sm text-gray-500">Technologies</p>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-up animation-delay-300 flex justify-center md:justify-end">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <div className="relative">
                  <img
                    src="/images/Omer_photo.jpg"
                    alt="Omer Tanveer"
                    className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-600/20 to-blue-600/20 group-hover:opacity-0 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-12 fade-in-section" data-id="exp-title">
            <Briefcase className="text-emerald-600" size={32} />
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
                    <p className="text-lg bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent font-medium">{job.company}</p>
                  </div>
                  <span className="text-gray-500 font-medium mt-2 md:mt-0 bg-emerald-50 px-4 py-1 rounded-full text-sm">{job.period}</span>
                </div>
                <p className="text-gray-700 mb-4">{job.description}</p>
                <div className="space-y-2">
                  {job.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-2 group">
                      <span className="text-emerald-600 mt-1 group-hover:scale-125 transition-transform">•</span>
                      <span className="text-gray-600">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="py-20 px-6 relative bg-gradient-to-br from-emerald-50/50 to-blue-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-12 fade-in-section" data-id="edu-title">
            <Database className="text-emerald-600" size={32} />
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
                    <p className="text-lg bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent font-medium">{edu.institution}</p>
                  </div>
                  <span className="text-gray-500 font-medium mt-2 md:mt-0 bg-emerald-50 px-4 py-1 rounded-full text-sm">{edu.period}</span>
                </div>
                <p className="text-gray-700 mb-4">{edu.description}</p>

                {edu.courses && (
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Key Courses:</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, i) => (
                        <span key={i} className="text-xs bg-gradient-to-r from-emerald-50 to-blue-50 text-gray-700 px-3 py-1 rounded-full border border-emerald-100">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {edu.project && (
                  <div className="mt-4 p-4 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-lg border border-emerald-100">
                    <div className="flex items-start gap-2 mb-2">
                      <Code className="text-emerald-600 mt-1" size={20} />
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-1">{edu.project.title}</h4>
                        <p className="text-gray-700 text-sm mb-2">{edu.project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {edu.project.technologies.map((tech, i) => (
                            <span key={i} className="text-xs bg-white text-gray-700 px-2 py-1 rounded border border-emerald-200">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <a
                          href={edu.project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700 transition-colors text-sm group"
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
          <div className="flex items-center gap-3 mb-4 fade-in-section" data-id="proj-title">
            <Code className="text-emerald-600" size={32} />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </div>
          <p className="text-gray-500 mb-12 ml-11">Projects spanning computer vision, machine learning, and full-stack development</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className={`group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-200 fade-in-section ${
                  project.featured ? 'ring-1 ring-emerald-200' : ''
                } ${isVisible[`proj-${idx}`] ? 'visible' : ''}`}
                data-id={`proj-${idx}`}
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${project.gradient} text-white`}>
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">{project.title}</h3>
                      <p className="text-xs text-gray-500">{project.subtitle}</p>
                    </div>
                    {project.featured && (
                      <span className="ml-auto text-xs bg-emerald-50 text-emerald-600 px-2 py-1 rounded-full border border-emerald-200 font-medium">Featured</span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">{project.description}</p>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="text-xs bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 px-3 py-1 rounded-full border border-gray-200 hover:scale-105 transition-transform cursor-default">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-2 border-t border-gray-100">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-700 font-medium hover:text-emerald-600 transition-colors text-sm group/link"
                    >
                      <Github size={16} className="mr-1.5" /> Code <ExternalLink size={12} className="ml-1 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700 transition-colors text-sm group/link"
                      >
                        <Globe size={16} className="mr-1.5" /> Live Demo <ExternalLink size={12} className="ml-1 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-6 relative bg-gradient-to-br from-emerald-50/50 to-blue-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-12 fade-in-section" data-id="skill-title">
            <Layers className="text-emerald-600" size={32} />
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
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500"></span>
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item, i) => (
                    <span key={i} className="text-sm bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 px-3 py-1.5 rounded-lg border border-gray-200 hover:border-emerald-300 hover:shadow-sm transition-all cursor-default">
                      {item}
                    </span>
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

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.target;
              const name = form.elements.name.value;
              const email = form.elements.email.value;
              const subject = form.elements.subject.value;
              const message = form.elements.message.value;
              const body = `Hi Omer,%0D%0A%0D%0A${encodeURIComponent(message)}%0D%0A%0D%0AFrom: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}`;
              window.open(`mailto:omertanveer135@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`, '_self');
            }}
            className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 shadow-xl"
          >
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input
                  name="subject"
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 text-white py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-emerald-200 hover:scale-[1.02] transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </form>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Connect with me:</p>
            <div className="flex justify-center gap-8">
              <a href="https://github.com/OmerTanveerofficial" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-900 hover:text-emerald-600 transition-colors">
                <Github size={20} />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/omer-tanveer-1b71a6324/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-900 hover:text-emerald-600 transition-colors">
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a href="mailto:omertanveer135@gmail.com" className="flex items-center gap-2 text-gray-900 hover:text-emerald-600 transition-colors">
                <Mail size={20} />
                Email
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
