export async function register(
  email: string,
  username: string,
  password: string
) {
  try {
    const response = await fetch("http://192.168.1.104:8080/api/v1/users", {
      credentials: "omit",
      headers: {
        Accept: "*/*",
        "Accept-Language": "en-US,en;q=0.5",
        "Content-Type": "application/json",
      },
      body: `{"email": "${email}","username": "${username}","password": "${password}"}`,
      method: "POST",
      mode: "cors",
    });

    return response;
  } catch (err) {
    console.log(err);
  }
}
