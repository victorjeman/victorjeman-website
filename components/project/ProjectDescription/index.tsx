import * as React from 'react';
interface Props {
  description: string[];
}

export const ProjectDescription: React.FC<Props> = ({ description }) => (
  <section className="c-project__description1">
    {description.map((description, index) => (
      <p key={index}>{description}</p>
    ))}
  </section>
);
