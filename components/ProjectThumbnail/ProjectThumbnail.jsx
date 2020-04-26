export const ProjectThumbnail = ({ title, href }) => (
  <article className="c-project-thumbnail">
    <h2>{title}</h2>

    <a href={href}>View Project</a>
  </article>
);
