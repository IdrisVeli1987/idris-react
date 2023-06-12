import axios from "axios";
import { useEffect, useState } from "react";
import { PageContainer } from "../../components/PageContainer";

const url = "https://jsonplaceholder.typicode.com/posts";

export const Posts = ({}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async function () {
      const { data } = await axios.get(url);
      setPosts(data);
    })();
  }, []);

  return (
    <PageContainer>
      <>
        {posts.map(({ title, id }) => {
          return (
            <div key={id}>
              <p>{title}</p>
            </div>
          );
        })}
      </>
    </PageContainer>
  );
};
