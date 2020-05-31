import * as React from 'react';
interface Props {
  technology: string;
}

export const ProjectTechnology: React.FC<Props> = ({ technology }) => (
  <div className="c-project-technology">Technology</div>
);
