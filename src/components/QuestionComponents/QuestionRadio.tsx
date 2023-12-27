
import styles from './QuestionInput.module.scss'
interface Ipops {
    fe_id: string,
    RadioDetail: {
        title: string,
        value?: string
        option: {
            value: string,
            text: string
        }[],
        isVertical?: boolean
    }

}
const QuestionRadio = (props: Ipops) => {
    const { fe_id, RadioDetail } = props

    return (
        <>
            <p>{RadioDetail.title}</p>
            <ul className={styles.list}>

                {
                    RadioDetail.option.map(item => {
                        let liClassName = RadioDetail.isVertical ? styles.verticalITem : styles.horizontalItem
                        return <li className={liClassName} key={item.value}>
                            <label >
                                <input type="radio" name={fe_id} value={item.value} defaultChecked={RadioDetail.value === item.value} />
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