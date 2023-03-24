import './Button.css'

function Button(props){
    return (
            <button style={props.style}>
                <a href={props.href} style={props.style}>{props.text}</a>
            </button>
    )
}

export default Button;