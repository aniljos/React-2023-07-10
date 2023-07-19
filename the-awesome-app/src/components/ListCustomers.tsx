import React, { Component } from "react";
import axios from 'axios';
import { Customer } from "../models/customer";

type ListCustomersState = {
    customers: Customer[],
    isMessageVisible: boolean
}
type ListCustomersProps = {
    message: string
}

// <ListCustomers message="This is a class component"/>
class ListCustomers extends Component<ListCustomersProps, ListCustomersState>{

    state: Readonly<ListCustomersState> = {
        customers: [],
        isMessageVisible: false
    }

    constructor(props: ListCustomersProps){
        super(props)
    }


    async componentDidMount(): Promise<void> {
        console.log("componentDidMount")

        try {
            
            const response = await axios.get<Customer[]>(process.env.REACT_APP_BASE_URL + "/customers");
            this.setState({
                customers: response.data
            });



        } catch (error) {
            
        }

    }

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
        console.log("componentDidUpdate")
    }
    componentWillUnmount(): void {
        console.log("componentWillUnmount")
    }

    render(): React.ReactNode {
        return(
            <div>
                <h3>List Customers</h3>

                <div className="alert alert-info">
                    {this.props.message}
                </div>

                <div>
                    {this.state.customers.map((item) => {
                        return (
                            <div key={item.id}>
                                <p>Id: {item.id}</p>
                                <p>Name: {item.name}</p>
                                <p>Location: {item.location}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default ListCustomers;