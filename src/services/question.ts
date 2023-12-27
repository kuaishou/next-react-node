import { get } from './ajax'

//获取文具眼信息
export async function getUqestionById(id: string) {
    const url = `/api/question/${id}`
    const data = await get(url)
    return data

}