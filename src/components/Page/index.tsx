import React from 'react';
import { PageProps } from './types';

export const Page: React.FC<PageProps> = ({ title, children }) => {
  return (
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
  );
};

export default Page;
