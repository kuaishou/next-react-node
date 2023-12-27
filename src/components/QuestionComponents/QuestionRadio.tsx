
import styles from './QuestionInput.module.scss'
interface Ipops {
    fe_id: string,
    detail: {
        title: string,
        value?: string
        options: {
            value: string,
            text: string
        }[],
        isVertical?: boolean
    }

}
const QuestionRadio = (props: Ipops) => {
    const { fe_id, detail } = props

    return (
        <>
            <p>{detail.title}</p>
            <ul className={styles.list}>

                {
                    detail.options.map(item => {
                        let liClassName = detail.isVertical ? styles.verticalITem : styles.horizontalItem
                        return <li className={liClassName} key={item.value}>
                            <label >
                                <input type="radio" name={fe_id} value={item.value} defaultChecked={detail.value === item.value} />
                                {item.text}
                            </label>
                        </li>
                    })
                }
            </ul>
        </>
    )
}
export default QuestionRadio