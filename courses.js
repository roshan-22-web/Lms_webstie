const courses = [
  {
    title: "HTML & CSS Basics",
    category: "web",
    description: "Learn how to build responsive websites from scratch.",
    link: "https://www.youtube.com/watch?v=UB1O30fR-EE"
  },
  {
    title: "JavaScript Fundamentals",
    category: "web",
    description: "Understand core JavaScript concepts and interactivity.",
    link: "https://www.youtube.com/watch?v=hdI2bqOjy3c"
  },
  {
    title: "Advanced JavaScript",
    category: "web",
    description: "Deep dive into closures, promises, and async/await.",
    link: "https://www.youtube.com/watch?v=PoRJizFvM7s"
  },
  {
    title: "Responsive Web Design",
    category: "web",
    description: "Master layout techniques for mobile and desktop.",
    link: "https://www.youtube.com/watch?v=srvUrASNj0s"
  },
  {
    title: "Python for Data Science",
    category: "data",
    description: "Introduction to Python used in data analysis.",
    link: "https://www.youtube.com/watch?v=LHBE6Q9XlzI"
  },
  {
    title: "Machine Learning Basics",
    category: "data",
    description: "Understand the fundamentals of ML with examples.",
    link: "https://www.youtube.com/watch?v=Gv9_4yMHFhI"
  },
  {
    title: "Data Visualization with Python",
    category: "data",
    description: "Create beautiful visualizations using Matplotlib and Seaborn.",
    link: "https://www.youtube.com/watch?v=GcXcSZ0gQps"
  },
  {
    title: "UI/UX Design Principles",
    category: "design",
    description: "Basics of user interface and experience design.",
    link: "https://www.youtube.com/watch?v=3Ylgn1J1_GY"
  },
  {
    title: "Figma UI Design Tutorial",
    category: "design",
    description: "Learn to design user interfaces using Figma.",
    link: "https://www.youtube.com/watch?v=FTFaQWZBqQ8"
  },
  {
    title: "Design Thinking for Innovation",
    category: "design",
    description: "Learn how to apply design thinking to real-world problems.",
    link: "https://www.youtube.com/watch?v=_r0VX-aU_T8"
  },
  // AI Courses
{
  title: "Intro to Artificial Intelligence",
  category: "ai",
  description: "What is AI? Understand its history and applications.",
  link: "https://www.youtube.com/watch?v=2ePf9rue1Ao"
},
{
  title: "Neural Networks in 5 Minutes",
  category: "ai",
  description: "Quick introduction to neural networks and deep learning.",
  link: "https://www.youtube.com/watch?v=aircAruvnKk"
},
{
  title: "DevOps Crash Course",
  category: "devops",
  description: "Learn DevOps basics and CI/CD pipeline concepts.",
  link: "https://www.youtube.com/watch?v=0yWAtQ6wYNM"
},
{
  title: "Docker for Beginners",
  category: "devops",
  description: "Understand how Docker containers work.",
  link: "https://www.youtube.com/watch?v=fqMOX6JJhGo"
},

// Marketing Courses
{
  title: "Digital Marketing Full Course",
  category: "marketing",
  description: "Comprehensive guide to online marketing strategies.",
  link: "https://www.youtube.com/watch?v=nU-IIXBWlS4"
},
{
  title: "SEO Basics for Beginners",
  category: "marketing",
  description: "Learn how to improve your website's SEO.",
  link: "https://www.youtube.com/watch?v=DvwS7cV9GmQ"
}

];


const container = document.getElementById('course-container');
const dropdown = document.getElementById('course-category');

function renderCourses(filter = "all") {
  container.innerHTML = "";

  const filtered = filter === "all" ? courses : courses.filter(c => c.category === filter);

  filtered.forEach(course => {
    const card = document.createElement("div");
    card.className = "course-card";
    card.innerHTML = `
      <h3>${course.title}</h3>
      <p>${course.description}</p>
      <a class="watch-btn" href="${course.link}" target="_blank">Watch</a>
    `;
    container.appendChild(card);
  });
}

dropdown.addEventListener('change', (e) => {
  renderCourses(e.target.value);
});

// Initial load
renderCourses();
