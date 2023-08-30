import React, { useState } from 'react';
import { Card, CardBody, Col, Container, Input, Label, Row, Button, Form } from 'reactstrap';
import ParticlesAuth from '../../components/unauthorised/ParticlesAuth'
import { useNavigate, Link } from 'react-router-dom'
import fossil01 from '../../assets/pictures/fossil01.png'
import { useDispatch } from 'react-redux';
import { isloggedin } from '../../store/auth.js/Islogged';

const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleemailchange = (e) => { setEmail(e.target.value); }
    const handlepasswordChange = (e) => { setPassword(e.target.value); }

    const uselogin = {
        "email": email,
        "password": password
    }

    const handlelogin = () => {
        if (uselogin.email !== "" && uselogin.password !== "") {
            dispatch(isloggedin())
            navigate('/')
        }
    }

    document.title = "Sign In | Fossil Asset Management";
    return (
        <React.Fragment>
            <ParticlesAuth>
                <div className="auth-page-content" >
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="text-center mt-sm-5 mb-4 text-white-50">
                                    <div>
                                        <Link to="/" className="d-inline-block auth-logo">
                                            <img src={fossil01} alt="" height="100" />
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <Row className="justify-content-center">
                            <Col md={8} lg={6} xl={5}>
                                <Card className="mt-4">
                                    <CardBody className="p-4">
                                        <div className="text-center mt-2">
                                            <h5 className="text-primary">Welcome Back !</h5>
                                            <p className="text-muted">Sign in to continue to Fossil Asset Management Platform.</p>
                                        </div>
                                        <div className="p-2 mt-4">
                                            <Form
                                                onSubmit={(e) => {
                                                    e.preventDefault();
                                                    handlelogin();
                                                    return false;
                                                }}
                                                action="#">

                                                <div className="mb-3">
                                                    <Label htmlFor="email" className="form-label">Email</Label>
                                                    <Input
                                                        name="email"
                                                        className="form-control"
                                                        placeholder="Enter email"
                                                        type="email"
                                                        onChange={handleemailchange}
                                                        value={email || ""}
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <div className="float-end">
                                                        <Link to="/forgot-password" className="text-muted">Forgot password?</Link>
                                                    </div>
                                                    <Label className="form-label" htmlFor="password-input">Password</Label>
                                                    <div className="position-relative auth-pass-inputgroup mb-3">
                                                        <Input
                                                            name="password"
                                                            value={password || ""}
                                                            type="password"
                                                            className="form-control pe-5"
                                                            placeholder="Enter Password"
                                                            onChange={handlepasswordChange}
                                                        />
                                                        <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted" type="button" id="password-addon"><i className="ri-eye-fill align-middle"></i></button>
                                                    </div>
                                                </div>

                                                <div className="form-check">
                                                    <Input className="form-check-input" type="checkbox" value="" id="auth-remember-check" />
                                                    <Label className="form-check-label" htmlFor="auth-remember-check">Remember me</Label>
                                                </div>

                                                <div className="mt-4">
                                                    <Button color="success" className="btn btn-success w-100" type="submit" style={{ backgroundColor: "#01390a" }}>Sign In</Button>
                                                </div>
                                            </Form>
                                        </div>
                                    </CardBody>
                                </Card>

                                <div className="mt-4 text-center">
                                    <p className="mb-0">Don't have an account ? <Link to="/register" className="fw-semibold text-primary text-decoration-underline"> Signup </Link> </p>
                                </div>

                            </Col>
                        </Row>
                    </Container>
                </div>
            </ParticlesAuth>
        </React.Fragment>
    );
};

export default Login;