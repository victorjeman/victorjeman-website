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

export interface IPostData {
  title?: string;
  slug?: string;
}

export interface IPost {
  data: IPostData;
  content: string;
  isEmpty?: boolean;
  excerpt?: string;
}

export interface IPosts {
  posts: IPost[];
}

export interface IHomeworkData {
  title?: string;
  slug?: string;
}
export interface IHomework {
  data: IHomeworkData;
  content: string;
  isEmpty?: boolean;
  excerpt?: string;
}
