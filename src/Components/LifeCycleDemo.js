import React from "react";

class successComponent extends React.Component
{
    componentDidMount(){
        alert('success component will render');
    }
    componentWillMount(){
        alert('success component will unmount');
    }
    render(){
        return(
            <div>
                <h2>Login success..</h2>
            </div>
        )
    }
}
class ErrorComponent extends React.Component
{
   componentDidMount(){
    alert('Error component will render');
   }
   componentWillUnmount(){
    alert('Error component will umount');
   }
   render(){
    return(
        <div>
            <h2>Invalid Login</h2>
        </div>
    )
   }
}

export default class LifeCycleDemo extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
       UserDetails : {
        UserName: 'john_nit',
        Password: 'john@11'
       },
       FormDetails: {
        UserName: '',
        Password: '',
       },
       result: ''   
        }
        this.handleUserName = this.handleUserName.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
    }
    handleUserName(event){
        this.setState({
            FormDetails: {
                UserName: event.target.value,
                Password: this.state.FormDetails.Password
            }
        })
    }
    handlePassword(event){
        this.setState({
            FormDetails: {
                UserName: this.state.FormDetails.UserName,
                Password: event.target.value
            }
        })
    }
    handleLoginClick(){
    if(this.state.FormDetails.UserName==this.state.UserDetails.UserName && this.state.FormDetails.Password==this.state.UserDetails.Password){
        this.setState({
            result: <successComponent />
        })
    }else{
        this.setState({
            result: <ErrorComponent />
        })
    }
    }
    render(){
        return(
            <div className="container-fluid">
                <dl>
                    <dt>User Name</dt>
                    <dd><input onChange={this.handleUserName} type="text" /></dd>
                    <dt>Password</dt>
                    <dd><input onChange={this.handlePassword} type="Password" /></dd>
                </dl>
                <button onClick={this.handleLoginClick}>Login</button>
                <div>
                    {this.state.result}
                </div>
            </div>
        )
    }
}