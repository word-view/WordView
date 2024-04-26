export const API_URL_DEV = 'http://localhost:8080/api/v1';
export const API_URL_PROD = 'https://wordview.cc/api/v1';

export async function post(url: string, body: string) {
  return await fetch(API_URL_DEV + url, {
    method: 'POST',
    credentials: 'omit',
    mode: 'cors',
    headers: {
      Accept: '*/*',
      'Accept-Language': 'en-US,en;q=0.5',
      'Content-Type': 'application/json',
    },
    body: body,
  });
}

export async function get(url: string) {
  return await fetch(API_URL_DEV + url);
}
