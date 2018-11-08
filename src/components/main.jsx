import React from 'react'
import PropTypes  from 'prop-types'
import axios from 'axios'

export default class Main extends React.Component{
    static propTypes = {
        searchName: PropTypes.string.isRequired
    }
    state = {
        initView:true,
        loading:false,
        errorMsg:null,
        users:null
    }

    componentDidMount(){

    }

    //当组件接受到新的属性的时候的回调
    componentWillReceiveProps(newProps){
        const {searchName} = newProps
        //更新状态；请求中
        this.setState({
            initView:false,
            loading:true
        })
        //发送ajax请求
        const url = `https://api.github.com/search/users?q=${searchName}`
        axios.get(url)
            .then(res => {
                const result = res.data.items
                console.log(result)
                //const users = result.map(item => ({name:item.login}))
                const users = result.map(item => {
                    return {name:item.login,url:item.html_url,avatarUrl:item.avatar_url}
                })
                this.setState({
                    loading:false,
                    users
                })
            })
            .catch(error => {
                this.setState({
                    loading:false,
                    errorMsg:error.message
                })
            })

    }

    render(){
        const {initView,loading,errorMsg,users} = this.state
        const {searchName} = this.props
        if(initView){
            return <h2>请输入用户姓名搜索：{searchName}</h2>
        }else if(loading){
            return <h2>搜索中，请等待。。。</h2>
        }else if(errorMsg){
            return <h2>{errorMsg}</h2>
        }else{
           return (
               <div className="row">
                   {

                       users.map((user,idx) => (
                           <div className="card" key={idx}>
                               <a href={user.url} target="_blank">
                                   <img src={user.avatarUrl} style={{width:'100px'}}/>
                               </a>
                               <p className="card-text">{user.name}</p>
                           </div>
                       ))
                   }
               </div>


            )
        }

    }
}