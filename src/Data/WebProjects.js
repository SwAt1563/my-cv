import SocialLibraryImage from "../Assets/WebProjects/SocialLibrary.png";
import ITHubImage from "../Assets/WebProjects/ITHub.png";

export const projectsData = [
  {
    imageSrc: SocialLibraryImage,
    title: "Social Library",
    date: "Nov 3rd 2022",
    description:
      "I implemented a social library using the Django Framework, employing a microservices approach with separate repositories for API development using Django Rest Framework and frontend development using Django and frontend languages. The development and production phases were carefully planned for each repository. Pytest facilitated test-driven development, ensuring quick site development and previewing. Asynchronous and scheduled tasks, including email notifications and task expiration handling, were managed using Celery, Celery-Beat, and Redis as a broker and cache. Docker and Docker-Compose supported cross-device collaboration through microservices encapsulated in containers. Nginx resolved issues with Staticfiles and served the site on port 80. Simple-jwt provided authentication and authorization using Access and Refresh tokens. Cross-Origin Resource Sharing enhanced site security by restricting API access. For deployment, AWS was utilized with two domains, social-library-api-1563.ml for the API and social-library-1563.ml for clients. Route 53 linked domains to an EC2 server, while the Certification Manager enabled SSL support through a Load Balancer. Additionally, S3 was employed to create a subdomain for Flower.",
    skills: [
      "Docker",
      "Docker-Compose",
      "CORS-ORIGIN",
      "AWS-Route53",
      "AWS-EC2",
      "AWS-S3",
      "JWT",
      "Django",
      "DRF",
      "Postgres",
      "Pytest",
      "Celery",
      "Redis",
      "Nginx",
    ],
    link: "https://github.com/SwAt1563/django-backend-social-library",
  },
  {
    imageSrc: ITHubImage,
    title: "IT Hub",
    date: "Apr 23th 2023",
    description:
      "In the creation of this ReactJS-powered website for IT students, I've introduced an array of services to cater to their diverse needs. Utilizing Firebase as a serverless service ensures seamless interaction with servers, and the platform boasts a central hub for event news uploads. Three key services include aiding students in securing full university rooms, facilitating group formation for final graduation projects, and providing a platform for students to sell items like books. The website now extends its offerings to include a top-notch service that provides exclusive offers from various shops, enhancing the overall experience for students by integrating valuable discounts and promotions into the IT community hub.",
    skills: ["ReactJS", "Bootsrap", "Firebase"],
    link: "https://swat1563.github.io/it-bzu",
  },
];