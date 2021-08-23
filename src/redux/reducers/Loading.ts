// const inititalstate: Post[] = [];

import { Loading } from "../types/Loading";

type Action = {
    type: string;
};

const LoadingReducer = (state: boolean = false, action: Action) => {
    switch (action.type) {
        case Loading.SHOW:
            return true;
        case Loading.HIDE:
            return false;
        default:
            return state;
    }
};

export default LoadingReducer;
