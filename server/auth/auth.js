const { auth } = require("express-openid-connect")

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: "a long, randomly-generated string stored in env",
  baseURL: "http://localhost:3001",
  clientID: "8FA7CvaocDfWkc5wMlRJQZqcG09CgP6c",
  issuerBaseURL: "https://quigonjinn.us.auth0.com",
}

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config))

// req.isAuthenticated is provided from the auth router
app.get("/", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out")
})
