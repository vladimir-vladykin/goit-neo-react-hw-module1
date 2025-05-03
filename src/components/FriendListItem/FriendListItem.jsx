import Container from "../Container/Container";
import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusStyles = [styles.status, isOnline ? styles.green : styles.red];

  return (
    <Container>
      <div className={styles.item}>
        <img src={avatar} alt="Avatar" width="48" />
        <p className={styles.name}>{name}</p>
        <p className={statusStyles.join(" ")}>
          {isOnline ? "Online" : "Offline"}
        </p>
      </div>
    </Container>
  );
};

export default FriendListItem;
