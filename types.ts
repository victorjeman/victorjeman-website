export enum ISizeModifier {
  small = 'small',
  medium = 'medium',
  large = 'large',
  xlarge = 'xlarge',
}

export interface ITestimonial {
  authorName: string;
  authorJob: string;
  authorCompany: string;
  authorLinkedin: string;
  content: string[];
}

export interface ITestimonials {
  testimonials: ITestimonial[];
}

export interface IProjectThumbnail {
  title: string;
  href: string;
}

export interface ILandingProject {
  index: number;
  title: string;
  role: string;
  investigate: boolean;
  illustration: string;
  duration: string;
  href: string;
  divider: string;
  description: string[];
  technologies: string[];
}

export interface IProject {
  id: number;
  href: number;
  title: string;
  duration: string;
  description: string[];
  technologies: string[];
  illustration: string;
  testimonials: [
    {
      illustration: string;
      alt: string;
      text: string;
      author: string;
    },
  ];
}
