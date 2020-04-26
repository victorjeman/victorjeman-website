import { PageHeader } from '../PageHeader/PageHeader';
import { PageNavigation } from '../PageNavigation/PageNavigation';
import { PageFooter } from '../PageFooter/PageFooter';

export const PageLayout = ({ children }) => (
  <React.Fragment>
    <PageHeader />
    <PageNavigation />

    {children}

    <PageFooter />
  </React.Fragment>
);
