import React from 'react';
import NewsPreview from './NewsPreview';
import news from '../../../data/news.js';

class IndexPage extends React.Component {
    render() {
        const messages = news.splice(0, 5).map((news) => <NewsPreview key={news.id}newsText={news.newsText} author={news.author} subject={news.subject}/>)
        return (<div className='messages'>{messages}</div>);
    }

}
export default IndexPage;
