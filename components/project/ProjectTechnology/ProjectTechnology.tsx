import * as React from 'react';

interface Props {
  technology: string;
}

export const ProjectTechnology: React.FC<Props> = ({ technology }: Props): JSX.Element => (
  <div className="c-project-technology">Technology {technology}</div>
);
