function responseHelper(res, statusCode, success = false, data = null) {
  res.status(statusCode.status).json({
    success,
    message: statusCode.message,
    data,
  });
}

export default responseHelper;
