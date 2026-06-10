const pool = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const [users] = await pool.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);

    if (users.length === 0) {
      return res.status(401).json({
        message: "Usuário não encontrado",
      });
    }

    const user = users[0];

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({
        message: "Senha inválida",
      });
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      },
    );

    res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        city: user.city,
        profile_image: user.profile_image,
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const hash = await bcrypt.hash(password, 10);

    await pool.query(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, hash],
    );

    res.status(201).json({
      message: "Usuário criado com sucesso",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.me = async (req, res) => {
  try {
    const [users] = await pool.query(
      `
        SELECT
          id,
          name,
          email,
          phone,
          city,
          profile_image
        FROM users
        WHERE id = ?
        `,
      [req.user.id],
    );

    if (users.length === 0) {
      return res.status(404).json({
        message: "Usuário não encontrado",
      });
    }

    res.json(users[0]);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { name, phone, city } = req.body;

    await pool.query(
      `
      UPDATE users
      SET
        name = ?,
        phone = ?,
        city = ?
      WHERE id = ?
      `,
      [name, phone, city, req.user.id],
    );

    res.json({
      message: "Perfil atualizado com sucesso",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

exports.uploadProfileImage = async (req, res) => {
  try {
    const imagePath =
      `http://localhost:5000/uploads/${req.file.filename}`;

    await pool.query(
      `
      UPDATE users
      SET profile_image = ?
      WHERE id = ?
      `,
      [imagePath, req.user.id]
    );

    res.json({
      image: imagePath,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
};