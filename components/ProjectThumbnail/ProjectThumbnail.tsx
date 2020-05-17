import * as React from 'react';

interface Props {
  title: string;
  href: string;
}

export const ProjectThumbnail: React.FC<Props> = ({ title, href }) => (
  <article className="c-project-thumbnail">
    <h2>{title}</h2>

    <a href={href}>View Project</a>
  </article>
);
