export const content = {
  companyName: {
    base: "",
    complement: {
      en: "Sandra COLOMER",
      fr: "Sandra COLOMER",
    },
  },
  legalNotices: {
    text: {
      en: "© 2024 - ${base}  ${complement.en} - All Rights Reserved",
      fr: "© 2024 - ${base}  ${complement.fr} - Tous droits réservés",
    },
    textBreaks: {
      en: "© 2024<br>${base}<br>${complement.en}<br>All Rights Reserved",
      fr: "© 2024<br>${base}<br>${complement.fr}<br>Tous droits réservés",
    },
  },
  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sandra-colomer-pro79/",
      icon: "/icons/linkedin.svg",
    },
    {
      name: "GitHub",
      url: "https://github.com/SanCo21",
      icon: "/icons/github.svg",
    },
    {
      name: "Email",
      url: "mailto:sandra.colomer@outlook.fr",
      icon: "/icons/email.svg",
    },
  ],
  sectionsData: {
    home: {
      id: "home",
      title: {
        en: "Welcome to my Portfolio!",
        fr: "Bienvenue sur mon Portfolio !",
      },
      content: {
        en: "I am Sandra COLOMER, a creator of dynamic and interactive web interfaces.",
        fr: "Je suis Sandra COLOMER, une créatrice d'interfaces web dynamiques et interactives.",
      },
      component: "null",
      backgroundColor: "null",
      icon: "home",
    },
    about: {
      id: "about",
      title: {
        en: "About",
        fr: "À propos",
      },
      content: {
        en: "Passionate about digital technology and driven by a strong desire to create, I trained as a Front-End Developer through a professional training program at OpenClassrooms. I enjoy tackling technical challenges and exploring the latest technologies to transform ideas into intuitive and aesthetically pleasing digital experiences. Beyond lines of code, I believe in the web's potential to connect people and simplify their daily lives. I approach each project with a user-centered approach, convinced that a website should be accessible to all and offer a smooth and enjoyable experience. A big thank you to my mentor, Julien Verley, for his invaluable guidance and insightful advice, which greatly contributed to my learning. ",
        fr: "Passionnée par le numérique et animée par une forte volonté de créer, j'ai acquis mes compétences en développement grâce à une formation professionnalisante d'Intégrateur Web chez OpenClassrooms. J'aime relever les défis techniques et explorer les dernières technologies pour transformer des idées en expériences digitales intuitives et esthétiques. Au-delà des lignes de code, je crois au potentiel du web pour connecter les gens et simplifier leur quotidien. J'aborde chaque projet avec une approche centrée sur l'utilisateur, convaincue qu'un site web doit être accessible à tous et offrir une expérience fluide et agréable. Un grand merci à mon mentor Julien Verley, pour son accompagnement précieux et ses conseils avisés qui ont grandement contribué à mon apprentissage.",
      },
      component: "null",
      backgroundColor: "null",
      icon: "user",
    },
    activities: {
      id: "activities",
      title: {
        en: "Services",
        fr: "Prestations",
      },
      content: {
        en: "Creation of dynamic and performant web interfaces, centered on the user with the latest technologies such as React, to bring life to performant and accessible web projects.",
        fr: "Création d'interfaces web dynamiques et performantes, centrées sur l'utilisateur avec les technologies les plus récentes, comme React, pour donner vie à des projets web performants et accessibles.",
      },
      component: "ActivityCards",
      backgroundColor: "null",
      icon: "hands-helping",
      commonImage: {
        src: "/images/working.jpg",
        alt: "Activity image",
      },
      activitiesList: [
        {
          name: {
            en: "Integration",
            fr: "Intégration",
          },
          description: {
            en: "Transformation of graphic mockups into HTML, CSS and JavaScript code (design and browser/device compatibility).",
            fr: "Transformation de maquettes graphiques en code HTML, CSS et JavaScript (respect du design et compatibilité navigateurs/appareils).",
          },
          icon: "trowel-bricks",
        },
        {
          name: {
            en: "Development",
            fr: "Développement",
          },
          description: {
            en: "Dynamic and interactive user interfaces with React (state management, API, data management...).",
            fr: "Interfaces utilisateur dynamiques et interactives avec React (gestion de l'état, API, gestion des données...)",
          },
          icon: "code",
        },
        {
          name: {
            en: "Optimization",
            fr: "Optimisation",
          },
          description: {
            en: "Improve SEO and performance (loading time, rendering and accessibility, web best practices).",
            fr: "Améliorer le référencement (SEO) et les performances (temps de chargement, rendu et accessibilité, bonnes pratiques du web).",
          },
          icon: "chart-line",
        },
        {
          name: {
            en: "Maintenance",
            fr: "Maintenance",
          },
          description: {
            en: "Add new functionalities, improve the user interface, optimize performance...",
            fr: "Ajout de nouvelles fonctionnalités, amélioration de l'interface utilisateur, optimisation des performances...",
          },
          icon: "screwdriver-wrench",
        },
      ],
    },
    skills: {
      id: "skills",
      title: {
        en: "Skills",
        fr: "Compétences",
      },
      content: {
        en: "",
        fr: "",
      },
      component: "SkillsCards",
      backgroundColor: "",
      icon: "toolbox",

      skillsList: [
        {
          src: "/icons/html5.svg",
          alt: "HTML 5 logo",
          name: "HTML 5",
        },
        {
          src: "/icons/css3.svg",
          alt: "CSS 3 logo",
          name: "CSS 3",
        },
        {
          src: "/icons/sass.svg",
          alt: "Sass logo",
          name: "Sass",
        },
        {
          src: "/icons/react.svg",
          alt: "React logo",
          name: "React.js",
        },
        {
          src: "/icons/js.svg",
          alt: "JavaScript logo",
          name: "JavaScript",
        },
        {
          src: "/icons/git.svg",
          alt: "Git logo",
          name: "Git",
        },
        {
          src: "/icons/figma.svg",
          alt: "Figma logo",
          name: "Figma",
        },
        {
          src: "/icons/swagger.svg",
          alt: "Swagger logo",
          name: "Swagger",
        },
        {
          src: "/icons/mongodb.svg",
          alt: "MongoDB logo",
          name: "MongoDB",
        },
        {
          src: "/icons/nextjs.svg",
          alt: "Next logo",
          name: "Next.js",
        },
        {
          src: "/icons/tailwind.svg",
          alt: "Tailwind logo",
          name: "Tailwind",
        },
      ],
    },
    projects: {
      id: "projects",
      title: {
        en: "Projects",
        fr: "Projets",
      },
      content: {
        en: "Here is a selection of projects carried out as part of my training at OpenClassrooms.",
        fr: "Voici une sélection de projets réalisés dans le cadre de mon cursus chez OpenClassrooms.",
      },
      component: "ProjectsCards",
      backgroundColor: "null",
      icon: "folder-open",
    },
    contact: {
      id: "contact",
      title: {
        en: "Contact",
        fr: "Contact",
      },
      content: {
        en: "Feel free to contact me for more information...",
        fr: "N'hésitez pas à me contacter pour plus d'informations...",
      },
      component: "ContactForm",
      backgroundColor: "null",
      icon: "comment-dots",
    },
  },
};
