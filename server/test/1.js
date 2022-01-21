const users = require("../data/users.json")

let page = 3
const userPerPage = 5

let result = []
// for (let i = 0; i < users.length; i++) {
//   if (i < page * userPerPage && i > page * userPerPage - userPerPage) {
//     result.push(users[i])
//   }
// }

result = users.slice(page * userPerPage - userPerPage, page * userPerPage)

console.log(result)
