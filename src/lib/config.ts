// Base path for GitHub Pages subfolder deployment
// e.g., "/alchie-portfolio-react-firebase" for repo-based GitHub Pages
export const BASE_PATH = '/alchie-portfolio-react-firebase';

// Helper to get the pathname without the base path
export function stripBase(pathname: string): string {
  return pathname.replace(BASE_PATH, '') || '/';
}
