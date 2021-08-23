import Axios from "axios";
import { BackEnd_BaseUrl } from "../Constants/constants";
import { Post } from "../redux/types/PostsTypes";

const api = Axios.create({
    baseURL: BackEnd_BaseUrl,
});

export const fetchPosts = (category: string) =>
    Axios.get("https://api.instantwebtools.net/v1/passenger?page=0&size=10");

export const fetchPostById = (id: string) =>
    Axios.get(`https://testimonialapi.toolcarton.com/api/${id}`);

export const fetchPostByCategoryAndPage = (
    category: string,
    page: number,
    maxSize: number = 4
) =>
    api.get(
        `https://api.instantwebtools.net/v1/passenger?page=${page}&size=${maxSize}`
    );
export const createPost = (post: Post) => api.post("/", post);
export const deletePost = (id: string) => api.delete(`/delete/${id}`);
export const updatePost = (id: string, post: Post) =>
    api.patch(`/update/${id}`, post);
