
import React, { Component } from 'react';  
import AddUser from './components/AddUser';
import Users from './components/Users';
  
class App extends Component {  
  constructor(props){  
    super(props);  
    
    this.deleteUser = this.deleteUser.bind(this);  //this' i  delete user'a bind ettik
    this.addUser = this.addUser.bind(this);  //this' i  delete user'a bind ettik

    this.state = {  
         users: [
          {
            id:1,
            name: "Ahmet Keskin",
            Email: "keskin@gmail.com"
          },
          {
            id:2,
            name: "Mustafa Keskin",
            Email: "keskinMıstık@gmail.com"
          },
          {
            id:3,
            name: "ebrar koca",
            Email: "koca@gmail.com"
          },
         ]  
      }  
  }  

  deleteUser(id) {
    let updatedUsers = this.state.users;
    updatedUsers = updatedUsers.filter((user) => user.id !== id) // aslında id ile olmayını filtreledik 

    // statelerde değişiklik yaparken setState yapmak zorundayız
    this.setState({
        users: updatedUsers
    })
  }
  
  addUser(newUser) {
    let updatedUsers = this.state.users;
    updatedUsers.push(newUser);
    
    this.setState({
      users : updatedUsers
    })

  }

  render() {  
    return (       
      <div className="container">  
      
        <AddUser addUser = {this.addUser}/>
        <br/>
        <Users users = {this.state.users}  deleteUser = {this.deleteUser}/>   {/*alt componente veri aktarımı state yönetimi ve burada oluşturuluş delete fonk. alt complarda kullanıyoruz */} 

      </div>  
    );  
  }  
}  
export default App; 
