
import styles from './QuestionInput.module.scss'
interface Ipops {
    fe_id: string,
    inputDetail: {
        title: string,
        placeholder: string
    }

}
const QuestionInput = (props: Ipops) => {
    const { fe_id, inputDetail } = props

    return (
        <>
            <p>{inputDetail.title}</p>
            <div className={styles.inputWarp}>
                <input name={fe_id} placeholder={inputDetail.placeholder} type="text" />
            </div>
        </>
    )
}
export default QuestionInput