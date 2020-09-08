https://gabrieltanner.org/blog/nestjs-graphqlserver
https://habr.com/ru/post/462585/
https://medium.com/@brandon.lau86/one-to-many-relationships-with-mongodb-and-mongoose-in-node-express-d5c9d23d93c2
https://wanago.io/2020/05/18/api-nestjs-postgresql-typeorm/


{
  getUsers {
    id,
    name,
    lastName,
    friends {
      name
    }
  }
}

mutation {
  createUser (input: { name: "name6", firstName: "test", lastName: "test", gender: "male", friends: [
  "5f5501a34799353906c123d8"]}) {
    name
  }
}

{
  getUser(id: "5f51f99add0d7417690a1568") {
    id,
    name,
    lastName
  }
}

mutation {
  deleteUser(id: "5f51f99add0d7417690a1568")
}

mutation {
  updateUser (id: "5f55b249c8ce384b67d4ace6", input: { name: "name8", firstName: "test", lastName: "test", gender: "male", friends: [
  "5f5501a34799353906c123d8"]}) {
    name
  }
}

{
  getGroups {
    id,
    name
  }
}

mutation {
  createGroup (input: { name: "group1"}) {
    name
  }
}