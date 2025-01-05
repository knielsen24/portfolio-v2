import { handleRounding } from "@/lib/helpers";

export const pageHeader = {
  page: "About",
  title: "Professional coach, to self taught coder, to software enthusiast.",
  intro:
    "Before coding, I was dedicated to full-time coaching in non-profit club swimming organizations, aiming to positively impact the youth. Now, I'm committed to make an meaningful impact through software.",
};

// From 2019 to 2022, I served as the Head Coach/CEO for one of the top competitive teams in California, where I managed all team programs, and mentored some of the fastest high school athletes in the United States and around the world.

export const imageQuote = {
  quote: `"The way I look at software development is that there is always a
    problem to be solved, and the missing puzzle pieces are waiting to
    be discovered."`,
  name: "Kevin Nielsen,",
  slogan: "SE puzzle enthusiast",
};

export const loveCoding = {
  header: "Why I love coding",
  firstP:
    "The pure expression of problem-solving and building something organic with technology is the beauty of software engineering. That mindset has been instilled in me from fond childhood memories of working on puzzles with my grandparents and building fully customized prototype concepts with Legos.",
  secondP:
    "Now that I have graduated from Legos, I am passionate about using technology to build web and mobile applications. The way I look at software development is that there is always a problem to be solved, and the missing puzzle pieces are waiting to be discovered. With effort and persistence, one can always find a way to put the pieces together. It is a continuous learning process, but this is what makes software engineering so great.",
};

export const excitement = {
  header: "Why I'm excited about technology",
  firstP:
    "What makes me excited about a career in tech is finding impactful solutions that help others at scale. One reason I loved coaching was the fulfillment of making a positive impact on the swimmers as athletes and as people. Now in the tech world, my goal is to make meaningful contributions to a software team that results in a positive impact on the users.",
  secondP:
    "Last but not least, for so long my identity was tied to swimming, and I am excited about discovering what unfolds with this path and transitioning with this new identity. There will be new challenges, and I can’t wait to face them.",
};

const startDate = new Date("2021-12-15");
const currentDate = new Date();
const years = handleRounding(startDate, currentDate);
console.log("🔋YEARS: ", years);

export const stats = [
  { label: "Coding Inception", value: `${years} years` },
  { label: "Coaching Experience", value: "12 years" },
  { label: "Legos Compiled", value: "10k+" },
  { label: "Golf Handicap", value: "2.8" },
];

export const timelineHeader = {
  name: "My transition into software",
};

export const timeline = [
  {
    name: "Career pivot",
    description:
      "Dedicating 24 years to competitive club swimming—12 as an athlete and 12 as a coach—it was time to begin a new chapter with a new career.",
    date: "Jan 2022",
    dateTime: "2022-01",
  },
  {
    name: "Passion for technology",
    description:
      "Searching for a new calling, I learned how to build a PC, took an intro to computer science course (CS50), and learned JavaScript through a hard copy.",
    date: "Feb 2022",
    dateTime: "2022-02",
  },
  {
    name: "Enrolled into Flatiron",
    description:
      "Striving to enhance my skills, I invested in my education at Flatiron School, a coding bootcamp, and enrolled in their software engineering program.",
    date: "Mar 2022",
    dateTime: "2022-03",
  },
  {
    name: "Bootcamp graduate",
    description:
      "After 15 weeks of committing 60-70 hours per week to immersive learning, I proudly graduated with my full-stack software engineering certificate.",
    date: "Aug 2022",
    dateTime: "2022-08",
  },
];
