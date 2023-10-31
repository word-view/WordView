import { ErrorResponse, post } from "./client";

interface RegisterResponse {
  id: number;
  token: string;
}

export async function register(
  email: string,
  username: string,
  password: string
) {
  const response = await post(
    "/users",
    `{"email": "${email}","username": "${username}","password": "${password}"}`
  );

  const responseText = await response.text();

  if (response.status == 201) {
    return JSON.parse(responseText) as RegisterResponse;
  }

  return {
    status: response.status,
    message: responseText,
  } as ErrorResponse;
}
