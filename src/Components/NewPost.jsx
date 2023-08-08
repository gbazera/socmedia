function NewPost(props) {
    return(
        <form action="POST" className="new_post">
            <textarea placeholder="say something.."></textarea>
            <button type="submit">post</button>
        </form>
    )
}

export default NewPost;