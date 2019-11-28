import React from 'react';
import PCHotNewsImage from './pc_hotNews_image';
import PCHotNewsList from './pc_hotNews_list';
import PCHotNewsTopic from './pc_hotNews_topic';
const a= require('../css/pc_hotNews.css');
export default class PCHotNews extends React.Component{
    render(){
        return(
            <div className={a.container}>
                <PCHotNewsImage/>
                <PCHotNewsList/>
                <PCHotNewsTopic/>
            </div>
            
        )
    }
}