import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import mysql from "mysql2/promise";

const authServiceSecretKey =
  "tts13ztd9fl69u32hwdpeu8s7d3rdthmphtkx133z6yt6pu4k7oi4v";

const app = express();
const port = 5000;

const main = async () => {
  // Configuration of server
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "loginservice-test-db",
  });

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.post("/login", async (req, res) => {
    const { authToken } = req.body;

    const decodedToken = jwt.verify(authToken, authServiceSecretKey);

    // For type narrowing
    if (typeof decodedToken !== "object" || !("identity" in decodedToken))
      return res.status(400).send("Invalid token");

    const { email } = decodedToken.identity;

    const [emails] = await connection.execute(
      `
      SELECT * FROM emails
      WHERE email = ?
    `,
      [email]
    );

    if (Array.isArray(emails) && emails.length === 0) {
      return res.status(401).send({ message: "Unauthorized" });
    }

    return res.status(200).send({ email });
  });

  app.listen(port, () => console.log(`Server listening to port ${port}`));
};

main();
