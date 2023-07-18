//Nodejs Application

var obj = {
    id: 100,
    print: function(){
        console.log("id", this.id);
    }
}

obj.print();
var print = obj.print;
print();


const redux = require('redux');
console.log("Nodejs App");

const createStore = redux.createStore;

//initial Data
const initState = {
    message: "Hello Redux",
    counter: 1
}

//Reducer -- function
const reducer = (currentState=initState, action)=> {

    //return the updated state
    if(action.type === "INC_CTR"){

        return {
            ...currentState,
            counter: currentState.counter + 1
        }
    }
    if(action.type === "DECR_CTR"){

        return {
            ...currentState,
            counter: currentState.counter - 1
        }
    }
    if(action.type === "UPD_CTR"){

        return {
            ...currentState,
            counter: action.value
        }
    }

    
    return currentState;
}

//Store
const store = createStore(reducer);
console.log("state: ", store.getState())

//Subscribe to the store
store.subscribe(() => {
    console.log("subscriber: ", store.getState())
})



//Dispatch an Action
store.dispatch({type: "INC_CTR"})
//console.log("state: ", store.getState())
store.dispatch({type: "DECR_CTR"})
//console.log("state: ", store.getState())
store.dispatch({type: "UPD_CTR", value: 100})
//console.log("state: ", store.getState())