import React from 'react';
import { PageProps } from './types';
import { PageContainer } from './styled';

export const Page: React.FC<PageProps> = ({ title, children }) => {
  return (
    <PageContainer>
      <div className="page">
        <header>
          <h1>{title}</h1>
        </header>
        <main>
          {children}
        </main>
        <footer>
          <p>&copy; {new Date().getFullYear()} My React Library</p>
        </footer>
      </div>
    </PageContainer>
  );
};

export default Page;
