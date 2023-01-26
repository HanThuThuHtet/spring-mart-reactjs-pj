import { useReducer } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { getData } from "../api";

const StateContext = createContext();
export const StateContextProvider = ({children}) => {
   
    //search bar
    const [search , setSearch] = useState("");

    const initialState = {
        productLists: []
    }
    const reducer = (state , action) => {
        switch(action.type){
            case "GET_PRODUCTS":
                return {...state , productLists: action.payload}
            default:
                return state;
        }
    }
         
    const [state , dispatch ] = useReducer(reducer, initialState);    
    const getProducts = async() => {
        const data = await getData('/products');
        dispatch({type: "GET_PRODUCTS", payload: data});
    }
    useEffect(() => {
        getProducts();
    },[]);

    const data = {state,search,setSearch};
    return(
        <StateContext.Provider value={data}>
            {children}
        </StateContext.Provider>
    )
}
export const useStateContext =() => useContext(StateContext);
