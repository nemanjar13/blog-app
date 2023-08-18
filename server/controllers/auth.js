import { db } from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

export const login = (req, res) => {
  // check if user exists

  const query = "SELECT * FROM users WHERE username=?";
  db.query(query, [req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length === 0) return res.status(404).json("User not found.");

    // if no error and user exists - check password
    const isPasswordCorrect = bcrypt.compare(
      req.body.password,
      data[0].password
    );

    if (!isPasswordCorrect)
      return res.status(400).json("Wrong username or password");

    const token = jwt.sign({ id: data[0].id }, "jwtkey");
    const { password, ...other } = data[0];

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(other);
  });
};

export const logout = (req, res) => {};
