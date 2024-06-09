export const sleep = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay));

export function setCookie(cname: string, cvalue: string) {
  document.cookie = cname + "=" + cvalue + ";path=/";
}

export function getCookie(cname: string): string {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
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

export function formatDate(dateString: string): string {
  let d = new Date(dateString);
  return d.toLocaleDateString();
}