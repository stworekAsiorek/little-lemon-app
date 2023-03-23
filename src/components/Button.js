import './Button.css'

function Button(props){
    return (
            <button style={props.style}>
                <a href={props.href}>{props.text}</a>
            </button>
    )
}

export default Button;