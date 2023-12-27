import { postAnswer } from "@/services/answer";
import { NextApiRequest, NextApiResponse } from "next";

const answerList: any = []
const getAnswerInfo = (requestBoday: any) => {
    Object.keys(requestBoday).forEach(key => {
        if (key === 'questionId') return
        answerList.push({
            componentId: key,
            value: requestBoday[key]
        })
    })

    return {
        questionId: requestBoday.questionId || '',
        answerList
    }
}


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        res.status(200).json({ errno: -1, message: 'menthod 错误' })
    }

    const answerInfo = getAnswerInfo(req.body)
    console.log('menthod', answerInfo)
    try {
        //提交到服务端、数据库等

        const resData = await postAnswer(answerInfo)
        if (resData.errno === 0) {
            //提交成功
            res.redirect('/success')
        } else {

            //提交失败
            res.redirect('/fail')
        }



    } catch (err) {
        res.redirect('/fail')
    }
    // res.status(200).json({ name: '邢浩东' })

}

// http://localhost:3000/api/hello  可以访问接口