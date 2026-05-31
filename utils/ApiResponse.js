class ApiResponse {
    constructor(statusCode, message = "success", data) {
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
        tihs.success = statusCode >= 200 && statusCode < 300;
    }   
}