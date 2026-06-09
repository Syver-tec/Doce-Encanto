const pool = require("../config/db");

exports.getMyOrders = async (req, res) => {
  try {
    const [orders] = await pool.query(
      `
      SELECT *
      FROM orders
      WHERE user_id = ?
      ORDER BY created_at DESC
      `,
      [req.user.id],
    );

    for (const order of orders) {
      const [items] = await pool.query(
        `
        SELECT
          product_name,
          quantity,
          price
        FROM order_items
        WHERE order_id = ?
        `,
        [order.id],
      );

      order.items = items;
    }

    res.json(orders);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

exports.createOrder = async (req, res) => {
  try {
    const { total, items } = req.body;

    const [result] = await pool.query(
      `
      INSERT INTO orders
      (
        user_id,
        total,
        status
      )
      VALUES
      (?, ?, ?)
      `,
      [req.user.id, total, "Em preparo"],
    );

    const orderId = result.insertId;

    for (const item of items) {
      await pool.query(
        `
        INSERT INTO order_items
        (
          order_id,
          product_name,
          quantity,
          price
        )
        VALUES
        (?, ?, ?, ?)
        `,
        [orderId, item.name, item.quantity, item.price],
      );
    }

    res.status(201).json({
      message: "Pedido criado",
      orderId,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

exports.cancelOrder = async (req, res) => {
  try {
    const { id } = req.params;

    const [orders] = await pool.query(
      `
      SELECT *
      FROM orders
      WHERE id = ?
      AND user_id = ?
      `,
      [id, req.user.id],
    );

    if (orders.length === 0) {
      return res.status(404).json({
        message: "Pedido não encontrado",
      });
    }

    const order = orders[0];

    if (order.status === "Cancelado") {
      return res.status(400).json({
        message: "Pedido já cancelado",
      });
    }

    await pool.query(
      `
      UPDATE orders
      SET status = ?
      WHERE id = ?
      `,
      ["Cancelado", id],
    );

    res.json({
      message: "Pedido cancelado com sucesso",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
};
