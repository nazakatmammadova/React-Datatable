import React, { Component } from "react";
import {
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
export default class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:null,
      name: "",
      surname: "",
      age: "",
    };
  }
  onSubmit(){
    this.props.addUser(
        this.state.name, 
        this.state.surname,
        this.state.age
        )
        if ((this.state.name, this.state.surname, this.state.age)) {
          this.props.hide();
        }
  }

  onUpdate(){
    this.props.editUser(
      this.state.id,
      this.state.name, 
      this.state.surname,
      this.state.age
      )
      this.props.hide();
  }

  componentDidMount(){
    this.setState({
      id:this.props.user.id,
      name:this.props.user.name,
      surname:this.props.user.surname,
      age:this.props.user.age,
    })
    // console.log(this.props.user);
  }
  render() {
    return (
      <Modal isOpen={this.props.visible} fade={false}>
        <ModalHeader>{this.props.title}</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
              value={this.state.name}
               onChange={(e)=>this.setState({name:e.target.value})}
                id="name"
                name="name"
                placeholder="Add your name"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="surname">Surname</Label>
              <Input
                  value={this.state.surname}
              onChange={(e)=>this.setState({surname:e.target.value})}
                id="surname"
                name="surname"
                placeholder="Add your surname"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="age">Age</Label>
              <Input
                    value={this.state.age}
              onChange={(e)=>this.setState({age:e.target.value})}
                id="age"
                name="age"
                placeholder="Add your age"
                type="number"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
        {
          this.props.user.id ? (
          <button className="btn btn-success"
           onClick={()=>this.onUpdate()}>Update</button>
          ):(<button className="btn btn-success"
          onClick={()=>this.onSubmit()}>Submit</button>)
        }
          <button className="btn btn-danger"
           onClick={() => this.props.hide()}>
            Cancel
          </button>
        </ModalFooter>
      </Modal>
    );
  }
}
