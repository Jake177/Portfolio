/* 
Letters used in the introduction animation
*/
export const letters = [
  { char: 'H', img: 'images/person-img-1.jpg', rotate: '-rotate-15' },
  { char: 'e', img: 'images/person-img-2.jpg', rotate: 'rotate-15' },
  { char: 'l', img: 'images/person-img-3.jpg', rotate: '-rotate-15' },
  { char: 'l', img: 'images/person-img-4.jpg', rotate: 'rotate-15' },
  { char: 'o', img: 'images/person-img-5.jpg', rotate: '-rotate-15' },
]

/* 
Professions to cycle through in the introduction animation
*/
export const professionTexts = ['Front End', 'Back End', 'Full Stack','Cloud','Software']

export const socialIcons = [
  { icon: 'bx bxl-instagram-alt' },
  { icon: 'bx bxl-youtube' },
  { icon: 'bx bxl-twitter' },
  { icon: 'bx bxl-facebook-square' },
]

/* 
About me text content
*/
export const aboutText = {
  intro: "Hi, I’m Jianhui Ling (James). I recently completed my Master of IT at Monash University.",
  focus: "I specialize in cloud engineering and full-stack development, with over two years of AWS experience. I’m currently an AWS Certified Cloud Practitioner, and I’m preparing for the Solutions Architect – Associate certification.",
  projects: [
    "Designed and deployed web applications using Vue.js, React, and Node.js with CI/CD pipelines (GitHub Actions, PM2, Nginx), reducing deployment time from 10 minutes to 2 minutes.",
    "Built serverless image recognition system with AWS Lambda, API Gateway, and DynamoDB, supporting 100+ concurrent users and reducing storage costs by 40%.",
    "Native Android app development using Java and Kotlin, implementing RESTful APIs and Firebase integration for university sport activities.",
  ],
  agile: "I also bring 2 years of Agile experience, collaborating with cross-functional, cross-cultural teams to deliver scalable, high-performance solutions.",
  philosophy: "For me, development goes beyond just writing code. It’s about transforming real-world challenges into impactful, cost-effective, and user-focused digital solutions."
};

/* 
Skill cards data
*/
export const skillCards = [
    {
    icon: 'bx bxs-file-doc',
    title: 'Front-End Dev',
    description:
      'Front-end development is about bringing designs to life through clean and efficient code. I specialize in HTML, CSS, and JavaScript, along with frameworks like React and Vue to build dynamic and interactive web applications. My focus is on performance, accessibility, and responsiveness, ensuring that every website functions flawlessly across all devices and screen sizes.',
    projectCount: 4,
    hoverPosition: {
      large: 'bottom',
      small: 'bottom',
    },
  },
    {
    icon: 'bx bx-data',
    title: 'Back-End Dev',
    description:
      'Back-end development powers the functionality behind web applications. I work with Node.js and databases like DynamoDB and PostgreSQL to build secure and scalable server-side applications. Whether handling authentication, managing API requests, or optimizing database queries, I ensure data is processed efficiently and securely to support seamless front-end interactions.',
    projectCount: 3,
    hoverPosition: {
      large: 'top',
      small: 'bottom',
    },
  },
  {
    icon: 'bx bx-code',
    title: 'DevOps',
    description:
      'DevOps is about integrating development and operations to improve collaboration and productivity. I have experience with CI/CD pipelines, infrastructure as code, and monitoring solutions. By leveraging tools like Docker, Kubernetes, and AWS, I create scalable and reliable systems that enhance deployment speed and application performance.',
    projectCount: 3,
    hoverPosition: {
      large: 'bottom',
      small: 'bottom',
    },
  },


  {
    icon: 'bx bxs-devices',
    title: 'Cloud',
    description:
      "In today's digital world, cloud computing is essential for scalable and flexible web applications. As an AWS cloud practitioner, I utilize services like AWS and Azure to deploy applications, manage databases, and ensure high availability. By utilizing containerization with Docker and orchestration with Kubernetes, I create robust solutions that can handle varying loads and provide seamless user experiences.",
    projectCount: 3,
    hoverPosition: {
      large: 'top',
      small: 'bottom',
    },
  },

  {
    icon: 'bx bxl-github',
    title: 'Git Version Control',
    description:
      'Version control is essential for modern web development, and Git is my go-to tool for managing code efficiently. I use Git for branching, merging, and collaborating with teams on platforms like GitHub and GitLab. By maintaining a clean commit history and utilizing pull requests, I ensure that code changes are tracked, reviewed, and integrated smoothly, facilitating effective teamwork and project management.',
    projectCount: 3,
    hoverPosition: {
      large: 'top',
      small: 'bottom',
    },
  },
    {
    icon: 'bx bx-mobile',
    title: 'App Dev',
    description:
      'App development is about creating software applications that run on mobile devices. I have experience in building native mobile apps using Java and Kotlin for Android. My focus is on delivering smooth performance, intuitive navigation, and seamless integration with backend services. Whether it’s a simple utility app or a complex platform, I ensure that the app meets user needs and provides a great user experience.',
    projectCount: 4,
    hoverPosition: {
      large: 'bottom',
      small: 'bottom',
    },
  },
]
