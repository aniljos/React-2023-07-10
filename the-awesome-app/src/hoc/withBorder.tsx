//withBorder will add a border to any exsisting component

//hoc is always a function(will receive a component on which the features are to be injected ) 
// that returns a component(functional/class)
function withBorder(Component: any){
    
    //returning a component
    return function withBorderHOC(props: any){
        return (
            <div style={{border: "2px solid red", padding: "3px"}}>
                <Component {...props}/>
            </div>
        );
    }
}

export default withBorder;