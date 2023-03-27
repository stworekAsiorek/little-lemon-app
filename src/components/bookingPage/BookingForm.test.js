import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';
import moment from 'moment/moment';
import { Children } from "react";

test('Renders the BookingForm heading', () => {
    render(<BookingForm state={{availableTimes: []}}/>);
    const headingElement = screen.getByText("Reservation details");
    expect(headingElement).toBeInTheDocument();
})

test('Renders date input', () => {
    const anyDate = new Date();
    const submitForm = jest.fn();
    render(<BookingForm state={{date: anyDate, availableTimes: []}} submitForm={submitForm}/>);
    const dateInput = screen.getByLabelText("Choose date");;
    expect(dateInput).toBeInTheDocument();
})

test('Includes default, min and max value in date input', () => {
    const anyDate = new Date();
    const submitForm = jest.fn();
    render(<BookingForm state={{date: anyDate, availableTimes: []}} submitForm={submitForm}/>);
    const dateInput = screen.getByLabelText("Choose date");;
    expect(dateInput.defaultValue).toBe(moment(anyDate).format('YYYY-MM-DD'));
    expect(dateInput.min).toBe(moment(anyDate).format('YYYY-MM-DD'));
    expect(dateInput.max).toBe(moment(anyDate).add(1, 'months').format('YYYY-MM-DD'));
})

test('Renders time input', () => {
    const anyDate = new Date();
    const submitForm = jest.fn();
    render(<BookingForm state={{date: anyDate, availableTimes: []}} submitForm={submitForm}/>);
    const timeInput = screen.getByLabelText("Choose time");;
    expect(timeInput).toBeInTheDocument();
})

test('Includes only default option if availableTimes empty in time input', () => {
    const anyDate = new Date();
    const submitForm = jest.fn();
    render(<BookingForm state={{date: anyDate, availableTimes: []}} submitForm={submitForm}/>);
    const timeInput = screen.getByLabelText("Choose time");;
    expect(timeInput.children.length).toBe(1);
    expect(timeInput.children[0].textContent).toBe("Select time");
})

test('Reflects availableTimes in time input options', () => {
    const anyDate = new Date();
    const availableTimes = ["17.00", "18.00", "19.00"]
    const submitForm = jest.fn();
    render(<BookingForm state={{date: anyDate, availableTimes}} submitForm={submitForm}/>);
    const timeInput = screen.getByLabelText("Choose time");;
    expect(timeInput.children.length).toBe(4);
    expect(Array.from(timeInput.children).map(child => child.textContent)).toStrictEqual(["Select time"].concat(availableTimes));
})

test('Renders guests input', () => {
    const anyDate = new Date();
    const submitForm = jest.fn();
    render(<BookingForm state={{date: anyDate, availableTimes: []}} submitForm={submitForm}/>);
    const guestsInput = screen.getByLabelText("Number of guests");;
    expect(guestsInput).toBeInTheDocument();
})

test('Includes min and max value in guests input', () => {
    const anyDate = new Date();
    const submitForm = jest.fn();
    render(<BookingForm state={{date: anyDate, availableTimes: []}} submitForm={submitForm}/>);
    const guestsInput = screen.getByLabelText("Number of guests");;
    expect(guestsInput.min).toBe("1");
    expect(guestsInput.max).toBe("10");
})

test('Renders occasion input', () => {
    const anyDate = new Date();
    const submitForm = jest.fn();
    render(<BookingForm state={{date: anyDate, availableTimes: []}} submitForm={submitForm}/>);
    const occasionInput = screen.getByLabelText("Occasion");
    expect(occasionInput).toBeInTheDocument();
})

test('Includes Birthday, Engagement and Anniversary in occasion input', () => {
    const anyDate = new Date();
    const availableTimes = []
    const submitForm = jest.fn();
    render(<BookingForm state={{date: anyDate, availableTimes}} submitForm={submitForm}/>);
    const occasionInput = screen.getByLabelText("Occasion");
    expect(Array.from(occasionInput.children).map(child => child.textContent)).toStrictEqual(["Birthday", "Engagement", "Anniversary"]);
})

test('Making reservation is disabled if no time selected', () => {
    const anyDate = new Date();
    const availableTimes = ["17.00", "18.00"]
    const submitForm = jest.fn();
    render(<BookingForm state={{date: anyDate, availableTimes}} submitForm={submitForm}/>);
    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);
    expect(submitForm).not.toHaveBeenCalled();
    expect(submitButton).toHaveAttribute("disabled");
})

test('Making reservation is enabled if time selected', () => {
    const anyDate = new Date();
    const availableTimes = ["17.00", "18.00"]
    const submitForm = jest.fn();
    render(<BookingForm state={{date: anyDate, availableTimes}} submitForm={submitForm}/>);
    const timeInput = screen.getByLabelText("Choose time");
    fireEvent.change(timeInput, {target: {value: availableTimes[1]}})
    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);
    expect(submitForm).toHaveBeenCalled();
    expect(submitButton).not.toHaveAttribute("disabled");
})
