export default function authHeader() {
  // return authorization header with jwt token
  const user = JSON.parse(localStorage.getItem("user")); // bd from the browser

  if (user && user.accessToken) { // user and token exists 
    return { // return a header (in format)
      "auth-token": user.accessToken,
    };
  } else {
    return {};
  }
}
