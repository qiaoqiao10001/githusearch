import React from 'react'
import PropTypes from 'prop-types'

export default class Search extends React.Component{

    static propTypes = {
        setSearchName:PropTypes.func.isRequired
    }
    search = () => {
        //得到关键字，
        const searchName = this.input.value.trim()

        //
        // 搜索
        if(searchName){
            this.props.setSearchName(searchName)
        }
    }


    render(){
        return (
            <div>
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">Search Github Users</h3>
                    <div>
                        <input type="text" placeholder="enter the name you search" ref={input => this.input = input}/>
                        <button onClick={this.search}>Search</button>
                    </div>
                </section>
            </div>
        )
    }
}