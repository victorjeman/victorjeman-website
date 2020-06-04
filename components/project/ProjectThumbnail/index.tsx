import * as React from 'react';

import ProjectThumbnailStyle from './ProjectThumbnail.style';

interface Props {
  title: string;
  href: string;
}

export const ProjectThumbnail: React.FC<Props> = ({ title, href }: Props) => (
  <article className="c-project-thumbnail">
    <h2>{title}</h2>

    <a href={href}>View Project</a>
    <style jsx>{ProjectThumbnailStyle}</style>
  </article>
);
