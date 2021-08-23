export enum PostActionType {
    FETCH = "FETCH",
    CREATE = "CREATE",
    DELETE = "DELETE",
    UPDATE = "UPDATE",
    FETCH_BY_ID = "FETCH_BY_ID",
}

export interface Post {
    title: string;
    category: string;
    thumbnail: string;
    content: string;
    id?: string;
    date?: Date;
}
