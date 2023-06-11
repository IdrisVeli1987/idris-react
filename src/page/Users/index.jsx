import { users } from "./data";
import styles from "./style.module.css";
const Users = () => {
  console.log(styles);
  return (
    <>
      <h1 className={styles.user_heading}>İstifadəçi səhifəsinə xoş gəlmisiz</h1>
      {users.map((user) => {
        return (
          <div className={styles.user} key={user.id}>
            <h3 className={styles.heading}>{user.name}</h3>
            <p className={styles.user_email}>{user.email}</p>
          </div>
        );
      })}
    </>
  );
};
export default Users;
