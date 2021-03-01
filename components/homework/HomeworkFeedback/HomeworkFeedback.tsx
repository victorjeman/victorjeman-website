import * as React from 'react';

export const HomeworkFeedback = (): JSX.Element => {
  return (
    <section className="c-labs-feedback" id="help-me-to-help-you">
      <h2 className="c-labs-feedback__title">Help me to help you!</h2>

      <p className="c-labs-feedback__intro">
        Before releasing my next labs, I would like to learn more about how to enhance them so that
        they would bring you the value you need.
      </p>

      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSe7XKgsgIOJJ0tIRctzgcsDO9zNuK9Oi7_8mTprL995MgYHfw/viewform?embedded=true"
        height="1631"
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
      >
        Loading…
      </iframe>
    </section>
  );
};
