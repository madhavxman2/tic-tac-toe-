import { useDispatch,useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState,AppDispatch } from "../store";


// it is mainly used dispatching the actions
export const useAppDispatch : ()=> AppDispatch=useDispatch;
// it is mainly used for using the state value
export const useAppSelectore: TypedUseSelectorHook<RootState>=useSelector;