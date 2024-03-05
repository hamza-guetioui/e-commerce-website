const formatResponse = (status, message, data = null) => ({ status, message, data });

module.exports = {
  success: (message, data = null) => formatResponse('success', message, data),
  error: (message, data = null) => formatResponse('error', message, data),
};