import fs from 'fs';
import path from 'path';

import { ProjectThumbnail } from '../../components/ProjectThumbnail/ProjectThumbnail';

export default function Projects({ projectThumbnails }) {
  return (
    <section className="c-projects">
      <h2>Testimonials</h2>
      {projectThumbnails.map((thumbnail, index) => (
        <ProjectThumbnail key={index} {...thumbnail} />
      ))}
    </section>
  );
}

export async function getStaticProps() {
  const projectDirectory = path.join(process.cwd(), 'data/projects');
  const filenames = fs.readdirSync(projectDirectory);

  const projects = filenames.map((filename) => {
    const filePath = path.join(projectDirectory, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContent);
  });

  const projectThumbnails = projects.map((project) => ({
    title: project.title,
    href: project.href,
  }));

  return {
    props: {
      projectThumbnails,
    },
  };
}
