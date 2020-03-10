import React from 'react'

const ViewPost = (props) => {
    
    let {title} = props
    return (
        <div>
            <h1>{title}</h1>
        </div>
    )
}

export default ViewPost;
