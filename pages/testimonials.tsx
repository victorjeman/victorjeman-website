import * as React from 'react';

import { MEDIA } from '@settings/media.settings';
import { FONT } from '@settings/font.settings';
import { COLOR } from '@settings/color.settings';

import { ITestimonials } from '@types';

import { ReadService } from '@services/Read/Read.service';

import { PageLayout } from '@components/common/PageLayout/PageLayout';
import { Testimonials } from '@components/testimonial/Testimonials/Testimonials';
import { TestimonialsIntro } from '@components/testimonial/TestimonialsIntro/TestimonialsIntro';

export default function TestimonialsPage({ testimonials }: ITestimonials): React.ReactNode {
  return (
    <PageLayout>
      <section className="c-page-testimonials">
        <TestimonialsIntro />
        <Testimonials testimonials={testimonials} />
      </section>

      <style jsx>
        {`
          .c-page-testimonials {
            padding-top: 30px;
            padding-bottom: 30px;
            position: relative;
          }
        `}
      </style>
    </PageLayout>
  );
}

export async function getStaticProps(): Promise<{ props: ITestimonials }> {
  const testimonials = ReadService.readFiles({ dataPath: 'data/testimonials' });

  return {
    props: {
      testimonials,
    },
  };
}
