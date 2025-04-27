import "../styles/die.css"

export function Die(props) {
    return (
        <button
            className={props.selected ? "selected" : ""}
            onClick={() => props.selectDie(props.id)}
        >{props.value}</button>
    )
}