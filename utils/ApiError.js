class ApiError extends Error {
    constructor(
        statusCode, 
        message = "Something went Wrong",
        error = [], 
        stack = ""
        ) {
        super(message);
        this.statusCode = statusCode;
        this.error = error;
        this.message = message;
        this.success = false;
        this.data = null;
        if(statck){
            this.stack = statck;
        }else{
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export default ApiError;