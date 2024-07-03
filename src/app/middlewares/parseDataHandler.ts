import { NextFunction, Request, Response } from "express"


export const parseDataHandler = (req:Request,res:Response,next:NextFunction) => {
 req.body=JSON.parse(req.body.data)
 next()
}

