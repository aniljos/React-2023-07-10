import { render, screen } from "@testing-library/react"
import ListProducts from "../components/ListProducts"

//implicitly create a test suite

test("render ListProducts", () => {

    render(<ListProducts/>);
    expect(screen.getAllByText("List Products")).toBeTruthy();
})