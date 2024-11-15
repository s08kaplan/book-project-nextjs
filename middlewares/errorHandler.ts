import { NextApiRequest, NextApiResponse } from "next";

type HandlerFunction = (req: NextApiRequest, res: NextApiResponse) => Promise<void>;

export const errorHandler = (handler: HandlerFunction) => async ( req: NextApiRequest, res: NextApiResponse ) => {
    try {
        await handler(req,res)
    } catch (error) {
        res.status(500).json({
        error:(error as Error).message,
        body: req.body, 
        })
    }

}