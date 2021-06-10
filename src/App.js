import React , {useEffect , useState} from "react";
import './App.css';
import axios from "axios";
import Header from "./Header";



function App() {

  const [posts , setPosts] = useState([]);

  useEffect(() => {

    const getPosts = async () => {
      const result = await axios.get("https://jsonplaceholder.typicode.com/posts");
      console.log(result.data);
      setPosts(result.data);
     return result;
    }
   getPosts();

  } , []);


  return (
    <div className="App">
     <Header />
     <div className="posts">
     {
       posts.map((post,id) => {
         return ( <div className="post">
               
               <h3> User : {post.userId}</h3>
               <h4> Post number : {post.id} </h4>
               <h2>{post.title}</h2>
               <div className="post__button">
                <button > Show comments</button>
                <button>View Post</button>
               </div>
               
               <hr></hr>
               </div>
         );
       })
     }
     </div>
    
    </div>
  );
}

export default App;
