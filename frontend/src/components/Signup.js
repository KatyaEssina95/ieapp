import React, { Component } from "react";
import axiosInstance from "../axiosApi";
import { Button, FormGroup, FormControl, FormLabel, FormControlFeedback, Form, Col } from "react-bootstrap";

class Signup extends Component{
    constructor(props){
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            username: "",
            password: "",
            email:"",
            dob:"",
            phone_number:"",
            address_1:"",
            address_2:"",
            city:"",
            county:"",
            postcode:"",
            errors: {}
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    async handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await axiosInstance.post('/user/create/', {
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
                dob: this.state.dob,
                phone_number: this.state.phone_number,
                address_1: this.state.address_1,
                address_2: this.state.address2,
                city: this.state.city,
                county: this.state.county,
                postcode: this.state.postcode,
            });
            return response;
        } catch (error) {
             this.setState({
                errors: error.response.data
            });
            console.log(this.state.errors)
        }
    };

    hasError(key) {
        return key in this.state.errors;
    }

    render() {
        return (
            <div className="Login">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Row>
                        <FormGroup as={Col} md="6">
                            <FormLabel>First name</FormLabel>
                            <FormControl name="first_name" type="text"
                                className={
                                    this.hasError("first_name") ? "form-control is-invalid": "form-control"
                                }
                                value={this.state.first_name} onChange={this.handleChange}/>
                            <div className={this.hasError("first_name") ? "invalid-feedback" : "hidden"}>
                                {this.hasError("first_name") ? this.state.errors.first_name : '' }
                            </div>
                        </FormGroup>
                        <FormGroup as={Col} md="6">
                            <FormLabel>Last name</FormLabel>
                            <FormControl name="last_name" type="text"
                                className={
                                    this.hasError("last_name") ? "form-control is-invalid": "form-control"
                                }
                                value={this.state.last_name} onChange={this.handleChange}/>
                            <div className={this.hasError("last_name") ? "invalid-feedback" : "hidden"}>
                                {this.hasError("last_name") ? this.state.errors.last_name : '' }
                            </div>
                        </FormGroup>
                    </Form.Row>
                    <Form.Row>
                        <FormGroup as={Col} md="6">
                            <FormLabel>Username</FormLabel>
                            <FormControl name="username" type="text"
                                className={
                                    this.hasError("username") ? "form-control is-invalid": "form-control"
                                }
                                value={this.state.username} onChange={this.handleChange}/>
                            <div className={this.hasError("username") ? "invalid-feedback" : "hidden"}>
                                {this.hasError("username") ? this.state.errors.username : '' }
                            </div>
                        </FormGroup>
                        <FormGroup as={Col} md="6">
                            <FormLabel>Password</FormLabel>
                            <FormControl name="password" type="password"
                                className={
                                    this.hasError("password") ? "form-control is-invalid": "form-control"
                                }
                                value={this.state.password} onChange={this.handleChange}/>
                            <div className={this.hasError("password") ? "invalid-feedback" : "hidden"}>
                                {this.hasError("password") ? this.state.errors.password : '' }
                            </div>
                        </FormGroup>
                    </Form.Row>
                    <Form.Row>
                        <FormGroup as={Col} md="12">
                            <FormLabel>Email</FormLabel>
                            <FormControl name="email" type="email"
                                className={
                                    this.hasError("email") ? "form-control is-invalid": "form-control"
                                }
                              value={this.state.email} onChange={this.handleChange}/>
                            <div className={this.hasError("email") ? "invalid-feedback" : "hidden"}>
                                {this.hasError("email") ? this.state.errors.email : '' }
                            </div>
                        </FormGroup>
                    </Form.Row>
                    <Form.Row>
                        <FormGroup as={Col} md="6">
                            <FormLabel>Date of Birth</FormLabel>
                            <FormControl name="dob" type="date"
                                className={
                                    this.hasError("dob") ? "form-control is-invalid": "form-control"
                                }
                              value={this.state.dob} onChange={this.handleChange}/>
                            <div className={this.hasError("dob") ? "invalid-feedback" : "hidden"}>
                                {this.hasError("dob") ? this.state.errors.dob : '' }
                            </div>
                        </FormGroup>
                        <FormGroup as={Col} md="6">
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl name="phone_number" type="tel"
                                className={
                                    this.hasError("phone_number") ? "form-control is-invalid": "form-control"
                                }
                              value={this.state.phone_number} onChange={this.handleChange}/>
                            <div className={this.hasError("phone_number") ? "invalid-feedback" : "hidden"}>
                                {this.hasError("phone_number") ? this.state.errors.phone_number : '' }
                            </div>
                        </FormGroup>
                    </Form.Row>
                    <FormGroup>
                        <FormLabel>Address</FormLabel>
                        <FormControl name="address_1" type="text"
                                className={
                                    this.hasError("address_1") ? "form-control is-invalid": "form-control"
                                }
                              value={this.state.address_1} onChange={this.handleChange}/>
                            <div className={this.hasError("address_1") ? "invalid-feedback" : "hidden"}>
                                {this.hasError("address_1") ? this.state.errors.address_1 : '' }
                            </div>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Address 2</FormLabel>
                        <FormControl name="address_2" type="text"
                                className={
                                    this.hasError("address_2") ? "form-control is-invalid": "form-control"
                                }
                              value={this.state.address_2} onChange={this.handleChange}/>
                            <div className={this.hasError("address_2") ? "invalid-feedback" : "hidden"}>
                                {this.hasError("address_2") ? this.state.errors.address_2 : '' }
                            </div>
                    </FormGroup>
                    <Form.Row>
                        <FormGroup as={Col}>
                            <FormLabel>City</FormLabel>
                            <FormControl name="city" type="text"
                                className={
                                    this.hasError("city") ? "form-control is-invalid": "form-control"
                                }
                              value={this.state.city} onChange={this.handleChange}/>
                            <div className={this.hasError("city") ? "invalid-feedback" : "hidden"}>
                                {this.hasError("city") ? this.state.errors.city : '' }
                            </div>
                        </FormGroup>
                       <FormGroup as={Col}>
                            <FormLabel>County</FormLabel>
                            <FormControl name="county" type="text"
                                className={
                                    this.hasError("county") ? "form-control is-invalid": "form-control"
                                }
                              value={this.state.county} onChange={this.handleChange}/>
                            <div className={this.hasError("county") ? "invalid-feedback" : "hidden"}>
                                {this.hasError("county") ? this.state.errors.county : '' }
                            </div>
                        </FormGroup>
                       <FormGroup as={Col}>
                            <FormLabel>Postcode</FormLabel>
                            <FormControl name="postcode" type="text"
                                className={
                                    this.hasError("postcode") ? "form-control is-invalid": "form-control"
                                }
                              value={this.state.postcode} onChange={this.handleChange}/>
                            <div className={this.hasError("postcode") ? "invalid-feedback" : "hidden"}>
                                {this.hasError("postcode") ? this.state.errors.postcode : '' }
                            </div>
                        </FormGroup>
                    </Form.Row>
                <Button block size="large" type="submit">
                    Sign Up
                </Button>
                <label>Already have an account?</label>
                <Button variant="link" type="button" href="/login/">
                    Log In
                </Button>
            </Form>
        </div>);
    };
};

export default Signup;