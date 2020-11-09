import React, { useState } from "react";
import { Col, Button, Form, FormGroup, Label, Input, Card, CardTitle, CardText, CardSubtitle} from "reactstrap";
import * as yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";

const PizzaForm = (props) =>{
const formSchema = yup.object().shape({
    name: yup.string().min(2, "Must be atleast 2 characters long").required("Name is a required field"),
    size: yup.string().required("Please Choose a Size"),
    pepperoni: yup.string(),
    mushroom: yup.string(),
    beef: yup.string(),
    special: yup.string(),
    instructions: yup.string()

});

const [pizzaState, setPizzaState] = useState({
    name: "",
    size: "",
    pepperoni: false,
    mushroom: false,
    beef: false,
    special: false,
    instructions: ""
});

const [errorState, setErrorState] = useState({
    name: "",
    size: "",
    pepperoni: false,
    mushroom: false,
    beef: false,
    special: false,
    instructions: ""
});

const validate = e => {
    let value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    yup.reach(formSchema, e.target.name)
    .validate(value)
    .then(valid => {
        setErrorState({
            ...errorState,
            [e.target.name]: ""
        });
    }).catch( err => {
        setErrorState({
            ...errorState,
            [e.target.name]: err.errors[0]
        });
    });
};
const inputChange = e => {
    e.persist();
    validate(e);
    let value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setPizzaState({ ...pizzaState, [e.target.name]: value });
};

const [order, setOrder] = useState([]);

const formSubmit = e => {
    e.preventDefault();
    console.log("form submitted");

    axios
    .post("https://reqres.in/api/users", pizzaState)
    .then(res => {
        setOrder(res.data);
        console.log("completed", res);
    })
    .catch(err => console.log(err));
};


    return (
        <div>
           <Form className="pizzaForm" onSubmit={formSubmit} >
                <FormGroup >
                <Label for="name" >Name</Label>
                        <Input className="name" type="text" name="name" id="name" placeholder="John Doe" value={pizzaState.name} onChange={inputChange} />
                    {errorState.name.length > 2 ? <p className="error">{errorState.name}</p> : null }
                </FormGroup>
                <FormGroup row>
                    <Label for="size">Size</Label>
                    
                        <Input  size ="lg" className="size"type="select" name="size" id="size" value={pizzaState.size} onChange={inputChange} >
                        <option value="" >--Select A Size--</option>
                        <option value="Personal" >Personal</option>
                        <option value="Medium" >Medium</option>
                        <option value="Large" >Large</option>
                        <option value="Mega" >Mega</option>
                        </Input>
                        {errorState.size.length > 0 ? <p className="error">{errorState.size}</p> : null }
                </FormGroup>
                <FormGroup row>
                    <legend>Pick Your Toppings</legend>
                    <Col className="toppings" sm={10} >
                        <FormGroup className="toppingBox" check>
                            <Label for="pepperoni" check>
                                <Input  className="pepperoni" type="checkbox" name="pepperoni" value={pizzaState.pepperoni} onChange={inputChange} />{' '}
                                Pepperoni
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label for="mushroom" check>
                                <Input className="mushroom" type="checkbox" name="mushroom" value={pizzaState.mushroom} onChange={inputChange} />{' '}
                                Mushroom
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label for="beef" check>
                                <Input className="beef" type="checkbox" name="beef" value={pizzaState.beef} onChange={inputChange} />{' '}
                                Beef
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label for="special" check>
                                <Input className="special" type="checkbox" name="special" value={pizzaState.special} onChange={inputChange} />{' '}
                                Special
                            </Label>
                        </FormGroup>
                        <FormGroup check disabled>
                            <Label for="pineapple" check>
                                <Input type="checkbox" name="pineapple" disabled/>{' '}
                                Pineapple 
                            </Label>
                        </FormGroup>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="instructions" sm={2}>Special Instructions</Label>
                    <Col sm={10}>
                    <Input type="textarea" name="instructions" id="instructions" value={pizzaState.instructions} onChange={inputChange} />
                    </Col>
                </FormGroup>
                <Button type="submit" color="primary"  >Submit Order</Button>
            </Form>

            <div className="order">
                <Card>
                    <CardTitle>{order.name}</CardTitle>
                    <CardSubtitle>{order.size}</CardSubtitle>
                    <CardText>
                        {order.pepperoni === true ? "Pepperoni" : null}<br></br>
                        {order.mushroom === true ? "Mushroom" : null}<br></br>
                        {order.beef === true ? "Beef" : null}<br></br>
                        {order.special === true ? "Special" : null}<br></br>
                    </CardText>
                    <CardText>{order.instructions}</CardText>
                    {order === [""]  ? <Link to="/order" ><Button>Confirm</Button></Link> : null }
                </Card>
            </div>
        </div>
    );

    

    }

export default PizzaForm;