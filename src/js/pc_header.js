import React from 'react';
const PCHeaderCss=require('../css/pc_header.css');
export default class PCHeader extends React.Component {
    render() {
        console.log(PCHeaderCss);
        
        return (
            <div className={PCHeaderCss.pc_header}>
                <span className={PCHeaderCss.hanzi}>豆瓣</span>
                <span className={PCHeaderCss.pinyin}>douban</span>
                <span className={PCHeaderCss.search}>
                <input placeholder='书籍、电影、音乐、小组、小站、成员' />
                <img src='/src/img/搜索.png'/>
                </span>
                <ul className={PCHeaderCss.ul}>
                    <li>读书</li>
                    <li>电影</li>
                    <li>音乐</li>
                    <li>小组</li>
                    <li>同城</li>
                    <li>FM</li>
                    <li>时间</li>
                    <li>豆品</li>
                </ul>
            </div>
        )
    }
}