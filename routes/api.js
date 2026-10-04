const express = require("express");
const router = express.Router();
const checkAge = require("../middleware/checkAge");

router.get("/info", checkAge, (req, res) => {
  const { name, age } = req.query;

  if (!name || name.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "Thiếu tham số 'name' trong Query String.",
    });
  }

  return res.status(200).json({
    success: true,
    message: "Lấy thông tin thành công!",
    data: {
      name: name.trim(),
      age: parseInt(age),
    },
  });
});

module.exports = router;
