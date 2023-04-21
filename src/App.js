import { starterPosts } from "./copy"
import Post from "./Post"

export default function App() {
  // run code and define event handlers here (in function body)

  const postComponents = starterPosts.map((post, i) => {
    return (
      <Post 
        title={post.title}
        author={post.author}
        comments={post.comments}
        body={post.body}
        key={`post ${i}`}
      />
    )
    // return Post({
    //   title: post.title,
    //   author: post.author
    // })
  })

  // the jsx you would like to render goes into the return of the function
  return (
    <>
      <h1>Function Dinos 🦖</h1>

      {postComponents}
    </>
  )
}