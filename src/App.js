import React, {useState} from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList"
import PostForm from "./components/PostForm"
import "./styles/App.css";

function App() {

	const [posts, statePosts] = useState([
		{id: 1, title:"Javascript", body: "Description"},
		{id: 2, title:"Javascript 2", body: "Description 2"},
		{id: 3, title:"Javascript 3", body: "Description 3"}
	]);
	const createPost = (newPost) => {
		statePosts([...posts, newPost])
	}
	const removePost = (post) => {
		statePosts(posts.filter(p => p.id !== post.id))
	}

	return (
		<div className="App">
			<PostForm create={createPost}/>
			{posts.length !== 0
				?<PostList remove={removePost} posts={posts} title="Posts about JS"/>
				:<h1 style={{textAlign: "center"}}>Posts didnt find</h1>
			}

		</div>
	);
}

export default App;
