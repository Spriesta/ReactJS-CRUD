import React, {Component} from "react";

class AddUser extends Component {
    
    constructor(props){
        super(props);
        this.newName = this.newName.bind(this); // this görsün diye içini bind ediyoruz compt arası hangisine tıkladığımı anlamak için
        this.newEmail = this.newEmail.bind(this);
            //onClick={this.DeleteUser.bind(this)} böylede yapılabilir 2.yöntem
    }
         
    state = {
        name: "",
        email: ""
    };
   
    render(){       
        const {name, email} = this.state;

        return(
            <div className="card">
                <h4 className="card-header">Add New User </h4>
                <div className="card-body">
                    <form onSubmit={this.onAddSubmit.bind(this)}>
                        <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name"
                         placeholder="Enter Name" className="form-control"
                         value={name} onChange = {this.newName}
                         />
                        </div>
                        <br/>
                        <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email"
                         placeholder="Enter Email" className="form-control"
                         value={email} onChange = {this.newEmail}
                         />
                        </div>
                        <br/>
                        <button type="submit" className="btn btn-success btn-block">Add New User</button>
                    </form>
                </div>
            </div>  
        )
    }

    newName(e){
        this.setState ({
            [e.target.name] : e.target.value
        })
    }

    newEmail(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onAddSubmit(e){
        e.preventDefault(); // sayfa yenilenmesini durduruyor

        const {addUser} = this.props;
        const {name, email} = this.state;

        const newUser = {
            id : Math.floor(Math.random() * 100)
            ,
            name: name,
            email:email
        }

        addUser(newUser);

    }

}
export default AddUser;