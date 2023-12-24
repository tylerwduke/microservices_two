import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommentList = ({ postId }) => {
    const [comments, setComments] = useState({});

    const fetchComments = async () => {
        const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);

        setComments(res.data);
    }

    useEffect(() => {
        fetchComments();
    }, [])

    const renderedComments = Object.values(comments).map(comment => {
        return (
            <div key={comment.id} className="card" style={{ width: '100%', marginBottom: '20px' }}>
                <div className="card-body">
                    <h3>{comment.content}</h3>
                </div>
            </div>
        )
    })

    return <p>{renderedComments}</p>
}

export default CommentList;