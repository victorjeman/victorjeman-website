import * as React from 'react';
interface Props {
  description: string;
}

export const ProjectTechnology: React.FC<Props> = ({ technology }) => (
  <div className="c-project-technology">Technology</div>
);
