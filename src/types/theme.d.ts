interface CSSVariables {
    '--accent': string;
    '--accent-dark': string;
    '--black': string;
    '--gray': string;
    '--gray-light': string;
    '--gray-dark': string;
    '--gray-gradient': string;
    '--box-shadow': string;
  }
  
  declare module 'astro' {
    interface AstroGlobal {
      theme: {
        variables: CSSVariables;
      };
    }
  }