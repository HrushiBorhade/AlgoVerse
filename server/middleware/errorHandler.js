const constants = require("../constants");
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  console.log("❗️" + err.message);

  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({ title: "VALIDATION_FAILED", message: err.message });
      break;
    case constants.UNAUTHORISED:
      res.json({ title: "UNAUTHORISED", message: err.message });
      break;
    case constants.FORBIDDEN:
      res.json({ title: "FORBIDDEN", message: err.message });
      break;
    case constants.NOT_FOUND:
      res.json({ title: "NOT_FOUND", message: err.message });
      break;
    case constants.SERVER_ERROR:
      res.json({ title: "SERVER ERROR", message: err.message });
      break;
    default:
      console.log("No error found");
  }
};
module.exports = errorHandler;
