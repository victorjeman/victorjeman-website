export interface IProjectThumbnail {
  title: string;
  href: string;
}

export interface ILandingProject {
  index: number;
  isLast: boolean;
  title: string;
  role: string;
  illustration: string;
  duration: string;
  href: string;
  divider: string;
  description: string[];
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

export interface IProjectThumbnail {
  title: string;
  href: string;
}

export enum CardSpecialType {
  small = 'small',
  medium = 'medium',
  large = 'large',
  xlarge = 'xlarge',
}

export enum ISizeModifier {
  small = 'small',
  medium = 'medium',
  large = 'large',
  xlarge = 'xlarge',
}
