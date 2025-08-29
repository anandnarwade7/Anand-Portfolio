import lawTech from "./assets/lawtech.jpeg";
import Trendads from "./assets/Trendads.jpeg";
import Adsmanager from "./assets/Adsmanager.jpeg";
import CRM from "./assets/CRM.jpeg";

export const PROJECTS_DATA = [
{
    id: 5,
    title: "WDC CRM (Customer Relationship Management)",
    description: "Enterprise CRM solution featuring automated lead distribution, intelligent task assignment workflows, and dynamic sales pipeline analytics with cross-team collaboration tools.",
    image: CRM,
    technologies: [
      "Spring Boot",
      "PostgreSQL",
      "Spring Security",
      "Spring data Jpa",
      "Jwt",
      "Git",
      "Hibernate"
    ],
    liveUrl: "https://crm.propertysearch.ai/",
  },
  {
    id: 1,
    title: "TrendAds",
    description: "Developed a scalable Ad Portal Management System with role-based access, automated workflows using Java and Spring Boot.",
    image: Trendads,
    technologies: [
      "Spring Boot",
      "MySQL",
      "Spring Security",
      "Spring data Jpa",
      "Jwt",
      "Git",
      "Hibernate"
    ],
    liveUrl: "https://trendads.ai/",
  },
  {
    id: 2,
    title: "Data Bank",
    description: "Developed an automated legal judgment assignment and review system with role-based access, workflow optimization, and a scalable Spring Boot backend using PostgreSQL.",
    image: lawTech,
    technologies: [
      "Spring Boot",
      "PostgresSQL",
      "Spring Security",
      "Spring data Jpa",
      "Jwt",
      "Git",
      "Hibernate"
    ],
    liveUrl: "https://db-lawtech.in/",
  },
   {
    id: 4,
    title: "WDC Ads Manager Platform",
    description: "Advanced advertising platform with intelligent campaign orchestration, precision audience segmentation, real-time performance analytics, and seamless payment gateway integration.",
    image: Adsmanager,
    technologies: [
      "Spring Boot",
      "PostgreSQL",
      "Spring Security",
      "Spring data Jpa",
      "Jwt",
      "Git",
      "Hibernate",
      "Cashfree API"
    ],
    liveUrl: "https://ads.propertysearch.ai/",
  },
  {
    id: 3,
    title: "Cash Flow Generation Tool",
    description: "Developed an automated Cash Flow Projection Tool with role-based access, secure document handling, and multi-year financial analysis using Apache POI.",
    image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    technologies: [
      "Micronaut",
      "MySQL",
      "Hibernate",
      "Jwt",
      "Spring Security",
      "Spring data Jpa",
      "Git",
      "Apache POI"
    ],
    liveUrl: null, // No live URL available
  }
  
];
