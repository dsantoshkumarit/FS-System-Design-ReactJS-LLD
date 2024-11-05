import { createSlice } from "@reduxjs/toolkit";
import { ADD_TO_CART, DECREASE_ITEM_QUANTITY, INCREASE_ITEM_QUANTITY, REMOVE_FROM_CART } from "../actions/actions";

type ItemType = {
    [key:string] : {
        imageUrl : string;
        name : string;
        price : number;
        quantity : number;
    }
};

const items : ItemType = {};

const InitialState = {
    items
};

export const shoppingCartSlice = createSlice({
    name : "Cart Slice",
    initialState : InitialState ,
    reducers : {
        [ADD_TO_CART] : (state, action) => {
            const itemId:string = action.payload.itemId;
            const item = state.items[itemId] ? state.items[itemId] : false;
            if(item){
                return {...state, 
                    items :{
                        ...state.items,
                        [itemId] : {
                            ...item,
                            quantity : item.quantity + 1
                        }
                    }
                }
            }
            else{
                return {
                    ...state,
                    items : {
                        ...state.items,
                        [itemId] : action.payload.item
                    }
                };
            }
        },
        [INCREASE_ITEM_QUANTITY] : (state, action) => {
            const itemId:string = action.payload.itemId;
            const item = state.items[itemId] ? state.items[itemId] : false;
            if(item){
                return {...state, 
                    items : {
                        ...state.items,
                        [itemId] : {
                            ...item,
                            quantity : item.quantity + 1
                        }
                    }
                }
            }
            return state;
        },
        [REMOVE_FROM_CART] : (state, action) => {
            const tempItems = {...state.items};
            const itemId:string = action.payload.itemId;
            if(tempItems[itemId]){
                delete tempItems[itemId];
            }
            return {items : tempItems};
        },
        [DECREASE_ITEM_QUANTITY] : (state, action) => {
            const itemId:string = action.payload.itemId;
            const tempItems = {...state.items};
            const item = state.items[itemId] ? state.items[itemId] : false;
            if(item && item.quantity > 0){
                return {...state, 
                    items :{
                        ...state.items,
                        [itemId] : {
                            ...item,
                            quantity : item.quantity - 1
                        }
                    }
                }
            }
            delete tempItems[itemId];
            return {items : tempItems};
        }
    }
});