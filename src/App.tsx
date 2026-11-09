import { useEffect } from "react";
import { profile, interests, projects } from "./data";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function App() {
  // Reveal sections when they enter the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const revealElements = document.querySelectorAll(".reveal");

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  // Contact information
  const contact = [
    ...(profile.email
      ? [
          {
            label: "Email",
            value: profile.email,
            href: `mailto:${profile.email}`,
          },
        ]
      : []),

    ...profile.links.map((link) => ({
      label: link.label,
      value: link.href.replace("https://", ""),
      href: link.href,
    })),
  ];

  // Social media configuration
  const socialIcons = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      href: "https://github.com/vishnuprasad06",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      href: "https://linkedin.com/in/vishnuprasad-kj",
    },
    {
      name: "Gmail",
      icon: <SiGmail />,
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=vishnuprasad70436@gmail.com",
    },
  ];

  return (
    <>
      {/* Navigation */}
      <nav className="nav" aria-label="Primary navigation">
        <a href="">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Personal Logo */}
      <a href="/" className="corner-logo" aria-label="Return to homepage">
        <b>VP.</b>
      </a>

      <main id="top">
        {/* Hero Section */}
        <header className="hero wrap">
          <h1>{profile.name}</h1>

          <p className="tagline">
            <b className="typing-text">{profile.tagline}</b>
          </p>

          <p className="role">{profile.role}</p>
        </header>

        {/* About Section */}
        <section id="about" className="wrap block reveal">
          <h2>
            LET ME <span className="highlight-word">INTRODUCE</span> MYSELF
          </h2>

          <div className="bento">
            <div className="bio">
              <p>
                I'm a Computer Science & Engineering student at SSIT, Tumakuru.
                I learn by building: I pick a concept, turn it into a working
                project, and keep improving it. I'm drawn to{" "}
                <span className="tech-highlight">
                  AI and machine learning
                </span>
                ,{" "}
                <span className="tech-highlight">
                  full-stack web development
                </span>
                , and the{" "}
                <span className="tech-highlight">
                  data structures and algorithms
                </span>{" "}
                underneath both.
              </p>
            </div>

            {interests.map((interest) => (
              <article className="card" key={interest.title}>
                <h3>{interest.title}</h3>
                <p>{interest.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="wrap block reveal">
          <h2>Projects</h2>

          {projects.map((project) => (
            <article className="project" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.text}</p>

              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              {project.href && (
                <a
                  className="btn"
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              )}
            </article>
          ))}
        </section>

        {/* Contact and Social Media Section */}
        <section id="contact" className="wrap block reveal">
          <div className="contact-heading">
            <h2>Find Me On</h2>
            <p>Feel free to connect with me.</p>
          </div>

          {/* Social Media Icons */}
          <div className="social-icons">
            {socialIcons.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                title={social.name}
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>

        
        </section>
      </main>

      {/* Footer */}
      <footer>
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>

        <p className="footer-credit">
          Designed & Developed by <b>Vishnu Prasad K J</b>
        </p>
      </footer>
    </>
  );
}