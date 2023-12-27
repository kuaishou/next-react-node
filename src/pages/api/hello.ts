import { NextApiRequest, NextApiResponse } from "next";

type Data = {
    name: string
}
export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    console.log('menthod', req.method)
    res.status(200).json({ name: '邢浩东' })

}

// http://localhost:3000/api/hello  可以访问接口