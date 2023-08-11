import Counter from '../components/Counter';
import {render, screen, fireEvent} from "@testing-library/react";

//create a test suite

describe("Counter Tests", () => {

    //creates a unit test(spec)
    test("Test 1", () => {

        var x  = 10;//foo()
        var y = 10; // bar()
        expect(x).toBe(y);

    })

    test("renders Counter", () => {
        render(<Counter initValue={10}/>);
        expect(screen.getByText("Count: 10")).toBeTruthy();

    })

    test("increment Counter", () => {
        render(<Counter initValue={10}/>);
        expect(screen.getByText("Count: 10")).toBeTruthy();
        fireEvent.click(screen.getByText("Inc"), {});
        expect(screen.getByText("Count: 11")).toBeTruthy();

    })

    test("chnage Counter on the change event of input", () => {
        render(<Counter initValue={10}/>);
        expect(screen.getByText("Count: 10")).toBeTruthy();
        fireEvent.change(screen.getByPlaceholderText("Counter"), {target: {value: 100}});
        expect(screen.getByText("Count: 100")).toBeTruthy();

        fireEvent.change(screen.getByPlaceholderText("UpdateCtr"), {target: {value: 25}});
        expect(screen.getByText("Count: 100")).toBeTruthy();

        fireEvent.click(screen.getByText("Update"), {});
        expect(screen.getByText("Count: 25")).toBeTruthy();

    })



})