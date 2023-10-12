import { client } from './client';

export async function register(
  email: string,
  username: string,
  password: string
) {
  const request = client('dev');
  const response = await request.post('/users/', {
    email: email,
    username: username,
    password: password,
  });

  return response;
}
