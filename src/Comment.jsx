
// cannot do a one liner export
// const Comment = props => {
//     return (
//         <li>{props.comment}</li>
//     )
// }

// export default Comment

// if you don't need state or any kind of hooks or any mapping
// const Comment = props => (
//     <li>{props.comment}</li>
// )

// export default Comment

// this destructuring assignment syntax works with both
// named functions and arrow functions
export default function Comment({ comment, otherProp }) {
    // const { comment } = props
    return (
        <li>{comment}</li>
    )
}
