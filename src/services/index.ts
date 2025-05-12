import commentsRepo from "./commentsRepo";
import postsRepo from "./postsRepo";

const $api = {
    posts: postsRepo,
    comments: commentsRepo,
};

export default $api;