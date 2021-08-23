import { Post, PostActionType } from "../types/PostsTypes";

// const inititalstate: Post[] = [];

type Action = {
    type: string;
    payload?: string;
};

const PostReducer = (state: Post[] = [], action: Action) => {
    switch (action.type) {
        case PostActionType.FETCH:
            return action.payload;
        case PostActionType.FETCH_BY_ID:
            return action.payload;
        case PostActionType.CREATE:
            return [...state, action.payload];
        case PostActionType.DELETE:
            return state.filter((post) => post.id !== action.payload);
        default:
            return state;
    }
};

export default PostReducer;
