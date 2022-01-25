import React, {useState, useRef} from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList"
import MyButton from "./components/UI/button/MyButton"
import MyInput from "./components/UI/input/MyInput"
import "./styles/App.css";

function App() {

	const [posts, statePosts] = useState([
		{id: 1, title:"Javascript", body: "Description"},
		{id: 2, title:"Javascript 2", body: "Description 2"},
		{id: 3, title:"Javascript 3", body: "Description 3"}
	])

	const [title, setTitle] = useState('');
	const bodyInputRef = useRef();

	const addNewPost = (e) => {
		e.preventDefault();
		console.log(title);
		console.log(bodyInputRef.current.value);

	}


	return (
		<div className="App">
			<form>
				{/*Component controlabil*/}
				<MyInput
				value={title}
				onChange={e => setTitle(e.target.value)}
				type="text"
				placeholder="Name"
				/>
				
				{/* <input ref={bodyInputRef} type="text"/> */}

				{/* Component necontrolabil */}
				<MyInput
				ref={bodyInputRef}
				type="text"
				placeholder="Post description"
				/>

				<MyButton onClick={addNewPost}>Create new post</MyButton>
			</form>
			{<PostList posts={posts} title="Posts about JS"/>}
		</div>
	);
}

export default App;
