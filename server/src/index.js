const express = require("express")
const app = express()
const port = 3001
var cors = require("cors")

const users = require("../data/users.json")

app.use(cors())

app.get("/users", (req, res) => {
  let page = req.query.page
  // page = page - 1
  const userPerPage = req.query.userPerPage
  console.log("page", page)
  console.log("userPerPage", userPerPage)
  result = users.slice(page * userPerPage - userPerPage, page * userPerPage)

  res.send(result)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
