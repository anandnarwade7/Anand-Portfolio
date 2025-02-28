import React, { useEffect, useState } from "react";
import {
  Code2,
  Database,
  Server,
  Coffee,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Calendar,
  ExternalLink,
  BookOpen,
  Award,
  FileDown,
  PhoneCall,
} from "lucide-react";
import lawTech from "./assets/lawtech.jpeg";
import Trendads from "./assets/Trendads.jpeg";
import logo from "./assets/logo1.png";
function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Invalid mobile number";
    }
    if (!formData.message) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      e.target.submit();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gray-900">
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-gray-900/80 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => scrollToSection("hero")}
            >
              <img src={logo} alt="logo" className="w-[4rem]" />
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {["about", "experience", "projects", "skills"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("mycontact")}
                className="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-gray-900 shadow-lg">
            <div className="flex flex-col items-center gap-6 py-4">
              {["about", "experience", "projects", "skills"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("mycontact")}
                className="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <div
        id="hero"
        className="min-h-screen relative overflow-hidden bg-gray-900 pt-10"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#080808_1px,transparent_1px),linear-gradient(to_bottom,#080808_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

        <div className="relative">
          {/* Gradient Orb */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-500 rounded-full opacity-[0.15] blur-[100px]" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-500 rounded-full opacity-[0.15] blur-[100px]" />

          <div className="container mx-auto px-4 pt-12 pb-20">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
              {/* Left Content */}
              <div className="flex-1 text-center lg:text-left relative z-10">
                <p className="text-4xl text-white">Hello, I'm</p>
                <h1 className="text-2xl lg:text-6xl font-bold text-orange-500 mb-6">
                  Anand Narwade
                  <span className="block text-white">Java Developer</span>
                </h1>

                <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto lg:mx-0">
                  Specialized in creating robust, scalable Java applications
                  with expertise in Spring Boot, microservices architecture,
                  webservices and enterprise software development.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a
                    href="https://drive.google.com/uc?export=download&id=1N-R73qMf9Ms0rwCJuuggU2YuHmqxtxWb"
                    target="_blank"
                    className="group px-8 py-4 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Download CV
                    <FileDown className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="#contact"
                    className="px-8 py-4 bg-gray-800/50 backdrop-blur-sm text-white rounded-full border border-gray-700 hover:border-orange-500 transition-colors flex items-center justify-center gap-2"
                  >
                    Contact Me
                  </a>
                </div>
                {/* Social Links */}
                <div className="mt-8 ml-5 flex gap-4 justify-center lg:justify-start">
                  <a
                    href="https://github.com/anandnarwade7"
                    target="_blank"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/anand-narwade-a525bb235/"
                    target="_blank"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    target="_blank"
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=anandn7798@gmail.com&su=Hello%20Anand&body=Hi%20Anand,%0D%0A%0D%0A I wanted to connect with you.%0D%0A%0D%0AThanks!"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Right Content - Tech Cards */}
              <div className="flex-1 relative">
                <div className="relative z-10 grid grid-cols-2 gap-6 max-w-lg mx-auto">
                  <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 transform hover:-translate-y-2 transition-transform duration-300">
                    <Server className="w-12 h-12 text-orange-500 mb-6" />
                    <h3 className="text-white font-semibold text-xl mb-3">
                      Backend Development
                    </h3>
                    <p className="text-gray-400">
                      Spring Boot, Microservices, RESTful APIs
                    </p>
                  </div>
                  <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 transform hover:-translate-y-2 transition-transform duration-300">
                    <Database className="w-12 h-12 text-orange-500 mb-6" />
                    <h3 className="text-white font-semibold text-xl mb-3">
                      Database
                    </h3>
                    <p className="text-gray-400">PostgreSQL, MongoDB, Redis</p>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-500/5 blur-3xl rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Professional workspace"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-gray-300 text-base mb-6">
                I am a Java developer specializing in building scalable and high-performance applications. My expertise lies in leveraging Spring Boot, Micronaut, RESTful APIs, Webservices, and Microservices to develop efficient and secure backend solutions. With a strong foundation in Core Java (Java 8+), Hibernate, JPA, and SQL, I focus on database optimization, system performance enhancement, and ensuring seamless application functionality.{" "}
              </p>
              <p className="text-gray-300 text-base mb-6">
               I am passionate about coding, problem-solving, and architecting solutions that prioritize performance, security, and scalability. I believe that logic and efficiency should always take precedence over specific programming languages, and I am committed to developing cost-effective, innovative, and maintainable solutions to tackle complex challenges.
              </p>
              <div className="flex flex-col lg:flex-row lg:gap-16">
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin className="text-orange-500" />
                  <span>Pune, India</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Mail className="text-orange-500" />
                  <span>anandn7798@gmail.com</span>
                </div>

                <div className="flex items-center gap-2 text-gray-300">
                  <BookOpen className="text-orange-500" />
                  <span>Msc</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Work Experience
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Experience Item 1 */}
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Junior Java Developer
                  </h3>
                  <p className="text-orange-500">
                    Cyperts Digital Solution Pvt Ltd
                  </p>
                </div>
                <span className="text-gray-400">July 2023 - Present</span>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>
                  • Built scalable Java web apps using Spring Boot framework,
                  enhancing system performance for multiple successful project
                  launches.
                </li>
                <li>
                  • Optimized database schemas & SQL queries, improving query
                  response times by 10-15% through efficient design.
                </li>
                <li>
                  • Integrated Apache POI for streamlined Excel data processing
                  and management.
                </li>
                <li>
                  • Implemented JWT authentication with IDAM Server integration
                  for secure data access and protection.
                </li>
                <li>
                  • Developed RESTful APIs that improved inter-system
                  communication reliability and response efficiency.
                </li>
                <li>
                  • Conducted system debugging to resolve complex issues
                  pre-deployment, ensuring smooth functionality.
                </li>
                <li>
                  • Achieved 40% code coverage through unit testing, identifying
                  critical issues early in development cycles.
                </li>
                <li>
                  • Proactively resolved technical challenges to maintain
                  project timelines and minimize downtime.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-gray-900 rounded-xl overflow-hidden">
              <img
                src={Trendads}
                alt="Project 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  TrendAds
                </h3>
                <p className="text-gray-400 mb-4">
                  Developed a scalable Ad Portal Management System with
                  role-based access, automated workflows using Java and Spring
                  Boot.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-800 text-orange-500 rounded-full text-sm">
                    Spring Boot
                  </span>
                  <span className="px-3 py-1 bg-gray-800 text-orange-500 rounded-full text-sm">
                    MySQL
                  </span>

                  <span className="px-3 py-1 bg-gray-800 text-orange-500 rounded-full text-sm">
                    Spring Security
                  </span>
                  <span className="px-3 py-1 bg-gray-800 text-orange-500 rounded-full text-sm">
                    Spring data Jpa
                  </span>
                  <span className="px-3 py-1 bg-gray-800 text-orange-500 rounded-full text-sm">
                    Jwt
                  </span>
                  <span className="px-3 py-1 bg-gray-800 text-orange-500 rounded-full text-sm">
                    Git
                  </span>
                  <span className="px-3 py-1 bg-gray-800 text-orange-500 rounded-full text-sm">
                    Hibernate
                  </span>
                </div>
                <a
                  href="https://trendads.ai/"
                  target="_blank"
                  className="text-orange-500 hover:text-orange-400 flex items-center gap-2"
                >
                  View Project <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-gray-900 rounded-xl overflow-hidden">
              <img
                src={lawTech}
                alt="Project 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Data Bank
                </h3>
                <p className="text-gray-400 mb-4">
                  Developed an automated legal judgment assignment and review
                  system with role-based access, workflow optimization, and a
                  scalable Spring Boot backend using PostgreSQL.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-800 text-orange-500 rounded-full text-sm">
                    Spring Boot
                  </span>
                  <span className="px-3 py-1 bg-gray-800 text-orange-500 rounded-full text-sm">
                    PostgresSQL
                  </span>

                  <span className="px-3 py-1 bg-gray-800 text-orange-500 rounded-full text-sm">
                    Spring Security
                  </span>
                  <span className="px-3 py-1 bg-gray-800 text-orange-500 rounded-full text-sm">
                    Spring data Jpa
                  </span>
                  <span className="px-3 py-1 bg-gray-800 text-orange-500 rounded-full text-sm">
                    Jwt
                  </span>
                  <span className="px-3 py-1 bg-gray-800 text-orange-500 rounded-full text-sm">
                    Git
                  </span>
                  <span className="px-3 py-1 bg-gray-800 text-orange-500 rounded-full text-sm">
                    Hibernate
                  </span>
                </div>
                <a
                  href="https://db-lawtech.in/"
                  target="_blank"
                  className="text-orange-500 hover:text-orange-400 flex items-center gap-2"
                >
                  View Project <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-gray-900 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Project 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Cash Flow Generation Tool
                </h3>
                <p className="text-gray-400 mb-4">
                  Developed an automated Cash Flow Projection Tool with
                  role-based access, secure document handling, and multi-year
                  financial analysis using Apache POI.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-800 text-orange-500 rounded-full text-sm">
                    Micronaut
                  </span>
                  <span className="px-3 py-1 bg-gray-800 text-orange-500 rounded-full text-sm">
                    MySQL
                  </span>

                  <span className="px-3 py-1 bg-gray-800 text-orange-500 rounded-full text-sm">
                    Hibernate
                  </span>
                  <span className="px-3 py-1 bg-gray-800 text-orange-500 rounded-full text-sm">
                    Jwt
                  </span>
                  <span className="px-3 py-1 bg-gray-800 text-orange-500 rounded-full text-sm">
                    Spring Security
                  </span>
                  <span className="px-3 py-1 bg-gray-800 text-orange-500 rounded-full text-sm">
                    Spring data Jpa
                  </span>
                  <span className="px-3 py-1 bg-gray-800 text-orange-500 rounded-full text-sm">
                    Git
                  </span>
                  <span className="px-3 py-1 bg-gray-800 text-orange-500 rounded-full text-sm">
                    Apache POI
                  </span>
                </div>
                {/* <a
                  href="#"
                  className="text-orange-500 hover:text-orange-400 flex items-center gap-2"
                >
                  View Project <ExternalLink className="w-4 h-4" />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Skill Category 1 */}
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Server className="text-orange-500" />
                Backend Development
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Java (Advanced)</li>
                <li>• Spring Framework</li>
                <li>• Spring Boot</li>
                <li>• JPA/Hibernate</li>
                <li>• RESTful APIs</li>
                <li>• Webservices</li>
              </ul>
            </div>

            {/* Skill Category 2 */}
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Database className="text-orange-500" />
                Databases
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• PostgreSQL</li>
                <li>• MySQL</li>

                <li>• Database Design</li>
              </ul>
            </div>

            {/* Skill Category 3 */}
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Code2 className="text-orange-500" />
                Version Control
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Git</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      {/* <section id="certifications" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Certifications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
           
            {/* <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
              <Award className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                AWS Certified Developer
              </h3>
              <p className="text-gray-400">Amazon Web Services</p>
              <p className="text-orange-500 mt-2">2023</p>
            </div>

            
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
              <Award className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Spring Professional
              </h3>
              <p className="text-gray-400">VMware</p>
              <p className="text-orange-500 mt-2">2022</p>
            </div>

            
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
              <Award className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Oracle Certified Professional
              </h3>
              <p className="text-gray-400">Oracle</p>
              <p className="text-orange-500 mt-2">2021</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Get In Touch
          </h2>
          <div className="max-w-2xl mx-auto">
            <form
              className="space-y-6"
              action="https://formspree.io/f/xwpvbkwl"
              method="POST"
              onSubmit={handleSubmit}
            >
              <div>
                <label htmlFor="name" className="block text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-orange-500"
                  placeholder="Your name"
                  maxLength={250}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-orange-500"
                  placeholder="your@email.com"
                  maxLength={250}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-white mb-2">
                  Mobile Number
                </label>
                <input
                  type="number"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-orange-500"
                  placeholder="87XXXXXX90"
                />
                {errors.mobile && (
                  <p className="text-red-500 text-sm">{errors.mobile}</p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="block text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-orange-500"
                  placeholder="Your message"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                Send Message
              </button>
            </form>

            <div
              id="mycontact"
              className="mt-12 bg-gray-800/50 p-8 rounded-xl border border-gray-700"
            >
              <h3 className="text-xl font-semibold text-white mb-6 text-center">
                Contact Information
              </h3>
              <div className="flex flex-col md:flex-row md:items-center justify-center gap-5">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-5 h-5 text-orange-500" />
                  <a
                    target="_blank"
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=anandn7798@gmail.com&su=Hello%20Anand&body=Hi%20Anand,%0D%0A%0D%0A I wanted to connect with you.%0D%0A%0D%0AThanks!"
                    className="hover:text-orange-500 transition-colors"
                  >
                    anandn7798@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <PhoneCall className="w-5 h-5 text-orange-500" />
                  <a
                    href="tel:8600818968"
                    className="hover:text-orange-500 transition-colors"
                  >
                    +91 8600818968
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => scrollToSection("hero")}
            >
              <img src={logo} alt="logo" className="w-[5rem]" />
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/anandnarwade7"
                target="_blank"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/anand-narwade-a525bb235/"
                target="_blank"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                target="_blank"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=anandn7798@gmail.com&su=Hello%20Anand&body=Hi%20Anand,%0D%0A%0D%0A I wanted to connect with you.%0D%0A%0D%0AThanks!"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-gray-400">
              © 2025 Anand Narwade || All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
