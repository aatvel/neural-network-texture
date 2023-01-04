import { combineReducers } from "redux";
import reducer from "./reducer";

const rootReducer = combineReducers({
  imageUrl: reducer,
});

export default rootReducer;
