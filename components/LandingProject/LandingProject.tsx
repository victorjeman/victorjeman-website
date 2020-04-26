import LandingProjectStyle from './LandingProject.style';

export const LandingProject = ({ illustration, title, duration, href }) => (
  <section className="c-landing-project">
    <img className="c-landing-project__ilustration" src={illustration} alt="" />
    <h2 className="c-landing-project__title">{title}</h2>
    <p className="c-landing-project__duration">{duration}</p>
    <a className="c-landing-project__see-more" href={href}>
      See more
    </a>

    <style jsx>{LandingProjectStyle}</style>
  </section>
);
