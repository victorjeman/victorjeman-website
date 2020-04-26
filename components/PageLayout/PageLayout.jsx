import { PageHeader } from '../PageHeader/PageHeader';
import { PageNavigation } from '../PageNavigation/PageNavigation';
import { PageFooter } from '../PageFooter/PageFooter';

export const PageLayout = ({ children }) => (
  <section className="c-page-layout">
    <PageHeader />
    <PageNavigation />

    {children}

    <PageFooter />
  </section>
);
