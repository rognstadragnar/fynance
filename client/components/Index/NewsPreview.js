import React from 'react';

class NewsPreview extends React.Component {
    render(){
        const { newsText, author, subject} = this.props;
        return (
            <div>
                <p>{newsText}</p>
                <span>Posted {author} concerning {subject}</span>
            </div>
        )
    }
}

export default NewsPreview
