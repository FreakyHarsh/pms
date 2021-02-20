export const getStudentLogin = (email: string, password: string) => {
  return fetch(baseURL + '/students/login', {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => console.log(error))
}