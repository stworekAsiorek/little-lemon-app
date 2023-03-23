import './Button.css'

function Button(props){
    return (
        <a href={props.href}>
            <button style={props.style}>{props.text}</button>
        </a>
    )
}

export default Button;