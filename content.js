
window.PORTFOLIO = {
  profile: {
    name: "Archer White",
    title: "Duke Mechanical Engineering · Designing · Analyzing · Manufacturing",
    intro: "My name is Archer, and I am a sophomore at Duke University studying Mechanical and Aerospace Engineering. I am passionate about designing, manufacturing, and testing components and systems for Duke Aero’s IPA/Nitrous liquid rocket engine. As the team’s Combustion Devices Lead, I work to improve engine performance and efficiency through detailed design, analysis, manufacturing, and experimental testing. Through this work, I hope to contribute to the advancement of propulsion technologies for both aeronautical and astronautical applications.",
    heroImage: "images/IG0.jpg",
    heroImageAlt: "CAD model of Deucalion, the ablative combustion chamber for Duke Aero's Prometheus IPA/Nitrous liquid rocket engine.",
    heroCaption: "CAD model of Deucalion, the ablative combustion chamber for Duke Aero's Prometheus IPA/Nitrous liquid rocket engine.",
    bio: [
      "I’m a passionate engineering student from Nashville, Tennessee with a focus on ideation, design, and manufacturing. I enjoy solving complex problems through innovative solutions and bringing ideas to life through hands-on work.",
      "I have experience working in diverse teams, from Duke Aero to class and personal projects, where I’ve contributed to various stages of the engineering process, from initial ideation and design to production."
    ],
    education: "Duke University Pratt School of Engineering · Class of 2029",
    skills: ["SolidWorks (FEA)", "OnShape (CAD)", "Lathe and Mill metalworking", "3d printing, Russian (Elementary)"],
    contactIntro: "Feel free to reach out about my projects or engineering internship opportunities.",
    email: "archerhenrywhite@gmail.com",
    linkedin: "https://www.linkedin.com/in/archer-white-60b8aa2ba/?isSelfProfile=true",
    github: "https://github.com/ArcherHWhite",
    resume: "" // "assets/resume.pdf" in future
  },
  projects: [
    {
      id: "prometheus",
      title: "Prometheus IPA/Nitrous Liquid Rocket Engine",
      summary: "Prometheus is Duke Aero's second liquid rocket engine using IPA and Nitrous Oxide as propellants.",
      date: "2026-Present - Expected Static Hot Fire in Spring 2027 - Expected Flight in 2028",
      role: "Combustion Devices Lead - team of five",
      tools: "OnShape (CAD), SolidWorks (FEA), Lathe and Mill metalworking, phenolic resin casting, hydrostatic testing",
      sections: [
        { heading: "Overview", text: "The Prometheus project aims to develop both an ablative chamber, named Deucalion, for rapid testing and a regeneratively cooled chamber for flight. The design features 3.5kN of thrust over a six second burn time to achieve a goal apogee of 14,000ft. Moving on from our previous engine, the team is efficiently iterating designs to achieve a static hot fire in spring 2027, showcasing a complete development time from ideation to final testing in less than ten months. The engine features a pintle injector, cast phenolic liner, graphite throat and nozzle, and 6061 casing in order to stay under 7lbs." },
        { heading: "My contribution", text: "As the Combustion Devices Lead, I was responsible for designing the combustion chamber, throat and nozzle, nozzle washer, pintle injector manifold, casing, and phenolic liner. I designed these parts in coordination with other members designing the replaceable pintle tip, ignition system, mounting system, and phenolic molds. As the team moves forward, I will continue manufacturing each component from 6061-T6, 316 stainless steel, isostatic graphite, and a made-in-house phenolic resin." },
        { heading: "Results", text: "Ambient pressure heat testing on a phenolic liner sample revealed successful performance over a 2.5 minute propane torch test. Ongoing FEA supports our design choices for the ablative chamber leading to higher factor of safety for most components needed for repeated hot fires." }
      ],
      images: [
        { src: "images/IG1.jpg", alt: "Section view of ablative chamber Deucalion CAD", caption: "Cross section of Deucalion from the injector to the expansion nozzle. The entire assembly measures 11.9in long and 4.25in diameter while weighing under 6.8lbs" },
        { src: "images/IG2.jpg", alt: "Manufactured nozzle washer", caption: "View of 6061-T6 nozzle washer I manufactured using a lathe and  mill from round stock." },
        { src: "images/IG3.jpg", alt: "Me machining the nozzle washer on a lathe", caption: "Manufacturing process view of the nozzle washer." },
        { src: "images/IG4.jpg", alt: "Post-test phenolic sample", caption: "Post-test view of phenolic liner sample. The mixture consists of epoxy resin, phenolic microballoons, and baking soda. The separation occured after the test to measure regression and does not signify structural failure." }
      ],
      links: [] // [{ label: "Engineering drawing", url: "assets/drawing.pdf" }] in future
    },
    {
      id: "razorbill",
      title: "Razorbill",
      summary: "Ultra-lightweight UAS designed for tactical reconnaissance and rapid deployment optimized for cost and portability.",
      date: "2026-Present",
      role: "Founder and designer - independent project",
      tools: "OnShape (CAD), 3d printing, future composite layup",
      sections: [
        { heading: "Overview", text: "Razorbill is a GNSS guided reconnaissance UAS designed for maximum ease-of-use, rapid deployment, portability, and cost-effectiveness. Early prototypes are manufactured using PLA and PLA Aero and will be user controlled. The design uses a single pusher motor in the rear to power flight after pressurized gas launch from a handheld tube." },
        { heading: "Design Plans", text: "Razorbill is set up with a multistage planning approach to ensure novel features work before full integration. Initial designs will focus on a fixed-wing, user controlled model in order to test flight characteristics. Razorbill will utilize fuselage-integrated control surfaces to decrease wing production costs. Final prototypes will move toward a full carbon fiber construction to decrease weight while maintaining structure in addition to folding wings." }
      ],
      images: [
        { src: "images/IG5.jpg", alt: "Prototype shell with unfolded wings", caption: "View of prototype shell with wings unfolded. The unfolded length is 12.9in with a wingspan of 24.5in. The design features just under 130in^2 of wing area." },
        { src: "images/IG6.jpg", alt: "Prototype CAD of wings folded position", caption: "View of prototype CAD with wings in folded position. This is how the drone will be stored for transport and launch. The folded length is 15.3in with a fuselage width of 2.5in and max wing chord of 4in." }
      ],
      links: []
    },
    {
      id: "saker",
      title: "Project Saker",
      summary: "Fixed-wing UAS designed with VTOL capabilities to test autonomous flight and guidance systems.",
      date: "2026-Present",
      role: "Co-founder and designer - team of two",
      tools: "SolidWorks (FEA), OnShape (CAD), 3d printing",
      sections: [
        { heading: "Overview", text: "Project Saker is a fixed wing autonomous UAS designed for aerial threat interception through kinetic energy impact. The design includes a dual motor tractor configuration for high-speed flight in addition to control canards to optimize in-air maneuverability. Initial designs focus on optical guidance integrated with onboard computer vision. Autonomous flight allows for loitering in order to protect designated areas and the ability to return to base if necessary." },
        { heading: "Design Plans", text: "Future design plans include integrating more advanced guidance systems such as EO/IR or thermal imaging. A launch bay will also allow for rapid deployment through a solid rocket booster and easy transportation while maintaining full battery capacity." }
      ],
      images: [
        { src: "images/IG7.jpg", alt: "Early design concept", caption: "Early design concept for Project Saker. Recent updates include pusher --> puller configuration and added control canards." }
      ],
      links: []
    },
    {
      id: "rube-goldberg",
      title: "Rube Goldberg Machine - Freshman Design Project",
      summary: "Eight-stage Rube Goldberg machine designed to move a ball through a circuit utilizing gravitational potential energy.",
      date: "2026",
      role: "Designer, builder, and tester - team of 16",
      tools: "OnShape (CAD), 3d printing, metalworking",
      sections: [
        { heading: "Overview", text: "Our team of 16 was tasked with designing and building a Rube Goldberg machine purely powered by gravitational potential energy. A single reset was allowed in the form of an elevator to restore potential to the ball. Travelling through a fairy tale sequence of events, the end goal was to turn on an LED screen. The greatest challenge was the team of 16 was split up into small groups of four. Each smaller group was responsible for their own section and had to ensure that their mechanisms and circuit were compatible with the other three groups." },
        { heading: "My contribution", text: "I was mainly responsible for designing and building the Alice in Wonderland teacup elevator mechanism in addition to the underlying framework of the stand. The framework utilized 80/20 aluminum to create a four step design on top of which other mechanisms and designs were fastened. The elevator mechanism also used 80/20 aluminum as the shaft with a custom 3d printed teacup as the cart. Before landing in the cup, the ball would trigger a limit switch causing a motor to pull the cart up the shaft until the ball was dumped at the top, resetting its potential energy. I also acted as one of two final testers for the machine and made small adjustments to improve performance and integration." },
        { heading: "Results", text: "The final test for the machine was to have three successful runs within ten minutes. After an extensive testing phase and multiple iterations, the elevator, along with the rest of the Rube Goldberg machine, performed all three runs back-to-back." }
      ],
      images: [
        { src: "images/IG8.jpg", alt: "View of teacup elevator", caption: "View of 3d printed teacup elevator mechanism used to lift the ball up 80/20 elevator shaft." },
        { src: "images/IG9.jpg", alt: "View of full machine", caption: "View of full Rube Goldberg machine." }
      ],
      videos: [
        { src: "assets/rube-goldberg.mp4", alt: "Video of full machine in action", caption: "Video of full Rube Goldberg machine in action." }
      ],
      links: []
    }
  ]
};
