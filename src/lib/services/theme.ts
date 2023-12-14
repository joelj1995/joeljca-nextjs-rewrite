import { getCookie, setCookie } from "../lib";

export function getTheme(): string | null {
  if (typeof window === 'undefined') {
    return null;
  };
  return getStoredTheme();
}

export function setTheme(theme: string): void {
  if (typeof window === 'undefined') return;
  setStoredTheme(theme);
  document.documentElement.setAttribute('data-bs-theme', theme);
}

const getStoredTheme = () => getCookie('theme');
const setStoredTheme = (theme: string) => {
  setCookie('theme', theme);
};



if (typeof window !== 'undefined') setTheme(getStoredTheme() || 'light');