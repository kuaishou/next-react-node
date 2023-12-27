import QuestionInput from "./QuestionInput";
import QuestionRadio from "./QuestionRadio";
type CompontentInfoType = {
    fe_id: string
    type: string
    isHidden: boolean
    props: any
}


export const getComponent = (comp: CompontentInfoType) => {
    const { fe_id, type, isHidden, props } = comp

    if (isHidden) return null
    if (type === 'questionInput') {
        return <QuestionInput fe_id={fe_id} detail={props} />
    }
    if (type === 'questionRadio') {
        return <QuestionRadio fe_id={fe_id} detail={props} />
    }
}