import "./CallToHome"
import CallToHome from "./CallToHome";
import BookingForm from "./BookingForm";

function BookingPage(props){
    return (<>
        <CallToHome/>
        <BookingForm state={props.state} dispatch={props.dispatch} submitForm={props.submitForm}/>
    </>)
}

export default BookingPage;