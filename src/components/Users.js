import React, {Component} from "react"
import User from "./User";

class Users extends Component{

    render(){
        const { users, deleteUser } = this.props;

        return(
            <div>
                <table className="table table-white">
                <thead>
                    <tr>
                    <th scope="col">id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Delete</th>
                    </tr>
                </thead>

                <tbody>     
                    {
                        users.map(user =>{
                            const {id, name, Email} = user;

                            return <User
                                key = {id}
                                id = {id}
                                name = {name}
                                Email = {Email}
                                deleteUser = {deleteUser} // yukarıdan gelen fonk.
                            />
                        }                      
                    )
                    
                    }
                </tbody>

                </table>
            </div>
        )
    }
}
export default Users;
