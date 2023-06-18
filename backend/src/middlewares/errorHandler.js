const errorHandlerMiddleware = (err, _req, res, _next) => {
    const { message, statusCode } = err;
    res.status(statusCode || 500).json({ message });
  };
  
  module.exports = errorHandlerMiddleware;