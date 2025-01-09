const Project = ({ title, image, appLink, repoLink }) => (
    <div className="project">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>
        <a href={appLink}>Live App</a> | <a href={repoLink}>GitHub Repo</a>
      </p>
    </div>
  );
  
  export default Project;
  