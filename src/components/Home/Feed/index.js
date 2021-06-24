import StoryReel from "../../StoryReel";
import PostForm from "./PostForm";
import styles from "./index.module.css";
function Feed({ className }) {
  return (
    <div className={`${styles.container} ${className}`}>
      <StoryReel className={styles.storyReel} />
      <PostForm />
    </div>
  );
}

export default Feed;
