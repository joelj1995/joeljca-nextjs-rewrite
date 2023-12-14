
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

function setCookie(cname: string, cvalue: string) {
  document.cookie = cname + "=" + cvalue + ";path=/";
}

function getCookie(cname: string) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

if (typeof window !== 'undefined') setTheme(getStoredTheme() || 'light');