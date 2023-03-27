import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm state={{availableTimes: []}}/>);
    const headingElement = screen.getByText("Reservation details");
    expect(headingElement).toBeInTheDocument();
})