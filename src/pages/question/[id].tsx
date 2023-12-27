import QuestionInput from "@/components/QuestionComponents/QuestionInput"
import QuestionRadio from "@/components/QuestionComponents/QuestionRadio"

import styles from './Question.module.scss'

type Iprops = {
    id: string
}
//http://localhost:3000/question/12132132 可以访问并获取到动态参数ID
function Question(props: Iprops) {
    const { id: questionId } = props
    return <div>
        <h1>Question</h1>
        <h2>{props.id}</h2>
        <form method="POST" action='/api/answer'>
            <input type="hidden" name="questionId" value={questionId} />
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
    </div>
}

export default Question
export async function getServerSideProps(context: any) {//Server-side-rendering 固定的函数名getServerSideProps
    //可以await异步请求
    const { id = '' } = context.params

    console.log('每次请求都会执行')//线上环境下，每次请求刷新不会执行

    return {
        props: {
            id
        }
    }
}
