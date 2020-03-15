import React from 'react';

class Post extends React.Component{
    constructor(props){
        super(props);
        this.name = props.name;
        this.mensage = props.mensage;
    }
    render(){
        return(
            <div className = "post01">
                <div>{this.name}</div>
                <div>{this.mensage}</div>
            </div>
        )
    }
}

export default Post;