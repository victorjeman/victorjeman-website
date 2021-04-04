// @ts-nocheck
export const initDisqus = () => {
  (function () {
    // DON'T EDIT BELOW THIS LINE
    var d = document,
      s = d.createElement('script');
    s.src = 'https://victorjeman.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  })();
};
