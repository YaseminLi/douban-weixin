import React from 'react';
import PCHeader from './pc_header';
import PCNewUser from './pc_newUser';
import PCHotNews from './pc_hotNews';
import PCFooter from './pc_footer';
const PCMainCss=require('../css/pc_main.css')
export default class PCMain extends React.Component{
    render(){
        return(
            <div className={PCMainCss.mainWidth}>
                <PCHeader/>
                <PCNewUser/>
                <PCHotNews/>
                <PCFooter/>
            </div>
            
        )
    }
}