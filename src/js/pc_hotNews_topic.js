import React from 'react';
const a = require('../css/pc_hotNews_topic.css');
export default class PCHotNewsTopic extends React.Component {
    render(){
        return(
            <div className={a.container}>
            {/* <img src='https://img3.doubanio.com/view/dale-online/dale_ad/public/da0cf77744ac985.jpg' /> */}
            <p>热门话题······<span>(<a>更多</a>)</span></p>
        </div>
        )
    }
}