import React from 'react'
import Item from '../Item/Item';

export default function List({postsInput}) {
    return (
        <ul>
        {
            postsInput.map((post) => { 
            return (
                <Item key={post.id} post={post} />
            )
            })
        }
        </ul>
    )
}