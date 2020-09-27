interface IParams {
  selector: string;
}

export const scrollIntoView = ({ selector }: IParams): void => {
  const element: Element | null = document.querySelector(selector);

  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
