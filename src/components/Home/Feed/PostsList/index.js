import Post from "./Post";
import styles from "./index.module.css";
function PostsList() {
  return (
    <div className={styles.postsList}>
      <Post
        text="My first post for testing styles."
        timestamp="2022/2/2"
        username="abbasmdev"
        profilePicSrc="https://avatars.githubusercontent.com/u/26652092?v=4"
      />
      <Post
        text="My first post for testing styles."
        timestamp="2022/2/2"
        username="abbasmdev"
        profilePicSrc="https://avatars.githubusercontent.com/u/26652092?v=4"
      />
      <Post
        text="My first post for testing styles."
        timestamp="2022/2/2"
        username="abbasmdev"
        profilePicSrc="https://avatars.githubusercontent.com/u/26652092?v=4"
      />
      <Post
        text="My first post for testing styles."
        timestamp="2022/2/2"
        username="abbasmdev"
        profilePicSrc="https://avatars.githubusercontent.com/u/26652092?v=4"
      />
    </div>
  );
}

export default PostsList;
