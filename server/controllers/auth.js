import { db } from "../db.js";
import bcrypt from "bcrypt";

export const register = (req, res) => {
  // check if user already exists
  const query = "SELECT * FROM users WHERE email=? OR username=?";
  db.query(query, [req.body.email, req.body.username], (err, data) => {
    // if encounter error with the query
    if (err) return res.json(err);

    // if user already exists
    if (data.length) return res.status(409).json("User already exists");

    // if all is good, proceed with registration
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const query =
      "INSERT INTO users(`username`, `email`, `password`) VALUES (?)";
    const values = [req.body.username, req.body.email, hash];

    db.query(query, [values], (err, data) => {
      if (err) return res.json(err);

      return res.status(200).json("User has been created");
    });
  });
};

export const login = (req, res) => {};

export const logout = (req, res) => {};
