import {initializeTimes, updateTimes} from './Main';

test('initializeTimes returns empty array', () => {
    const result = initializeTimes();
    expect(result.date.getDate()).toStrictEqual(new Date().getDate());
    expect(result.availableTimes).toBeInstanceOf(Array);
    expect(result.availableTimes.length).toBeGreaterThan(0);
})

test('updateTimes returns array', () => {
    const state = {};
    var date = new Date();
    const action = {date}
    const result = updateTimes(state, action);
    expect(result.date).toBe(date);
    expect(result.availableTimes).toBeInstanceOf(Array);
    expect(result.availableTimes.length).toBeGreaterThan(0);
})