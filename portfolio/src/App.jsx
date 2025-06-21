import { useState, useEffect } from "react";
import {
  FaSun,
  FaMoon,
  FaDownload,
  FaCode,
  FaServer,
  FaDatabase,
  FaCogs,
  FaPaintBrush,
  FaMobileAlt,
  FaPaperPlane,
  FaUserTie,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGraduationCap,
} from "react-icons/fa";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";


const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "my workflow","skills", "projects", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      setMenuOpen(false);
    }
  };

  const downloadCV = () => {
    window.open(
      "https://drive.google.com/uc?export=download&id=1UXqDEzB-0uy_tnqbcEJAja39yOJ3iCP_",
      "_blank"
    );
  };

  const contactMe = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=rajaalihaider239@gmail.com&su=Let's%20Connect&body=Hi%20Ali,%0A%0AI%20would%20like%20to%20connect%20with%20you.",
      "_blank"
    );
  };

  // Form Email Functionality

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent page reload on submit

    const { name, email, subject, message } = formData;

    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=rajaalihaider239@gmail.com&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Hi Ali,\n\n${message}\n\nFrom: ${name} (${email})`
    )}`;

    window.open(mailtoLink, "_blank");
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Header/Navbar */}
      <header
        className={`fixed w-full z-50 border-b-1 transition-colors duration-300 ${
          darkMode
            ? "bg-gray-800/90 backdrop-blur-sm"
            : "bg-white/90 backdrop-blur-sm"
        } shadow-sm`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a
            href="#"
            className="text-2xl font-bold gradient-text cursor-pointer"
          >
            Ali's Portfolio.
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {["home", "about", "my workflow","skills", "projects", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`nav-link capitalize ${
                  activeSection === item ? "font-medium text-blue-500" : ""
                } cursor-pointer`}
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${
                darkMode
                  ? "bg-gray-700 text-yellow-300"
                  : "bg-gray-200 text-gray-700"
              } cursor-pointer`}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
            <button
              onClick={downloadCV}
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity flex items-center cursor-pointer"
            >
              <FaDownload className="mr-2" /> Download CV
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg focus:outline-none cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className={`md:hidden ${
              darkMode ? "bg-gray-800" : "bg-white"
            } py-4 px-4 shadow-lg`}
          >
            <div className="flex flex-col space-y-4">
              {["home", "about", "my workflow","skills", "projects", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize py-2 text-left ${
                      activeSection === item ? "font-medium text-blue-500" : ""
                    } cursor-pointer`}
                  >
                    {item}
                  </button>
                )
              )}
              <div className="flex items-center space-x-4 pt-4">
                <button
                  onClick={toggleDarkMode}
                  className={`p-2 rounded-full ${
                    darkMode
                      ? "bg-gray-700 text-yellow-300"
                      : "bg-gray-200 text-gray-700"
                  } cursor-pointer`}
                >
                  {darkMode ? <FaSun /> : <FaMoon />}
                </button>
                <button
                  onClick={downloadCV}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity flex items-center cursor-pointer"
                >
                  <FaDownload className="mr-2" /> Download CV
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center">
          <div className="container mx-auto px-4 py-16">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-12 md:mb-0">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Hi <span className="wave">👋</span> I'm{" "}
                  <span className="gradient-text">Ali Haider</span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                  Full Stack Developer
                </h2>
                <p
                  className={`text-lg mb-8 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Transforming ideas into stunning, high-performance websites
                  that help your brand stand out.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    // onClick={() => scrollToSection("contact")}
                    onClick={contactMe}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Contact Me
                  </button>
                  <button
                    onClick={downloadCV}
                    className="px-6 py-3 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-gradient-to-r from-blue-500 to-purple-500 hover:text-white transition-colors flex items-center"
                  >
                    <FaDownload className="mr-2" /> Download CV
                  </button>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative">
                  <div
                    className={`w-64 h-64 md:w-80 md:h-80 rounded-full ${
                      darkMode ? "bg-gray-700" : "bg-gray-200"
                    } flex items-center justify-center overflow-hidden`}
                  >
                    <img
                      src="https://res.cloudinary.com/dk84jtof9/image/upload/v1750499037/heroImage_asf6lq.png" 
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div
                    className={`absolute -bottom-4 -right-4 w-24 h-24 rounded-full ${
                      darkMode ? "bg-gray-800" : "bg-gray-200"
                    } shadow-lg flex items-center justify-center`}
                  >
                    <div className="text-4xl gradient-text">
                      <FaCode />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className={`py-20 ${darkMode ? "bg-gray-800" : "bg-white"}`}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="gradient-text">About</span> Me
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/3 flex justify-center">
                <div
                  className={`w-64 h-64 rounded-lg overflow-hidden shadow-lg ${
                    darkMode ? "border-gray-700" : "border-gray-200"
                  } border-2`}
                >
                  <img
                    src="https://res.cloudinary.com/dk84jtof9/image/upload/v1750499037/heroImage_asf6lq.png"
                    alt="About Me"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold mb-4">Who am I?</h3>
                <p
                  className={`mb-6 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  I started my journey as a Software Engineer, with 2 years of
                  experience in CMS platforms like WordPress <br /> and Shopify
                  and 1 year in custom development using the MERN stack, I help
                  brands build powerful
                  <br /> and tailored web solutions.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-medium mb-2 flex items-center">
                      <FaUserTie className="mr-2 text-blue-500" /> Name:
                    </h4>
                    <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                      Ali Haider
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 flex items-center">
                      <FaEnvelope className="mr-2 text-blue-500" /> Email:
                    </h4>
                    <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                      rajaalihaider239@gmail.com
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 flex items-center">
                      <FaMapMarkerAlt className="mr-2 text-blue-500" />{" "}
                      Location:
                    </h4>
                    <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                      Pakistan
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 flex items-center">
                      <FaGraduationCap className="mr-2 text-blue-500" />{" "}
                      Education:
                    </h4>
                    <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                      BS Software Engineer (2021 -2025)
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={downloadCV}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center"
                  >
                    <FaDownload className="mr-2" /> Download CV
                  </button>
                  <button
                    onClick={contactMe}
                    className="px-4 py-2 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-colors flex items-center"
                  >
                    <FaPaperPlane className="mr-2" /> Hire Me
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Modern Workflow Section */}
        <section
          id="my workflow"
          className={`pt-32 pb-20 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <span
                className={`inline-block px-3 py-1 text-sm font-medium rounded-full mb-4 ${
                  darkMode
                    ? "bg-gray-800 text-blue-400"
                    : "bg-blue-100 text-blue-600"
                }`}
              >
                PROCESS
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                My <span className="gradient-text">Development</span> Workflow
              </h2>
              <div
                className={`max-w-2xl mx-auto text-xl ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                A structured yet flexible approach to delivering exceptional
                digital products
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Modern Timeline Steps */}
              <div className="space-y-8 relative">
                <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 -z-10"></div>

                {[
                  {
                    title: "Discovery & Planning",
                    description:
                      "Deep dive into requirements with stakeholders to define project scope and objectives",
                    icon: "fa-lightbulb",
                  },
                  {
                    title: "System Design",
                    description:
                      "Create architecture diagrams and technical specifications for the solution",
                    icon: "fa-diagram-project",
                  },
                  {
                    title: "UI/UX Design",
                    description:
                      "Craft intuitive interfaces with user experience at the forefront",
                    icon: "fa-pen-ruler",
                  },
                  {
                    title: "Development",
                    description:
                      "Build using modern technologies with clean, maintainable code",
                    icon: "fa-code",
                  },
                  {
                    title: "Testing & QA",
                    description:
                      "Rigorous testing to ensure quality, performance and security",
                    icon: "fa-bug-slash",
                  },
                  {
                    title: "Deployment & Iteration",
                    description:
                      "Seamless launch followed by continuous improvement",
                    icon: "fa-rocket",
                  },
                ].map((step, index) => (
                  <div key={index} className="flex group">
                    <div
                      className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center mr-6 ${
                        darkMode
                          ? "bg-gray-800 group-hover:bg-gray-700"
                          : "bg-white group-hover:bg-gray-100"
                      } shadow-lg transition-all duration-300`}
                    >
                      <div className="text-2xl gradient-text">
                        <i className={`fas ${step.icon} fa-icon`}></i>
                      </div>
                    </div>
                    <div>
                      <h3
                        className={`text-xl font-semibold mb-1 ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={`${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Modern Illustration */}
              <div className="relative">
                <div
                  className={`rounded-3xl overflow-hidden shadow-2xl ${
                    darkMode ? "ring-1 ring-gray-700" : "ring-1 ring-gray-200"
                  }`}
                >
                  <img
                    src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="Modern development workflow"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
                <div
                  className={`absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl flex items-center justify-center ${
                    darkMode ? "bg-gray-800" : "bg-white"
                  } shadow-xl z-10`}
                >
                  <div className="text-5xl gradient-text">
                    <i className="fas fa-gears fa-icon"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Skills Section */}
        <section
          id="skills"
          className={`py-20 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              My <span className="gradient-text">Skills</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Frontend Development",
                  skills: [
                    "HTML5",
                    "CSS3",
                    "Bootstrap",
                    "Tailwind CSS",
                    "React",
                    "JavaScript",
                  ],
                  icon: <FaCode />,
                },
                {
                  title: "Backend Development",
                  skills: ["Node.js", "Express.js", "PHP", "Git"],
                  icon: <FaServer />,
                },
                {
                  title: "Database",
                  skills: ["MongoDB", "MySQL", "Firebase"],
                  icon: <FaDatabase />,
                },
                {
                  title: "Software Requirement Specification (SRS)",
                  skills: ["MS Word"],
                  icon: <FaCogs />,
                },
                {
                  title: "UI/UX Design",
                  skills: [
                    "Figma",
                    "User Research",
                    "Prototyping",
                    "Wireframing",
                  ],
                  icon: <FaPaintBrush />,
                },
                {
                  title: "Unified Modeling Language (UML)",
                  skills: ["Visual Paradighm", "Draw.io"],
                  icon: <FaMobileAlt />,
                },
              ].map((skill, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl transition-all duration-300 card-hover ${
                    darkMode
                      ? "bg-gray-800 hover:bg-gray-700"
                      : "bg-white hover:bg-gray-100"
                  } shadow-md`}
                >
                  <div className="text-4xl gradient-text mb-4">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{skill.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.skills.map((item, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-full text-sm ${
                          darkMode
                            ? "bg-gray-700 text-gray-200"
                            : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className={`py-20 ${darkMode ? "bg-gray-800" : "bg-white"}`}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              My <span className="gradient-text">Projects</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "E-commerce Platform",
                  description:
                    "A full-featured online store with cart, checkout and admin dashboard.",
                  tags: ["React", "Node.js", "MongoDB"],
                  image: "https://res.cloudinary.com/dk84jtof9/image/upload/v1750499037/Bag-Image.png",
                },
                {
                  title: "Social Media App",
                  description:
                    "A Twitter-like platform with real-time updates and user interactions.",
                  tags: ["react", "Firebase", "Tailwind CSS"],
                  image: "https://res.cloudinary.com/dk84jtof9/image/upload/v1750499035/twitter_d14t7t.png",
                },  
                {
                  title: "Task Management",
                  description:
                    "A productivity app with drag-and-drop interface and team collaboration.",
                  tags: ["React", "Redux", "Express"],
                  image: "https://res.cloudinary.com/dk84jtof9/image/upload/v1750499035/twitter_d14t7t.png",
                },
                {
                  title: "Weather Dashboard",
                  description:
                    "Real-time weather forecasts with interactive maps and alerts.",
                  tags: ["JavaScript", "API", "CSS"],
                  image: "https://res.cloudinary.com/dk84jtof9/image/upload/v1750499037/weather_annnsx.png",
                },
                {
                  title: "Fitness Tracker",
                  description:
                    "Mobile app for tracking workouts, nutrition and progress.",
                  tags: ["React ", "Node.js", "MongoDB"],
                  image: "https://res.cloudinary.com/dk84jtof9/image/upload/v1750499035/fitness_avfyhs.png",
                },
                {
                  title: "Recipe Finder",
                  description:
                    "Search engine for recipes with dietary filters and meal planning.",
                  tags: ["React", "Node.js", "PostgreSQL"],
                  image: "https://res.cloudinary.com/dk84jtof9/image/upload/v1750499037/recipe_dqancy.png",
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className={`rounded-xl overflow-hidden transition-all duration-300 card-hover ${
                    darkMode ? "bg-gray-700" : "bg-gray-50"
                  } shadow-md`}
                >
                  <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p
                      className={`mb-4 ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className={`px-2 py-1 rounded-full text-xs ${
                            darkMode
                              ? "bg-gray-600 text-gray-200"
                              : "bg-gray-200 text-gray-700"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between">
                      <a
                        href="#"
                        className={`px-4 py-2 rounded-lg ${
                          darkMode
                            ? "bg-gray-600 hover:bg-gray-500"
                            : "bg-gray-200 hover:bg-gray-300"
                        } transition-colors`}
                      >
                        View Demo
                      </a>
                      <a
                        href="#"
                        className={`px-4 py-2 rounded-lg ${
                          darkMode
                            ? "bg-blue-600 hover:bg-blue-500"
                            : "bg-blue-500 hover:bg-blue-600"
                        } text-white transition-colors`}
                      >
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className={`py-20 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-semibold mb-6">
                  Contact Information
                </h3>
                <p
                  className={`mb-8 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Feel free to reach out to me for any questions or
                  opportunities. I'm always open to discussing new projects,
                  creative ideas or opportunities to be part of your vision.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div
                      className={`p-3 rounded-lg mr-4 ${
                        darkMode ? "bg-gray-800" : "bg-gray-200"
                      }`}
                    >
                      <FaMapMarkerAlt className="text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Location</h4>
                      <p
                        className={darkMode ? "text-gray-300" : "text-gray-600"}
                      >
                        Pakistan
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div
                      className={`p-3 rounded-lg mr-4 ${
                        darkMode ? "bg-gray-800" : "bg-gray-200"
                      }`}
                    >
                      <FaEnvelope className="text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <p
                        className={darkMode ? "text-gray-300" : "text-gray-600"}
                      >
                        rajaalihaider239@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div
                      className={`p-3 rounded-lg mr-4 ${
                        darkMode ? "bg-gray-800" : "bg-gray-200"
                      }`}
                    >
                      <i className="fas fa-phone-alt text-blue-500"></i>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Phone</h4>
                      <p
                        className={darkMode ? "text-gray-300" : "text-gray-600"}
                      >
                        0330 8064383
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex space-x-4">
                  {[
                    {
                      icon: <FaGithub />,
                      label: "GitHub",
                      link: "https://github.com/AliRajag51",
                    },
                    {
                      icon: <FaLinkedin />,
                      label: "LinkedIn",
                      link: "https://www.linkedin.com/in/ali-haider-b39391367/",
                    },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full ${
                        darkMode
                          ? "bg-gray-800 hover:bg-gray-700"
                          : "bg-gray-200 hover:bg-gray-300"
                      } transition-colors`}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2">
                <form
                  onSubmit={sendEmail} // Add this here
                  className={`p-8 rounded-xl ${
                    darkMode ? "bg-gray-800" : "bg-white"
                  } shadow-lg`}
                >
                  <div className="mb-6">
                    <label
                      htmlFor="name"
                      className={`block mb-2 font-medium ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg ${
                        darkMode
                          ? "bg-gray-700 border-gray-600 text-white"
                          : "bg-gray-50 border-gray-300"
                      } border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="Ali Haider"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className={`block mb-2 font-medium ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg ${
                        darkMode
                          ? "bg-gray-700 border-gray-600 text-white"
                          : "bg-gray-50 border-gray-300"
                      } border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="alihaider@google.com"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="subject"
                      className={`block mb-2 font-medium ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg ${
                        darkMode
                          ? "bg-gray-700 border-gray-600 text-white"
                          : "bg-gray-50 border-gray-300"
                      } border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="Let me know how I can help you"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className={`block mb-2 font-medium ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg ${
                        darkMode
                          ? "bg-gray-700 border-gray-600 text-white"
                          : "bg-gray-50 border-gray-300"
                      } border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="Hi Ali, I'd like to talk about..."
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`py-8 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <a href="#" className="text-2xl font-bold gradient-text">
              Ali's Portfolio
            </a>
          </div>
          <div className="flex justify-center space-x-6 mb-6">
            {[
              {
                icon: <FaGithub />,
                label: "GitHub",
                link: "https://github.com/AliRajag51",
              },
              {
                icon: <FaLinkedin />,
                label: "LinkedIn",
                link: "https://www.linkedin.com/in/ali-haider-b39391367/",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full ${
                  darkMode
                    ? "bg-gray-700 hover:bg-gray-600"
                    : "bg-gray-200 hover:bg-gray-300"
                } transition-colors`}
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            © {new Date().getFullYear()} Ali Haider. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
