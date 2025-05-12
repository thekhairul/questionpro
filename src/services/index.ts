import commentsRepo from "./commentsRepo";
import postsRepo from "./postsRepo";
import usersRepo from './usersRepo';

const $api = {
  posts: postsRepo,
  comments: commentsRepo,
  users: usersRepo,
};

export default $api;