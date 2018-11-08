import React from 'react'
import '../index.css'
import Search from "./search";
import Main from './main'

export default class App extends React.Component{

    state = {
        searchName:''
    }

    setSearchName = (searchName) => {
        this.setState({searchName})
    }

    render(){
        return(
            <div>
                <div className="container">
                    <Search setSearchName = {this.setSearchName}/>
                    <Main searchName = {this.state.searchName}/>
                </div>
            </div>
        )
    }
}