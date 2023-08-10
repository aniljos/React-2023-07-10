import React, {Component} from 'react';


class AppErrorBoundary extends Component<any, any>{

    state: Readonly<any> = {
        hasError: false
    };

    //implicitly invoked whenever there an uncaught exception
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.log("AppErrorBoundary", error);
        console.log("AppErrorBoundary", errorInfo);

        this.setState({
            hasError: true
        });
    }

    render(): React.ReactNode {

        if(this.state.hasError){
            return (
                <div className='alert alert-danger'>
                    Something went wrong. Please try another option.
                </div>
            )
        }
        else{
            return this.props.children;
        }
        
        
    }

}

export default AppErrorBoundary