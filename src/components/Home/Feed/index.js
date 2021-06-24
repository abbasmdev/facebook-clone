import StoryReel from "../../StoryReel";
import PostForm from "./PostForm";
import Post from "./Post";
import styles from "./index.module.css";
function Feed({ className }) {
  return (
    <div className={`${styles.container} ${className}`}>
      <StoryReel className={styles.storyReel} />
      <PostForm />
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
    </div>
  );
}

export default Feed;
