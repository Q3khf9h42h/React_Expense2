import React, {Component} from 'react';
import './Login.css';
 
class Register extends Component{
state={
    email:'',
    password:'',
    displayName:'',
    fireErrors:''

}
render(){
    return(
    <>
    <form>
        <input type="text" 
        className="regField"
        placeholder="Your Name"
        name="email"/>
         
         <input type="text" 
        className="regField"
        placeholder="Email"
        name="email"/>
         
         <input type="password" 
        className="regField"
        placeholder="Password"
        name="password"/>
        
        <input type="submit " 
        className="submitBtn"
        value="ENTER"/>
      
       
</form>

    </>
    );
}
}
export default Login;
 