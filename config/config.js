const option = {
  mysql: {
    client: "mysql",
    connection: {
      host: "127.0.0.0",
      user: "root",
      password: "",
      database: "",
    },
  },
  sqlite: {
    client: "sqlite3",
    connection: {
      filename: "./db/",
    },
    useNullAsDefault: true,
  },
};

module.exports = { option };
