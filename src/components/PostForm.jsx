import React, {useState} from 'react';
import MyButton from "./UI/button/MyButton"
import MyInput from "./UI/input/MyInput"

const PostForm = ({create}) => {
    const [postInput, setPostInput] = useState({title: "", body: ""});

	const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...postInput, id: Date.now()
        };
        create(newPost);
		setPostInput({title: "", body: ""})


	}

    return (
        <form>
        {/*Component controlabil*/}
        <MyInput
        value={postInput.title}
        onChange={e => setPostInput({...postInput, title: e.target.value})}
        type="text"
        placeholder="Name"
        />

        {/* <input ref={bodyInputRef} type="text"/> */}

        {/* Component necontrolabil */}
        <MyInput
        value={postInput.body}
        onChange={e => setPostInput({...postInput, body: e.target.value})}
        type="text"
        placeholder="Post description"
        />

        <MyButton onClick={addNewPost}>Create new post</MyButton>
    </form>
    );
};

export default PostForm;