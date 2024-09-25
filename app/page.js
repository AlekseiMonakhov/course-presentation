import Head from 'next/head'
import Image from 'next/image'
import styles from './styles.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Web Development Basics: From Zero to Your First Landing Page</title>
        <meta name="description" content="Web development course" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Web Development Basics: From Zero to Your First Landing Page
        </h1>

        <p className={styles.description}>
          The perfect starting point for anyone who wants to learn how to build simple web pages from scratch
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>What You Will Learn</h2>
            <ul>
              <li>Understand and write HTML code</li>
              <li>Style web pages using CSS</li>
              <li>Add interactivity to the website with JavaScript</li>
              <li>Work with Git and publish your projects on GitHub</li>
              <li>Apply basic UX/UI principles</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h2>Course Structure</h2>
            <ol>
              <li>Introduction to web development</li>
              <li>HTML — The Page Structure</li>
              <li>CSS — Styling the Page</li>
              <li>Introduction to JavaScript</li>
              <li>Git and Version Control</li>
              <li>UX/UI Basics for Landing Pages</li>
              <li>Publishing the Website</li>
            </ol>
          </div>

          <div className={styles.card}>
            <h2>Who Is This Course For</h2>
            <ul>
              <li>Beginners with no programming experience</li>
              <li>Anyone who wants to quickly gain skills in creating simple websites</li>
              <li>Those who want to learn how to work with modern web technologies and tools</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h2>Duration and Format</h2>
            <p>The course duration is approximately 4 weeks. Each lesson lasts 1–1.5 hours.</p>
            <p>After each module, students are given 2–3 days to complete homework and dive deeper into the material.</p>
          </div>
        </div>

        <div className={styles.instructor}>
          <h2>About the Instructor</h2>
          <div className={styles.instructorProfile}>
            <Image src="/ava_link.jpg" alt="Aleksei Monakhov" width={150} height={150} className={styles.instructorImage} />
            <div className={styles.instructorInfo}>
              <h3>Aleksei Monakhov</h3>
              <p>Senior Full-Stack Software Engineer</p>
              <p>A Senior Software Developer with extensive experience in full-cycle web development, covering frontend, backend, databases, testing, deployment, and infrastructure. Has successfully worked with companies and projects across Russia, Europe, and the United States.</p>
              <p>Specializes in developing software for the crypto and banking sectors, web development, architecture solutions and system design. Currently specializes in AI integration and working with large language models.</p>
              <h4>Stack</h4>
              <ul>
                <li>Frontend: HTML, CSS, JavaScript, TypeScript, React, Next.js, Vue, Redux, Zustand, Webpack etc.</li>
                <li>Backend: Python, Node.js, TypeScript, Go, PHP, Express, NestJS, PostgreSQL, MongoDB, Docker, Kubernetes, Redis, Kafka, GraphQL, REST, RabbitMQ etc.</li>
              </ul>
              <h4>Education</h4>
              <ul>
                <li>Military-Technical University of the Federal Service of Specialized Construction of Russian Federation, Moscow, Russian Federation (2012)</li>
                <li>ITMO University, Saint-Petersburg, Russian Federation - Development of web pages, digital/multimedia materials and information resources (2022)</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Enroll in the course
        </a>
      </footer>
    </div>
  )
}