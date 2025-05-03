import Container from "../Container/Container";
import styles from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <Container>
      <div className={styles.profile}>
        <div>
          <img src={image} alt="User avatar" />
          <p className={styles.name}>{name}</p>
          <p className={styles.info}>@{tag}</p>
          <p className={styles.info}>{location}</p>
        </div>

        <ul>
          <li>
            <span>Followers</span>
            <span className={styles.metadata}>{followers}</span>
          </li>
          <li>
            <span>Views</span>
            <span className={styles.metadata}>{views}</span>
          </li>
          <li>
            <span>Likes</span>
            <span className={styles.metadata}>{likes}</span>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Profile;
