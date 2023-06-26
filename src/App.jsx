import { useEffect, useState } from "react";
import "./App.css";
import AllPosts from "./components/AllPosts";

function App() {
  const [posts, setPosts] = useState(["1"]);
  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => response.json())
    //   .then(json => {console.log(json)
    //     setPosts(json)
    //   })
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((json) => {
        // console.log(json.products);
        setPosts(json.products);
      });
  }, []);
  // console.log(posts)

  return (
    <>
      <h1 className="text-3xl font-bold text-red-600 underline text-center">
        This Project Mainly Aims following Task
      </h1>
      <p className="text-center">
        TASK DETAILS :-Create a share option on react for any blog or any page.
        Where it copies url image and meta tile name description also it works
        well with OG graph.
      </p>
      <AllPosts posts={posts} />
    </>
  );
}

export default App;

