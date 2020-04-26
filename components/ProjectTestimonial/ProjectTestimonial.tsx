import ProjectTestimonialStyle from './ProjectTestimonial.style';

export const ProjectTestimonial = ({ illustration, alt, text, author }) => (
  <article className="c-project-testimonial">
    <img className="c-project-testimonial__illustration" src={illustration} alt={alt} />
    <p className="c-project-testimonial__author">{author}</p>
    <p className="c-project-testimonial__text">{text}</p>
    <style jsx>{ProjectTestimonialStyle}</style>
  </article>
);
