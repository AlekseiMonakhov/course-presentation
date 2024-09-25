import Head from 'next/head'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Web Development Basics: From Zero to Your First Landing Page</title>
        <meta name="description" content="Web development course" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.nav}>
        <ul>
          <li><a href="#intro">Home</a></li>
          <li><a href="#learn">What You'll Learn</a></li>
          <li><a href="#structure">Course Structure</a></li>
          <li><a href="#audience">Who It's For</a></li>
          <li><a href="#duration">Duration</a></li>
          <li><a href="#instructor">Instructor</a></li>
        </ul>
      </nav>

      <section id="intro" className={styles.intro}>
        <h1 className={styles.title}>
          Web Development Basics: From Zero to Your First Landing Page
        </h1>
        <p className={styles.description}>
          The perfect starting point for anyone who wants to learn how to build simple web pages from scratch
        </p>
        <a href="#" className={styles.cta}>Enroll in the course</a>
      </section>

      <section id="learn" className={styles.section}>
        <h2>What You Will Learn</h2>
        <ul className={styles.list}>
          <li>Understand and write HTML code</li>
          <li>Style web pages using CSS</li>
          <li>Add interactivity to the website with JavaScript</li>
          <li>Work with Git and publish your projects on GitHub</li>
          <li>Apply basic UX/UI principles</li>
        </ul>
      </section>

      <section id="structure" className={styles.section}>
        <h2>Course Structure</h2>
        <ol className={styles.list}>
          <li>
            <h3>Module 1: Introduction</h3>
            <ul>
              <li>What is web development?</li>
              <li>The main technologies: HTML, CSS, JavaScript</li>
              <li>Setting up a text editor (e.g., VSCode)</li>
              <li>Introduction to browser developer tools and console</li>
            </ul>
          </li>
          <li>
            <h3>Module 2: HTML — The Page Structure</h3>
            <ul>
              <li>Basic tags and HTML document structure</li>
              <li>Tags for text, images, links, and lists</li>
              <li>Semantic tags and their roles</li>
              <li>Building a simple page structure</li>
            </ul>
          </li>
          <li>
            <h3>Module 3: CSS — Styling the Page</h3>
            <ul>
              <li>Connecting CSS to HTML</li>
              <li>Basic selectors and properties</li>
              <li>Working with colors, fonts, and spacing</li>
              <li>Box model and working with elements (margin, padding, border)</li>
              <li>Flexbox and Grid for layout building</li>
              <li>Styling the landing page</li>
            </ul>
          </li>
          <li>
            <h3>Module 4: Introduction to JavaScript</h3>
            <ul>
              <li>Basic JavaScript syntax</li>
              <li>Built-in methods for interacting with page elements (DOM)</li>
              <li>Event listeners</li>
              <li>Adding simple interactivity: animations, changing styles with JS</li>
            </ul>
          </li>
          <li>
            <h3>Module 5: Git and Version Control</h3>
            <ul>
              <li>Introduction to Git</li>
              <li>Basic commands (init, add, commit, push)</li>
              <li>Creating a GitHub repository and uploading a project</li>
            </ul>
          </li>
          <li>
            <h3>Module 6: UX/UI Basics for Landing Pages</h3>
            <ul>
              <li>Introduction to usability basics</li>
              <li>Choosing fonts and colors for the site</li>
              <li>Layout principles (spacing, visual hierarchy)</li>
            </ul>
          </li>
          <li>
            <h3>Module 7: Publishing the Website</h3>
            <ul>
              <li>Running the site locally</li>
              <li>Free ways to publish (GitHub Pages)</li>
            </ul>
          </li>
        </ol>
      </section>

      <section id="audience" className={styles.section}>
        <h2>Who Is This Course For</h2>
        <ul className={styles.list}>
          <li>Beginners with no programming experience</li>
          <li>Anyone who wants to quickly gain skills in creating simple websites</li>
          <li>Those who want to learn how to work with modern web technologies and tools</li>
        </ul>
      </section>

      <section id="duration" className={styles.section}>
        <h2>Duration and Format</h2>
        <p>The course duration is approximately 4 weeks. Each lesson lasts 1–1.5 hours.</p>
        <p>After each module, students are given 2–3 days to complete homework and dive deeper into the material.</p>
      </section>

      <section id="instructor" className={`${styles.section} ${styles.instructor}`}>
        <h2>About the Instructor</h2>
        <div className={styles.instructorProfile}>
          <Image src="/ava_link.jpg" alt="Aleksei Monakhov" width={300} height={300} className={styles.instructorImage} />
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
      </section>

      <footer className={styles.footer}>
        <a href="#" className={styles.cta}>Enroll in the course</a>
      </footer>
    </div>
  )
}