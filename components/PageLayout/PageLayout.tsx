import * as React from 'react';

import { PageHeader } from '../PageHeader/PageHeader';
import { PageNavigation } from '../PageNavigation/PageNavigation';
import { PageFooter } from '../PageFooter/PageFooter';
import PageLayoutStyle from './PageLayout.style';

export const PageLayout = ({ children }) => (
  <React.Fragment>
    <PageHeader />

    <PageNavigation />

    {children}

    <PageFooter />

    <style jsx>{PageLayoutStyle}</style>
  </React.Fragment>
);
