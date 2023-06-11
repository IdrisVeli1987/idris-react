import axios from "axios";
import styles from "./style.module.css";
import { useEffect, useState } from "react";

const url = "https://jsonplaceholder.typicode.com/users";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(url).then(({ data }) => {
      setUsers(data);
    });
  }, []);
  return (
    <>
      <h1 className={styles.user_heading}>
        İstifadəçi səhifəsinə xoş gəlmisiz
      </h1>
      {users.map(({ id, name, email, company }) => {
        return (
          <div className={styles.user} key={id}>
            <h3 className={styles.heading}>{name}</h3>
            <p className={styles.user_email}>{email}</p>
            <p className={styles.user_email}>~~{company.name}~~ </p>
          </div>
        );
      })}
    </>
  );
};
export default Users;
