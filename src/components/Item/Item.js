import React from 'react'

export default function Item({post}) {
    return (
        <li>Titulo: {post.title} Descripcion: {post.body}</li>
    )
}