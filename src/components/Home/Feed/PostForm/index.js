import { Avatar } from "@material-ui/core";
import {
  Videocam as VideocamIcon,
  InsertEmoticon as InsertEmoticonIcon,
  PhotoLibrary as PhotoLibraryIcon,
} from "@material-ui/icons";
import { useState } from "react";
import ActionItem from "../../../ActionItem";
import styles from "./inedx.module.css";
function PostForm() {
  const [textInputValue, setTextInputValue] = useState("");
  const formSubmitHandler = (e) => {
    e.preventDefault();
    setTextInputValue("");
  };
  return (
    <div className={styles.container}>
      <div className={styles.inputsContainer}>
        <Avatar />
        <form
          onSubmit={formSubmitHandler}
          className={styles.textInputContainer}
        >
          <input
            className={styles.textInput}
            type="text"
            value={textInputValue}
            onChange={(e) => setTextInputValue(e.target.value)}
            placeholder="What's on your mind?"
          />
          <button type="submit" hidden></button>
        </form>
      </div>
      <div className={styles.actionsList}>
        <ActionItem Icon={VideocamIcon} color="red" label="Live Video" />
        <ActionItem Icon={PhotoLibraryIcon} color="green" label="Photo/Video" />
        <ActionItem
          Icon={InsertEmoticonIcon}
          color="orange"
          label="Feeling/Activity"
        />
      </div>
    </div>
  );
}

export default PostForm;
