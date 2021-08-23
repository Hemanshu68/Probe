import { combineReducers } from "redux";
import ErrorReducer from "./error";
import LoadingReducer from "./Loading";
import PostReducer from "./Posts";
import sideBarReducer from "./sidebarreducer";

export const allReducers = combineReducers({
    post: PostReducer,
    sidebar: sideBarReducer,
    loading: LoadingReducer,
    error: ErrorReducer,
});

export type State = ReturnType<typeof allReducers>;
