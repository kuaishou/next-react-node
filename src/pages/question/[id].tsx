import QuestionInput from "@/components/QuestionComponents/QuestionInput"
import QuestionRadio from "@/components/QuestionComponents/QuestionRadio"

import styles from './Question.module.scss'
import PageWrapper from "@/components/PageWrapper"
import { getUqestionById } from "@/services/question"

type Iprops = {
    errno: number
    data?: {
        id: string
        title: string
        desc?: string
        js?: string
        css?: string
        isDeleted: boolean
        isPublished: boolean
        componentList: Array<any>
    }
    msg?: string
}
//http://localhost:3000/question/12132132 可以访问并获取到动态参数ID
function Question(props: Iprops) {
    const { errno, data, msg = '' } = props


    if (errno !== 0) {//错误
        return <PageWrapper title='错误'>
            <h1>错误{msg}</h1>
        </PageWrapper>

    }

    const { id, title = '', isDeleted, isPublished } = data || {}
    if (isDeleted) {//问卷被删除
        return <PageWrapper title='问卷被删除'>
            <h1>{title}</h1>
            <h2>该问卷被删除</h2>
        </PageWrapper>

    }

    if (!isPublished) {//问卷尚未发布
        return <PageWrapper title='问卷尚未发布'>
            <h1>{title}</h1>
            <h2>问卷尚未发布</h2>
        </PageWrapper>

    }


    return <PageWrapper title={title}>
        <h1>Question</h1>
        <form method="POST" action='/api/answer'>
            <input type="hidden" name="questionId" value={id} />
            <div className={styles.formWrapper}>
                <QuestionInput fe_id='c1' inputDetail={{ title: '您的姓名', placeholder: '请输入姓名' }}></QuestionInput>
            </div>
            <div className={styles.formWrapper}>
                <QuestionRadio fe_id='c2' RadioDetail={{
                    title: '您的性别',
                    option: [
                        { value: 'male', text: '男' },
                        { value: 'female', text: '女' }
                    ],
                    value: '',
                    isVertical: true
                }}></QuestionRadio>
            </div>

            <div className={styles.submit}>
                <button type="submit">提交</button>
            </div>
        </form>
    </PageWrapper>
}

export default Question
export async function getServerSideProps(context: any) {//Server-side-rendering 固定的函数名getServerSideProps
    //可以await异步请求
    const { id = '' } = context.params
    const data = getUqestionById(id)
    console.log('每次请求都会执行')//线上环境下，每次请求刷新不会执行

    return {
        props: data
    }
}
