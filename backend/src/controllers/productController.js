const pool = require("../config/db");

exports.getProducts = async (req, res) => {
  try {
    const [products] = await pool.query("SELECT * FROM products");

    res.json(products);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
};
