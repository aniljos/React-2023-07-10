import React, { Component, PureComponent } from "react";
import axios from 'axios';
import { Customer } from "../models/customer";
import withNavigate from "../hoc/withNavigate";
import {connect} from "react-redux";
import { AppState } from "../redux/store";
import { AuthState } from "../redux/authReducer";

type ListCustomersState = {
    customers: Customer[],
    isMessageVisible: boolean
}
type ListCustomersProps = {
    message: string,
    navigate: (path: any)=> void,
    auth: AuthState
}

// <ListCustomers message="This is a class component"/>
class ListCustomers extends PureComponent<ListCustomersProps, ListCustomersState>{

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
            
            const headers = {Authorization: `Bearer ${this.props.auth.accessToken}`}
            const response 
                = await axios.get<Customer[]>(
                        process.env.REACT_APP_BASE_URL + "/secure_customers", {headers});
            this.setState({
                customers: response.data
            });



        } catch (error) {
            
        }

    }

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
        console.log("componentDidUpdate")
        // this.setState({
        //     customers: []
        // })
    }
    componentWillUnmount(): void {
        console.log("componentWillUnmount")
    }

    // shouldComponentUpdate(nextProps: Readonly<ListCustomersProps>, nextState: Readonly<ListCustomersState>, nextContext: any): boolean {
        
    //     console.log("shouldComponentUpdate");
    //     return true;
    // }


    //All event handlers in class components should be defined as arrow functions
    back= () => {
        console.log("going back");
        this.props.navigate("/");
    }

    render(): React.ReactNode {
        return(
            <div>
                <h3>List Customers</h3>

                <div className="alert alert-info">
                    {this.props.message}
                </div>
                <div>
                    <button className="btn btn-info" onClick={this.back}>Back To Home</button>
                </div>
                <br/>
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
//Map the redux state to component props
const mapStateToProps = (reduxState: AppState) => {

    return {
        auth: reduxState.auth,
        // test: "hello"
    }
    
};

export default connect(mapStateToProps)(withNavigate(ListCustomers));