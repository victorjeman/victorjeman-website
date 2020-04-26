export const ProjectDescription = ({ description }) => (
  <section className="c-project__description1">
    {description.map((description, index) => (
      <p key={index}>{description}</p>
    ))}
  </section>
);
