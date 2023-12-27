
import styles from './QuestionInput.module.scss'
interface Ipops {
    fe_id: string,
    detail: {
        title: string,
        placeholder: string
    }

}
const QuestionInput = (props: Ipops) => {
    const { fe_id, detail } = props

    return (
        <>
            <p>{detail.title}</p>
            <div className={styles.inputWarp}>
                <input name={fe_id} placeholder={detail.placeholder} type="text" />
            </div>
        </>
    )
}
export default QuestionInput