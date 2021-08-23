import { Dispatch } from "redux";
import { Post, PostActionType } from "../types/PostsTypes";

import * as api from "../../api/index";
import { Loading } from "../types/Loading";
import { Error } from "../types/error";

export const getPost = (category: string) => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.fetchPosts(category);

        dispatch({ type: PostActionType.FETCH, payload: data });
    } catch (error) {
        console.log(error.message);
        dispatch({ type: Error.HAS_ERROR, payload: error.message });
    }
};

export const getPostById = (id: string) => async (dispatch: Dispatch) => {
    dispatch({ type: Loading.SHOW });

    try {
        const { data } = await api.fetchPostById(id);
        dispatch({ type: PostActionType.FETCH, payload: data });
    } catch (error) {
        console.log(error.message);
        dispatch({ type: Error.HAS_ERROR, payload: error.message });
    }

    dispatch({ type: Loading.HIDE });
};

export const getPostByCatAndPage =
    (category: string, page: number, maxSize?: number) =>
    async (dispatch: Dispatch) => {
        // dispatch({ type: Loading.SHOW });

        try {
            const { data } = await api.fetchPostByCategoryAndPage(
                category,
                page,
                maxSize
            );
            dispatch({ type: PostActionType.FETCH, payload: data });
        } catch (error) {
            console.log(error);
            dispatch({ type: Error.HAS_ERROR, payload: error.message });
        }
        // dispatch({ type: Loading.HIDE });
    };

export const createPost = (post: Post) => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({ type: PostActionType.CREATE, payload: data });
    } catch (error) {
        dispatch({ type: Error.HAS_ERROR, payload: error.message });
    }
};

export const deletePost = (id: string) => async (dispatch: Dispatch) => {
    try {
        await api.deletePost(id);

        dispatch({ type: PostActionType.DELETE, payload: id });
    } catch (error) {
        dispatch({ type: Error.HAS_ERROR, payload: error.message });
    }
};

export const updatePost =
    (id: string, post: Post) => async (dispatch: Dispatch) => {
        try {
            const { data } = await api.updatePost(id, post);

            dispatch({ type: PostActionType.UPDATE, payload: data });
        } catch (error) {
            console.log(error.message);
            dispatch({ type: Error.HAS_ERROR, payload: error.message });
        }
    };
