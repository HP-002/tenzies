import "../styles/die.css"

export function Die(props) {
    return (
        <button className={props.selected ? "selected" : ""}>{props.value}</button>
    )
}