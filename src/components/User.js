import React, {Component} from "react"; 


class User extends Component{

    // constructor(props){
    //     super(props);

    //     this.DeleteUser = this.DeleteUser.bind(this); // this görsün diye içini bind ediyoruz compt arası hangisine tıkladığımı anlamak için
            ////onClick={this.DeleteUser.bind(this)} böylede yapılabilir 2.yöntem
    // }

    render(){
        const {id, name, Email} = this.props

        return(
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{Email}</td>
                <td>
                    <button onClick={this.DeleteUser.bind(this, id)} className="btn btn-danger">Delete</button>
                </td>

            </tr>
        )
    }
    
    DeleteUser(id, e){
        const {deleteUser} = this.props
        deleteUser(id); // en üstten gelen fonk.
    }
}

export default User;

