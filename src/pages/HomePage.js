import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import UserListComponent from "../component/UserListComponent";
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import ReactLoading from "react-loading";
export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state={
            users:[
                {
                    id:uuidv4(),
                    name:'Nazli',
                    surname:'Memmedova',
                    age:18
                },
                {
                    id:uuidv4(),
                    name:'Xedice',
                    surname:'Memmedova',
                    age:17
                },
                {
                    id:uuidv4(),
                    name:'Kenan',
                    surname:'Memmedov',
                    age:21
                },
                {
                    id:uuidv4(),
                    name:'Taleh',
                    surname:'Rzayev',
                    age:21
                },
            ],
            loading:true,
        };
        this.addUser=this.addUser.bind(this);
        this.deleteUser=this.deleteUser.bind(this);
        this.editUser=this.editUser.bind(this);
    }
    addUser=(name,surname,age)=>{
        if((name,surname,age)){
            const users=[...this.state.users]
            users.push({
                id:uuidv4(),
                name:name,
                surname:surname,
                age:age
            })
            this.setState({users});
            toast.success(`"${name}" adli istifadeci elave edildi.`)
        }else{
            toast.error("Please fill all fields.");
    }
    }
    deleteUser=(obj)=>{
        const users=this.state.users.filter(user=>user.id!=obj.id)
        this.setState({users})
        toast.success(`"${obj.name}" adli istifadeci silindi.`)

    }
    editUser=(id,name,surname,age)=>{
        if((id,name,surname,age)){
            const users=[...this.state.users]
            let updateUsers=users.map((user)=>{
                if(user.id===id){
                    user={
                        id:id,
                        name:name,
                        surname:surname,
                        age:age
                    }
                }
                return user;
            })
            toast.success(`"${name}" adli istifadeci update olundu.`)
            this.setState({
                users:updateUsers,
            })
        }
    }
    componentDidMount() {
        setTimeout(() => {
          this.setState({
            loading: false,
          });
        }, 2000);
      }
    render() {
    return (
      <div>
        {
            this.state.loading ?(
                <div className="container">
                <div className="d-flex align-items center justify-content-center mt-5">
                  <ReactLoading
                    type="spokes"
                    color="orange"
                    height={"20%"}
                    width={"20%"}
                  />
                </div>
              </div>
            ):(
                <>
                <ToastContainer/>
        <Navbar color="light" expand="md" light>
          <div className="container">
            <NavbarBrand href="/">DataTable</NavbarBrand>
          </div>
        </Navbar>
          <UserListComponent
           users={this.state.users}
            addUser={this.addUser}
             deleteUser={this.deleteUser}
             editUser={this.editUser}
             />
                </>
            )
        }
      </div>
    );
  }
}
