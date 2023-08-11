import { createTranslationsContext } from 'react-text-localizer';

const translationsContext = createTranslationsContext({
  us: import('./us.json'),
  gm: import('./gm.json'),
  
});

export { translationsContext };
