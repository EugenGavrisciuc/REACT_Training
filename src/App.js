import React, {useState} from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import "./styles/App.css";

function App() {

	const [posts, statePosts] = useState([
		{id: 1, title:"Javascript", body: "Description"},
		{id: 2, title:"Javascript 2", body: "Description 2"},
		{id: 3, title:"Javascript 3", body: "Description 3"}
	])

	return (
		<div className="App">
			{/* <Counter/> */}
			{/* <ClassCounter/> */}
			<h1>Posts list</h1>
			{posts.map(post =>
				<PostItem post={post} key={post.id}/>
				)}
		</div>
	);
}

export default App;
