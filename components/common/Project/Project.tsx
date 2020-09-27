import * as React from 'react';

import { IProject } from '@types';

import { PageLayout } from '@components/common/PageLayout/PageLayout';
import { ProjectDescription } from '@components/project/ProjectDescription/ProjectDescription';
import { ProjectTestimonials } from '@components/project/ProjectTestimonials/ProjectTestimonials';

export function Project({ title, description, testimonials }: IProject): JSX.Element {
  return (
    <PageLayout>
      <h1>{title}</h1>

      <ProjectDescription description={description} />

      <ProjectTestimonials testimonials={testimonials} />
    </PageLayout>
  );
}
