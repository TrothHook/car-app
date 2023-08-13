class ResponseService {
  sent(res, code, data = [], message = null) {
    switch (code) {
      case 200:
        res.status(code).json({
          success: true,
          message: message ? message : "Success",
          data,
        });
        break;
      case 201:
        res.status(code).json({
          success: true,
          message: message ? message : "Created",
          data,
        });
        break;
      case 400:
        res.status(code).json({
          success: false,
          message: message ? message : "Bad Request",
        });
        break;
      case 401:
        res.status(code).json({
          success: false,
          message: message ? message : "Unauthorized",
        });
        break;
      case 403:
        res.status(code).json({
          success: false,
          message: message ? message : "Forbidden",
        });
        break;
      case 404:
        res.status(code).json({
          success: false,
          message: message ? message : "Not Found",
        });
        break;
      case 409:
        res.status(code).json({
          success: false,
          message: message ? message : "Duplicate data found",
        });
        break;
      case 500:
        res.status(code).json({
          success: false,
          message: message ? message : "Internal Server Error",
        });
        break;
      case 503:
        res.status(code).json({
          success: false,
          message: message ? message : "Service Unavailable",
        });
        break;
      default:
        res.status(500).json({
          success: false,
          message: "Someting went wrong",
        });
        break;
    }
  }
}

module.exports = ResponseService;
