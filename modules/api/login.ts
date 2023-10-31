import { ErrorResponse, post } from "./client";

interface LoginResponse {
  token: string;
}

export async function login(email: string, password: string) {
  const response = await post(
    "/users/login",
    `{"email": "${email}","password": "${password}"}`
  );

  const responseText = await response.text();

  if (response.status == 200) {
    return { token: responseText } as LoginResponse;
  }

  return {
    status: response.status,
    message: responseText,
  } as ErrorResponse;
}
