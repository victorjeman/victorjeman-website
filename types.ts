export interface IHome {
  landingProjects: Array<any>;
}

export interface IProjects {
  projectThumbnails: Array<any>;
}

export interface IProject {
  id: number;
  href: number;
  title: string;
  duration: string;
  description1: string[];
  description2: string[];
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
