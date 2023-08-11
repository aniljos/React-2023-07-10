import { fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react"
import ListProducts from "../components/ListProducts";
import { BrowserRouter as Router } from "react-router-dom";
import { reduxStore } from "../redux/store";
import { Provider } from "react-redux";
import axios from 'axios';

jest.mock("axios");
jest.spyOn(window, "alert").mockImplementation(() => {console.log("alert called")});


//implicitly create a test suite

test("render ListProducts", async () => {

    //mock response for the axios.get call
    (axios.get as jest.Mock).mockResolvedValueOnce({
        data: [
            {id: 1, name: "P1", description: "D1", price: 2000},
            {id: 2, name: "P2", description: "D2", price: 2000}
        ]
    });


    render(<Provider store={reduxStore}><Router><ListProducts/></Router></Provider>);
    //expect(screen.getAllByText("List Products")).toBeTruthy()
    await waitFor(() => expect(screen.getAllByText("List Products")).toBeTruthy());

    await(waitFor(() => screen.getAllByTestId("product")));

    let allproducts = screen.getAllByTestId("product");
    expect(allproducts).toHaveLength(2);

    let allDeleteBtns = screen.getAllByText("Delete");
    await waitFor(() => fireEvent.click(allDeleteBtns[0], {}));

    await waitForElementToBeRemoved(allproducts[0]);
    allproducts = screen.getAllByTestId("product");
    expect(allproducts).toHaveLength(1);




})