import './Button.css'

function Button(props){
    return (
            <button>
                <a href={props.href}>{props.text}</a>
            </button>
    )
}

export default Button;