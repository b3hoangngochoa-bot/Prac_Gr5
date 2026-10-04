const checkAge = (req, res, next) => {
  const age = parseInt(req.query.age);
  if (req.query.age === undefined || req.query.age === "") {
    return res.status(400).json({
      success: false,
      message: "Thiếu tham số 'age' trong Query String.",
    });
  }

  if (isNaN(age)) {
    return res.status(400).json({
      success: false,
      message: "'age' phải là một số nguyên hợp lệ.",
    });
  }

  if (age < 18) {
    return res.status(403).json({
      success: false,
      message: `Truy cập bị từ chối. Tuổi của bạn (${age}) nhỏ hơn 18.`,
    });
  }
  next();
};

module.exports = checkAge;
