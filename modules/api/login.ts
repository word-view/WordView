import { client } from './client';

export async function login(email: string, password: string) {
  const request = client('dev');
  const response = await request.post('/users/login', {
    email: email,
    password: password,
  });

  return response;
}
