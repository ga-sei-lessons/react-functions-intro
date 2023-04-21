import Comment from "./Comment"

// props are passed into a functional component when it is rendered
export default function Post(props) {
    // map the comments here
    const comments = props.comments.map((comment, i) => {
        return (
            <Comment 
                key={`${props.title} comment ${i} `}
                comment={comment}
            />
        )
    })
    // return the jsx to show
    return (
        <div>
            <h2>{props.title}</h2>

            <p>{props.author}</p>

            <p>{props.body}</p>

            <h3>Comments:</h3>
            <ul>
                {comments}
            </ul>
        </div>
    )
}

