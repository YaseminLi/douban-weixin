import React from 'react';
const a = require('../css/pc_hotNews_image.css');
export default class PCHotNewsImage extends React.Component {
    constructor() {
        super();
        this.state = {
            hotNewsImage: ''
        }
    }

    componentWillMount() {
        var myFetchOptions = {
            method: 'GET'
        };
        fetch("https://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=top&count=4", myFetchOptions)
            .then(response => response.json())
            .then(json => {
                this.setState({ hotNewsImage: json });
            });
    }
    render() {
        const { hotNewsImage } = this.state;
        console.log(hotNewsImage);
        const hotNewsImageList = hotNewsImage.length ?
            hotNewsImage.map((item, index) => (
                <div className={a.item} key={index}>
                    <img src={item.thumbnail_pic_s} />
                    <p><a>{item.title}</a>1604张照片</p>
                </div>
            )) : '没有加载到热点内容';
        return (
            <div className={a.container}>
                <p>热点内容······<span>(<a>更多</a>)</span></p>
                    <div className={a.itemContainer}>
                        {hotNewsImageList}
                    </div>
            </div>
        )
    }
}