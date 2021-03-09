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

export interface IProject {
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
  title: string;
  slug: string;
  published: string;
  updated?: string;
  thumbnail: string;
  hero: string;
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
  summary?: string;
  figma?: string;
  googledoc?: string;
  published?: string;
  version?: string;
  updated?: string;
  thumbnail?: string;
}
export interface IHomework {
  data: IHomeworkData;
  content: string;
  isEmpty?: boolean;
  excerpt?: string;
}

export interface IHomeworks {
  homeworks: IHomework[];
}

export interface IMeta {
  title: string;
  description: string;
  url: string;
  type: string;
  article: {
    publishedTime: string;
    modifiedTime: string;
    expirationTime: string;
    section: string;
    authors: string[];
    tags: string[];
  };
  images: [
    {
      url: string;
      width: number;
      height: number;
      alt: string;
    },
  ];
}

export interface IPostThumbnail {
  thumbnail: string;
  title: string;
  slug: string;
  type: 'blog' | 'tips';
  reading: { text: string };
}

export interface IHomeworkThumbnail {
  thumbnail: string;
  title: string;
  slug: string;
  summary: string;
}

export interface ISocials {
  shareUrl: string;
  title: string;
  sticky?: true;
}

export interface IPageIntro {
  pageTitle: string;
  pageDescription: string;
}
