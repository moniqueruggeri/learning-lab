import "./Buttons.sass"

const Buttons = ({size, text, type, onClick}) => {
    return(
        <button className={`button ${size} ${type}`} onClick={onClick}>
            {text}
        </button>
    )
}

export default Buttons