const express = require("express")
const app = express()
const port = 3001
var cors = require("cors")
const { auth, requiresAuth } = require("express-openid-connect")
require("dotenv").config()

console.log("process.env.ISSUER_BASE_URL", process.env.ISSUER_BASE_URL)

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: "a long, randomly-generated string stored in env",
  baseURL: "http://localhost:3001",
  clientID: "8FA7CvaocDfWkc5wMlRJQZqcG09CgP6c",
  issuerBaseURL: "https://quigonjinn.us.auth0.com",
}

const users = require("../data/users.json")

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config))

app.use(cors())

// req.isAuthenticated is provided from the auth router
app.get("/", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out")
})

app.get("/profile", requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user))
})

// app.get("/users", requiresAuth(), (req, res) => {
app.get("/users", (req, res) => {
  let page = req.query.page
  // page = page - 1
  console.log(users)
  const userPerPage = req.query.userPerPage
  console.log("page", page)
  console.log("userPerPage", userPerPage)
  result = users.slice(page * userPerPage - userPerPage, page * userPerPage)

  res.send(result)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
