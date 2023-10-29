export async function login(email: string, password: string) {
  try {
    const response = await fetch(
      "http://192.168.1.104:8080/api/v1/users/login",
      {
        credentials: "omit",
        headers: {
          Accept: "*/*",
          "Accept-Language": "en-US,en;q=0.5",
          "Content-Type": "application/json",
        },
        body: `{"email": "${email}","password": "${password}"}`,
        method: "POST",
        mode: "cors",
      }
    );

    return response;
  } catch (err) {
    console.log(err);
  }
}
