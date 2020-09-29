interface IParams {
  selector: string;
}

export const scrollIntoView = ({ selector }: IParams): void => {
  const element: Element | null = document.querySelector(selector);

  if (element) {
    // const viewportOffset = element.getBoundingClientRect();
    // these are relative to the viewport, i.e. the window

    // debugger;
    const top = element.offsetTop;
    // const left = viewportOffset.left;

    window.scroll({
      top,
      behavior: 'smooth',
    });
  }
};
