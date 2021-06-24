import StoryReel from "../../StoryReel";
import styles from "./index.module.css";
function Feed({ className }) {
  return (
    <div className={`${styles.container} ${className}`}>
      <StoryReel className={styles.storyReel} />
      <p>aa</p>
    </div>
  );
}

export default Feed;
