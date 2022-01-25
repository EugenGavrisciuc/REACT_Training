import React, {useState} from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList"
import "./styles/App.css";

function App() {

	const [posts, statePosts] = useState([
		{id: 1, title:"Javascript", body: "Description"},
		{id: 2, title:"Javascript 2", body: "Description 2"},
		{id: 3, title:"Javascript 3", body: "Description 3"}
	])

	const [posts2, statePosts2] = useState([
		{id: 1, title:"Python", body: "Description"},
		{id: 2, title:"Python 2", body: "Description 2"},
		{id: 3, title:"Python 3", body: "Description 3"}
	])

	return (
		<div className="App">
			{/* <Counter/> */}
			{/* <ClassCounter/> */}
			{<PostList posts={posts} title="Posts about JS"/>}
			{<PostList posts={posts2} title="Posts about Python"/>}
		</div>
	);
}

export default App;
