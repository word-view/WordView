type Listing = { original: string; normalized: string };

let errors: Listing[] = [
  {
    original: "RequestValidation: email is invalid",
    normalized: "Email inválido!",
  },

  {
    original: "ValueTakenException: ",
    normalized: "Já existe uma conta usando este email!",
  },

  {
    original: "IncorrectCredentials: Credentials did not match",
    normalized: "Email ou senha inválidos!",
  },

  {
    original: "NoSuchEntry: No entries found with email:",
    normalized: "Nenhuma conta esta associada com esse email!",
  },
];

export function normalizeError(message: string) {
  for (const error of errors) {
    if (message.startsWith(error.original)) return error.normalized;
  }

  return message;
}
