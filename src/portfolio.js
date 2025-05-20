/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const coachingOutcomes = [
  {
    title: "Coached PO on Product Discovery Techniques",
    description:
      "Guided Product Owners in applying techniques like Impact Mapping, Story Mapping, and Double Diamond to clarify product goals and user needs before entering development.",
    techStack: [
      "Impact Mapping",
      "User Story Mapping",
      "Design Thinking",
      "Product Goal Definition"
    ]
  },
  {
    title: "Facilitated Discovery Workshops",
    description:
      "Designed and facilitated workshops with cross-functional teams and stakeholders to uncover user problems and align on impactful solutions.",
    techStack: [
      "Facilitation",
      "Problem Framing",
      "User Journey",
      "Prioritization"
    ]
  },
  {
    title: "Designed PO101 Training – Focus on Discovery",
    description:
      "Created an internal training program for Product Owners emphasizing early-stage discovery practices, including identifying valuable outcomes over features.",
    techStack: [
      "Training from the Back of the Room",
      "PO Coaching",
      "Outcome Thinking",
      "Agile Facilitation"
    ]
  },
  {
    title: "Scaled Scrum for 7 Teams using LeSS",
    description: "Coached 7 cross-functional teams to adopt LeSS framework",
    techStack: [
      "LeSS",
      "System Modeling",
      "Agile Coaching",
      "Product Definition"
    ]
  }
];

const greeting = {
  username: "Nitcharee Patkuljiratawol",
  title: "Hi, I'm Kwang 👋",
  subTitle:
    "A hybrid Software Developer & Agile/LeSS Coach passionate about guiding Product Owners and teams through impactful product discovery and delivery.",
  resumeLink: "https://www.linkedin.com/in/nitcharee-kwang/",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/modsomjeed",
  linkedin: "https://www.linkedin.com/in/nitcharee-kwang/",
  gmail: "nitcharee.kwang@gmail.com",
  facebook: "https://web.facebook.com/ModsomJEED/",
  medium: "https://medium.com/@nitcharee-kwang",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Empowering teams and Product Owners to build meaningful products through discovery, coaching, and technical excellence.",
  skills: [
    "⚡ Facilitating Product Discovery using Impact Mapping, Story Mapping, and Design Thinking",
    "⚡ Coaching Product Owners on outcome-driven approaches and backlog refinement",
    "⚡ Conducting Agile and LeSS coaching sessions to enhance team collaboration",
    "⚡ Developing applications with React, Angular, and .NET Core",
    "⚡ Implementing unit testing and code coverage strategies"
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "JIRA",
      fontAwesomeClassname: "fab fa-jira"
    },
    {
      skillName: "FIGMA",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "Github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "Sketch",
      fontAwesomeClassname: "fab fa-sketch"
    },
    {
      skillName: "Slack",
      fontAwesomeClassname: "fab fa-slack"
    },
    {
      skillName: "Sourcetree",
      fontAwesomeClassname: "fab fa-sourcetree"
    },
    {
      skillName: "Stack Overflow",
      fontAwesomeClassname: "fab fa-stack-overflow"
    },
    {
      skillName: "Wordpress",
      fontAwesomeClassname: "fab fa-wordpress"
    },
    {
      skillName: "Dropbox",
      fontAwesomeClassname: "fab fa-dropbox"
    },
    {
      skillName: "Medium",
      fontAwesomeClassname: "fab fa-medium"
    },
    {
      skillName: "Atlassian",
      fontAwesomeClassname: "fab fa-atlassian"
    },
    {
      skillName: "Vue",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "Trello",
      fontAwesomeClassname: "fab fa-trello"
    },
    {
      skillName: "Rust",
      fontAwesomeClassname: "fab fa-rust"
    },
    {
      skillName: "Octopus Deploy",
      fontAwesomeClassname: "fab fa-octopus-deploy"
    },
    {
      skillName: "Flutter",
      fontAwesomeClassname: "fab fa-flutter"
    },
    {
      skillName: "Bitbucket",
      fontAwesomeClassname: "fab fa-bitbucket"
    },
    {
      skillName: "Swagger",
      fontAwesomeClassname: "logo:swagger"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "logo:TypeScripts"
    },
    {
      skillName: "Selenium",
      fontAwesomeClassname: "logo:selenium"
    },
    {
      skillName: "Ruby on Rails",
      fontAwesomeClassname: "logos:rails"
    },
    {
      skillName: "Golang",
      fontAwesomeClassname: "logo:golang"
    },
    {
      skillName: "SonarQube",
      fontAwesomeClassname: "logos:SonarQube"
    },
    {
      skillName: ".NET Core",
      fontAwesomeClassname: "logos:dotnet"
    },
    {
      skillName: "Jest",
      fontAwesomeClassname: "logos:jest"
    },
    {
      skillName: "Cucumber",
      fontAwesomeClassname: "logos:cucumber"
    },
    {
      skillName: "Cypress",
      fontAwesomeClassname: "logos:cypress"
    },
    {
      skillName: "Playwright",
      fontAwesomeClassname: "logos:playwright"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "PANYAPIWAT INSTITUTE OF MANAGEMENT",
      subHeader: "Bachelor of Engineering Program in Computer Engineering",
      duration: "2011 - 2015",
      // desc: "Activities and societies: Coding Club, Agile Enthusiasts", // รอแก้ไข
      grade: "GPA: 3.69"
      // descBullets: [ // รอแก้ไข
      //   "Developed a keen interest in software development and agile methodologies.",
      // ],
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  // รอแก้ไข
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  // รอแก้ไข
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Agile/LeSS Coach",
      company: "ODDS TEAM",
      companylogo: "path/to/companylogo.png",
      date: "Jan 2018 – Present",
      desc: "Coaching multiple teams and Product Owners in adopting Agile and LeSS frameworks to enhance product discovery and delivery processes.",
      descBullets: [
        "Facilitated workshops on Impact Mapping and Story Mapping.",
        "Conducted training sessions for Product Owners focusing on outcome-driven development."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  // รอแก้ไข
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  // รอแก้ไข
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  // รอแก้ไข
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Certified LeSS Practitioner",
      subtitle: "Principles to Practices",
      image: require("./assets/logo/CLP-logo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1eZoMizXo4r9-Rjz5oqjiZqqIOCDd70Uw/view?usp=drive_link"
        }
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Wardley Map for X",
      // subtitle:
      //   "Wardley Map for X",
      image: require("./assets/logo/Wardley-Maps.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1Loeuv0jq8bJpsDh9yzRmpzx_QujZzUnX/view?usp=drive_link"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  // รอแก้ไข
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  // รอแก้ไข
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  // รอแก้ไข
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  // รอแก้ไข
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  // รอแก้ไข
  title: emoji("Contact Me ☎️"),
  subtitle: "Feel free to reach out for collaboration or just a friendly chat.",
  number: "+66-635161568",
  email_address: "nitcharee.kwang@gmail.com"
};

// Twitter Section

const twitterDetails = {
  // รอแก้ไข
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
