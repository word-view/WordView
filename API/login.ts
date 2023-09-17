const API_URL = "https://localhost:8443/api/v1";

export async function login(username: string, email: string, password: string) {
        const response = await fetch(API_URL + "/users/", {
                method: "POST",
                headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                },
                body: JSON.stringify({
                        username: username,
                        email: email,
                        password: password,
                }),
        });

        if (response.status == 201) {
                return await response.json();
        }
}
