export interface Post {
  slug: string;
  title: string;
  date: string;
  image?: string;
  content: string;
}

export const posts: Post[] = [
  {
    slug: "edchange-global-2021",
    title: "EdChange Global 2021",
    date: "2021-07-23",
    image: "/images/golden-cogwheel.jpg",
    content: `I am very excited to be presenting again at the EdChange Global conference! I hope that our conversation around student centered classrooms and learning have inspired you to join me in using UDL and Agile/Scrum with your students!

Please look into the [Four Pillars of the Student Centered Classroom](/the-4-pillars-of-the-student-centered-classroom) and let me know your thoughts!`,
  },
  {
    slug: "2nd-agile-in-education-global-conference",
    title: "2nd Agile in Education Global Conference",
    date: "2021-03-17",
    image: "/images/hero-meeting.jpg",
    content: `Agile in Education offers a possibility to transform education from the classroom to the district, from K-12 to higher Education institutions. It requires both a shift in mindset around management and organizational systems, and some changes in how curriculum is offered to students which I propose should be Universal Design for Learning (UDL) — a pedagogy that easily includes what teachers are doing now, and pushes teachers to consider how to improve student independence in learning.

Interested in the UDL workbook I mentioned in my presentation? Please reach out via our [contact page](/contact) and I will send it to you.`,
  },
  {
    slug: "quantum-10-conference",
    title: "Quantum 10 Conference",
    date: "2020-12-08",
    image: "/images/q10words.png",
    content: `It is a pleasure to talk about the fundamentals of implementing UDL (Universal Design for Learning) in designing your class lessons. I hope that the workshops I presented were helpful for you to learn about how to use UDL and putting it to work in your class for empowering independent student learning!

The workbook I designed to go along with the class will be sent to you after reaching out via our [contact page](/contact).`,
  },
  {
    slug: "empowering-students-a-quick-video",
    title: "Empowering Students — A Quick Video",
    date: "2020-07-10",
    content: `Watch this video on empowering independent student learning:

<iframe title="Empowering Independent Student Learning" width="100%" height="400" src="https://videopress.com/embed/VO4T74MF?preloadContent=metadata&hd=1" frameBorder="0" allowFullScreen></iframe>`,
  },
  {
    slug: "edchange-global",
    title: "EdChange Global",
    date: "2020-07-10",
    image: "/images/golden-cogwheel.jpg",
    content: `Blending UDL and Scrum in the classroom is a powerful way to empower students and create truly student-centered learning environments.

If you attended the conference, thank you for joining the conversation! Please reach out via our [contact page](/contact) to receive the Unit/Lesson Planner.`,
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
