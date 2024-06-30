import { ErrorRequestHandler } from "express";

export const globalErrorHandler:ErrorRequestHandler=async (error,req,res,next) => {
    const statusCode=500;
    const message=error?.message || "Something Wrong";

    return res.status(statusCode).json({
        status:false,
        message:message,
        errorMessage:error,
    })
}