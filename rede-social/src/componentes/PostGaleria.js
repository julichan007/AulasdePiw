import React from 'react';

import Post from './Post';

import './Post.css';

class PostGaleria extends React.Component{
    render(){
        return (
            <div className = "post">
                <Post name = "Pepsi" mensagem = "Onde está a ração?"></Post>
            </div>
        )
    }
}

export default PostGaleria;