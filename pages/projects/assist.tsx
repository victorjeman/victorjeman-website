import * as React from 'react';

import { IProject } from '@types';
import { ReadService } from '@services/Read/Read.service';
import { Project } from '@components/common/Project/Project';

interface Props {
  project: IProject;
}

export default function Assist({ project }: Props): JSX.Element {
  return <Project {...project} />;
}

export async function getStaticProps(): Promise<{ props: Props }> {
  return {
    props: {
      project: ReadService.readFile({ dataPath: 'data/projects/assist.json' }),
    },
  };
}
