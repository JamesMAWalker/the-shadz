import React, { createContext, useState } from 'react';

export const SectionContext = createContext();

export function SectionProvider({ children }) {
  const sections = ['landing', 'shop', 'single', 'insta', 'collections', 'blog'];
  
  const [currSection, setCurrSection] = useState(sections[0]);

  const changeContent = (section) => setCurrSection(sections[section]); 

  return (
    <SectionContext.Provider
      value={{ currSection, changeContent }}
    >
      {children}
    </SectionContext.Provider>
  );
}


