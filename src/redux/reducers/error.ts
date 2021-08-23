// const inititalstate: Post[] = [];

import { Error } from "../types/error";

type State = {
    error: boolean;
    error_msg: string;
};

type Action = {
    type: string;
    payload?: string;
};

const ErrorReducer = (
    state: State = { error: false, error_msg: "" },
    action: Action
) => {
    switch (action.type) {
        case Error.HAS_ERROR:
            return { error: true, error_msg: action.payload };
        case Error.NO_ERROR:
            return { error: false, error_msg: "" };

        default:
            return state;
    }
};

export default ErrorReducer;
