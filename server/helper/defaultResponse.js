function defaultResponse(code, model, msg) {
  return {
    message: msg,
    code,
    model,
  };
}

function successResponse(model, msg = "Success") {
  return defaultResponse(200, model, msg);
}

function errorResponse(model = null, code = 400, msg = "Error") {
  return defaultResponse(code, model, msg);
}

module.exports = { defaultResponse, successResponse, errorResponse };
