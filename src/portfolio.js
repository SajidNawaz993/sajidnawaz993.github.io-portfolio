
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Sajid Nawaz",
  title: "Hi all, I'm Sajid Nawaz",
  subTitle: emoji("A passionate Software Developer 🚀 having an experience of building iOS and Android Mobile applications with Swift / Objective-C / Java / Kotlin and Flutter."),
  resumeLink: "https://drive.google.com/file/d/1bIoRsZ2lBdlqxajFhJaRWU_oJB9jRDkZ/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/SajidNawaz993",
  linkedin: "https://www.linkedin.com/in/sajid-nawaz-744578121/",
  gmail: "sajidnawaz993@gmail.com",
  // gitlab: "https://gitlab.com/sajidnawaz",
  facebook: "https://web.facebook.com/sajid.nawaz.1048"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "FULL STACK MOBILE APPS DEVELOPER WHO WANTS TO EXPLORE MOBILE TECH STACK",
  skills: [
    emoji("⚡ Implement enhancement in existing projects (Objective c, Swift, Kotlin, Java, Dart)"),
    emoji("⚡Develop new apps for iPhone, iPad, iWatch and TvOS"),
    emoji("⚡ Develop new apps for Android Devices ,Tablet and AndroidTV"),
    emoji("⚡ Error and problem solving Explore new ideas"),
    emoji("⚡ Maintaining the code and atomization of the application"),
    emoji("⚡ Upload app on app store and play store"),
    emoji("⚡ Proficient in code versioning tools including Git, and Bitbucket"),
    emoji("⚡ Collaborate with cross-functional teams to analyze, design, and deliver new features"),
    emoji("⚡ Supporting the entire application lifecycle from concept to design, testing, release and support"),
    emoji("⚡ Staying up to date with new mobile technology trends, applications, and protocols"), ,
    emoji("⚡ Proficient with continuous integration"),
  ],

  /* Make Sure You include correct Font Awesome Class name to view your icon
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
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "Objective-C",
      fontAwesomeClassname: "fab fa-apple"
    },
    {
      skillName: "SQlite",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Kotlin",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Flutter",
      fontAwesomeClassname: "fab fa-modx"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Mobile Interface Layout and Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Restful API and 3rd Party Data Integration",
      progressPercentage: "90%"
    },
    {
      Stack: "Mobile Apps Architecture",
      progressPercentage: "80%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer (iOS/Android Developer)",
      company: "Moftak Solution (PVT)",
      companylogo: require("./assets/images/moftal-sol.png"),
      date: "Sep 2016 – June 2017",
      desc: "",
      descBullets: [
        "Implement enhancement in existing projects (Objective c, Swift, Kotlin, Java)",
        "Develop apps for iPhone, iPad, iWatch in swift.",
        "Develop apps for Android Devices and tablet",
        "Error and problem solving",
        "Explore new ideas",
        "Upload app on App store and Play Store"
      ]
    },
    {
      role: "Software Engineer (iOS/Android Developer)",
      company: "LeadConcept Solution (PVT)",
      companylogo: require("./assets/images/leadconcept.jpg"),
      date: "July 2017 – August 2019",
      desc: "",
      descBullets: [
        "Implement enhancement in existing projects (Objective c, Swift, Kotlin, Java)",
        "Develop apps for iPhone, iPad, iWatch in swift.",
        "Develop apps for Android Devices and tablet",
        "Error and problem solving",
        "Explore new ideas",
        "Upload app on App store and Play Store"
      ]
    },
    {
      role: "Lead Software Engineer (iOS/Android Developer)",
      company: "Gtek.Solutions",
      companylogo: require("./assets/images/gtek-logo.c8024a2d.png"),
      date: "September 2019 – Present",
      desc: "",
      descBullets: [
        "Implement enhancement in existing projects (Objective c, Swift, Kotlin, Java)",
        "Develop apps for iPhone, iPad, iWatch in swift.",
        "Develop apps for Android Devices and tablet",
        "Error and problem solving",
        "Explore new ideas",
        "Upload app on App store and Play Store"
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "sajidNawaz993", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: "https://is5-ssl.mzstatic.com/image/thumb/Purple114/v4/e4/f2/fa/e4f2fa14-6cdf-0219-d32c-1498b8f1d568/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/230x0w.webp",
      link: "https://apps.apple.com/us/app/homeschool-panda/id1470263093",
      name: "HomeSchool Panda (iOS)"
    },
    {
      image: "https://is2-ssl.mzstatic.com/image/thumb/Purple116/v4/22/4f/13/224f1316-78ca-5b7d-24fa-6ba020b5267c/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/460x0w.webp",
      link: "https://apps.apple.com/us/app/panda-connect/id1522301515",
      name: "Panda Connect (iOS)"
    },
    {
      image: "my-day.png",
      link: "https://drive.google.com/file/d/1lhsSu0BbcLEIaLJ1ynB3EIy1wXc9U2ow/view",
      name: "My Day (TV OS)"
    },
    {
      image: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/8f/a1/1a/8fa11ac2-639d-788e-ab2f-71c14d406a09/AppIcon-1x_U007emarketing-0-11-0-85-220-0.png/460x0w.webp",
      link: "https://apps.apple.com/tm/app/modus-remote/id6477860845?platform=iphone",
      name: "Modus Remote (iOS)"
    },
    {
      image: "https://play-lh.googleusercontent.com/shGl8Ch2ihlKB13GuH-W4emEAUi7OE0lP3_ZNTZc4W_o1XXYijmqaYb0B4cGwyLMKw=w480-h960-rw",
      link: "https://play.google.com/store/apps/details?id=com.remote.sem.modusremotecontrol",
      name: "Modus Remote (Android)"
    },
  ]
};

// Some Big Projects You have worked with your company

const bigProjectsTwo = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: "https://is3-ssl.mzstatic.com/image/thumb/Purple114/v4/27/19/05/27190515-9d22-c869-a63d-c5b55e3ba7be/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/230x0w.webp",
      link: "https://appadvice.com/app/humble-beauty-artists-app/1364063314",
      name: "Humble Beauty Artist (iOS)"
    },
    {
      image: "https://play-lh.googleusercontent.com/jmbxTFo6ZMkabSqUxEthpkAYNj63CLaseycEJE9330tRhlqGJc5RrlMGPkbZ5q3amA=w480-h960-rw",
      link: "https://play.google.com/store/apps/details?id=com.hsppro.app",
      name: " Homeschool Panda (Android)"
    },
    {
      image: require("./assets/images/panda-connect.png"),
      link: "https://play.google.com/store/apps/details?id=com.hsppro.pandasocial",
      name: "Panda Connect (Android)"
    },
    {
      image: "max-screen.png",
      link: "https://drive.google.com/file/d/13TwFbB7qSuZS2I8kwD4hTgSGWdalWgyy/view",
      name: "Max Screen (Android)"
    },
    {
      image: "https://play-lh.googleusercontent.com/2bY8yg1zjXq_wAOZP127doPvEV5qf9Q6i9SSCbUMwatTNPUKZg4ZjsMD4wyuaM2qVz4=w480-h960-rw",
      link: "https://play.google.com/store/apps/details?id=com.hoporbits",
      name: "Hop Orbits (Android)"
    }

  ]
};




// Some Big Projects You have worked with your company

const bigProjectsThree = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: "https://play-lh.googleusercontent.com/cZ0LPGGoZthG07IshIkMbHhV9MvZ3ThzSaukiSxZ9axOMgND2bvoK--XTVKoKk2Yzg=w480-h960-rw",
      link: "https://play.google.com/store/apps/details?id=com.marketyo.basgimpa",
      name: "Basgimpa (Flutter)"
    },
    {
      image: require("./assets/images/noqoodyinvoice.png"),
      link: "https://play.google.com/store/apps/details?id=com.qmobileme.noqoodyinvoice&hl=en&gl=US",
      name: "NoqoodyInvoice (Android)"
    },
    {
      image: "https://play-lh.googleusercontent.com/ALfcakNagfkOkZzQEtVUvtzv0p006c_qr_vj3j9QXaxSPs6tgTxIKl_l2m8YT7YfG20=w480-h960-rw",
      link: "http://ec2-13-246-34-189.af-south-1.compute.amazonaws.com:8102/swagger-ui.html",
      name: "Savannae API"
    },
    {
      image: "github-logo.png",
      link: "https://github.com/SajidNawaz993/TestMobius",
      name: "Stellar SDK"
    },
    {
      image: "https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/3e/99/c4/3e99c4ec-fba6-5ccb-962d-9aa2cf1758af/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/460x0w.webp",
      link: "https://apps.apple.com/ro/app/where-is-my-plane-tracker/id1659182359?platform=iphone",
      name: "Where Is My Plane Tracker (iOS)"
    },
  ]
};

const bigProjectsFour = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/7a/ee/d6/7aeed612-ac64-c981-07d0-48ed8bedb6be/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/460x0w.webp",
      link: "https://apps.apple.com/us/app/listen-up/id1509082951",
      name: "Listen-Up (iOS)"
    },
    {
      image: "https://play-lh.googleusercontent.com/_pNRYd6hhohakGySb2-SX-wxYGVqRnv9BI_1nAINZx4u7yZ4p4ElxKZ2vTEV6S8c1T0=w480-h960-rw",
      link: "https://play.google.com/store/apps/details?id=com.kitaba&hl=en",
      name: "Kitaba (Android)"
    },
    {
      image: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/e2/6e/06/e26e0613-ee57-00e2-f38a-bcdb2f6d2c2d/AppIcon-0-0-1x_U007emarketing-0-11-0-sRGB-85-220.png/460x0w.webp",
      link: "https://apps.apple.com/us/app/brass-wood-seller/id6449472461",
      name: "BRASS & WOOD Seller (iOS)"
    },
    {
      image: "https://play-lh.googleusercontent.com/fZ6YF9c03o9-43xhsoQKTKBWzGvfmjqUZ1FSnCIZ2g-L3kSU-Ylmk76IgOXeWjidcGg=w480-h960-rw",
      link: "https://play.google.com/store/apps/details?id=com.brassAndWoodSeller.app&hl=en",
      name: "BRASS & WOOD Seller (Android)"
    },
    {
      image: "https://play-lh.googleusercontent.com/t7DyHB-UHmL66p7XyS0sccMb7kqcPvz00_NsqlK-6TB4rvFZ7Vf4wAtlW_BowK6RBA=w480-h960-rw",
      link: "https://play.google.com/store/apps/details?id=com.cyber.photouploader",
      name: "Cyber Garage Global (Android)"
    }
  ]
};


const bigProjectsFive = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/2b/4d/7e/2b4d7eb5-3a14-ec45-1ab6-71d12a3d0081/AppIcon-0-0-1x_U007epad-0-1-85-220.png/460x0w.webp",
      link: "https://apps.apple.com/us/app/cyber-garage-global/id6499470921",
      name: "Cyber Garage Global (iOS)"
    },
    {
      image: "https://raw.githubusercontent.com/SajidNawaz993/sajidnawaz993.github.io/refs/heads/master/src/assets/images/my-day-tv-os.jpeg", // Update with actual image ID from your Drive
      link: "https://drive.google.com/drive/folders/1TPlwevAOlX8Nl4Wgm9uS2B0lCP_dT7ZF", // Update with actual App Store link
      name: "My Day TVOS"
    }
  ]
};




// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Education 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Bachelor of Science (Software Engineering) – 2012-2016",
      subtitle: "International Islamic University, Islamabad",
      image: "iiu-islamabad-logo.png",
      footerLink: [
        { name: "www.iiu.edu.pk", url: "https://www.iiu.edu.pk/" },

      ]
    },
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@sajidnawaz/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/sajidnawaz-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/",
      image:
        "https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.0-9/76714032_1730516240415559_1293494289556307968_o.jpg?_nc_cat=103&_nc_ohc=s5f81rdZd6wAQmqUa52YQBA21MjVOy7e-HN9jI7MspRDC-v5ahEouyInQ&_nc_ht=scontent.fkhi6-1.fna&oh=c29141a9a0de7ff2011a8191f5475a78&oe=5E83127C"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3003377180",
  email_address: "sajidnawaz993@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName: "twitter"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, bigProjectsTwo, bigProjectsThree, bigProjectsFour, bigProjectsFive, achievementSection, blogSection, talkSection, podcastSection, contactInfo, twitterDetails };
