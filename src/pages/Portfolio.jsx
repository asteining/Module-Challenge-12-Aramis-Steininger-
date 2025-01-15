import Project from "/src/components/Project";
import "/styles/portfolio.css"; // Ensure the CSS is imported

const Portfolio = () => (
  <section>
    <h2>Portfolio</h2>
    <div className="project-grid">
      <Project
        title="Small Business Website"
        image="/src/assets/smallbiz.jpg"
        deployedLink="https://project1.com"
        githubLink="https://github.com/user/project1"
      />
      <Project
        title="AI Model"
        image="/src/assets/model.webp"
        deployedLink="https://project2.com"
        githubLink="https://github.com/user/project2"
      />
      <Project
        title="E-commerce Platform"
        image="/src/assets/ecommerce.jpg"
        deployedLink="https://project3.com"
        githubLink="https://github.com/user/project3"
      />
    </div>
  </section>
);

export default Portfolio;
