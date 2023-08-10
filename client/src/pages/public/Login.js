import axios from 'axios';
// import { parse } from 'cookie';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Col, Container, Row, Alert, Badge, Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

import Footer from '../../components/Footer';
import NavigationBar from '../../components/NavigationBar';
import CONTENT from '../../config/content';
import ROUTE from '../../config/routes';

import logo from '../../assets/images/logo.svg';

/**
 * 
 * 
 * 
 * 
 **/
const Login = () => {

    const navigate = useNavigate();
    const formLogin = useRef(null);
    const titles = ['Account Login', 'OTP Verification'];
    const timeout = 3000;
    const resendTimelimit = 59;
    const [step, setStep] = useState(1);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('Warning!');
    const [errorVisibility, setErrorVisibility] = useState('invisible');
    const [disabledSubmit, setDisabledSubmit] = useState(false);
    const [resendTime, setResendTime] = useState(resendTimelimit);
    const [resendOK, setResendOK] = useState(true);
    const [expirationTimer, setExpirationTimer] = useState(null);
    const [expirationTime, setExpirationTime] = useState(null);
    const background = CONTENT.BACKGROUND.COLOR || 'danger';
    const gradient = CONTENT.BACKGROUND.GRADIENT || false;

    const submitReset = useCallback(() => {
        if (error) {
            setError(false);
            setErrorMessage('Reset!');
            setErrorVisibility('invisible');
            setDisabledSubmit(false);

            const form = formLogin.current;
            const currentFieldset = form.querySelector('fieldset.active');
            const inputs = currentFieldset.querySelectorAll('input.required');
            inputs.forEach((input) => {
                input.classList.remove('is-invalid');
            });
        }
    }, [error]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = formLogin.current;
        const currentFieldset = form.querySelector('fieldset.active');
        const inputs = currentFieldset.querySelectorAll('input.required');

        const count = inputs.length;
        const valid = Array.from(inputs).reduce((acc, input) => (input.value.trim() !== '' ? (acc + 1) : acc), 0);

        const missing = Array.from(inputs).reduce((acc, input) => {
            const isValid = input.value.trim() !== '';
            if (!isValid) {
                input.classList.remove('is-valid');
                input.classList.add('is-invalid');
                acc.push(input.getAttribute('placeholder'));
            } else {
                input.classList.remove('is-invalid');
                input.classList.add('is-valid');
            }
            return acc;
        }, []);

        const submitError = (errorMsg, callback) => {
            setError(true);
            setErrorMessage(errorMsg);
            setErrorVisibility('visible');
            setDisabledSubmit(true);

            let firstNull = null;
            inputs.forEach(input => {
                if (input.value.trim() === '') {
                    if (!firstNull) {
                        firstNull = input;
                    }
                }
            });
            if (firstNull !== null) {
                firstNull.focus();
            }
            if (typeof callback === 'function') {
                callback();
            }
        };

        const submitSuccess = (successMsg, callback) => {
            setErrorMessage(successMsg);
            setErrorVisibility('visible');
            if (typeof callback === 'function') {
                callback();
            }
        }

        if (valid !== count) {
            submitError(`The ${missing.join(', ')} is missing.`);
        } else {
            const username = form.username;
            const password = form.password;
            const remember = form.remember;
            const otp = form.otp;

            switch (step) {
                case 1:
                    const response = await axios.post(ROUTE.API.AUTH.LOGIN, {
                        username: username.value,
                        password: password.value,
                        remember: remember.checked,
                        resend: false,
                    });

                    if (response.data.verified) {
                        const targetDate = new Date(response.data.expiration);

                        submitSuccess(response.data.message, setTimeout(() => {
                            setStep(step + 1);
                            setErrorVisibility('invisible');
                            startExpirationTimer(targetDate);
                        }, timeout / 3));
                    } else {
                        submitError(response.data.message, () => {
                            username.classList.remove('is-valid');
                            username.classList.add('is-invalid');
                            password.classList.remove('is-valid');
                            password.classList.add('is-invalid');
                        });
                    }
                    break;

                case 2:
                    const respo = await axios.post(ROUTE.API.AUTH.OTP, {
                        username: username.value,
                        password: password.value,
                        remember: remember.checked,
                        otp: otp.value,
                    });

                    if (respo.data.verified) {
                        submitSuccess(respo.data.message, setTimeout(() => {
                            navigate(respo.data.url);
                        }, timeout));
                    } else {
                        submitError(respo.data.message);
                        otp.classList.remove('is-valid');
                        otp.classList.add('is-invalid');
                    }
                    break;

                default:
                    // Default case for switch case
                    break;
            }
        }
    };

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                submitReset();
            }, timeout);
        }
        if (step === 2) {
            formLogin.current.otp.focus();
        }
    }, [error, step, submitReset]);

    const handleResendOTP = async () => {
        const username = formLogin.current.username.value;
        const password = formLogin.current.password.value;

        if (resendOK) {

            const response = await axios.post(ROUTE.API.AUTH.LOGIN, {
                username,
                password,
                resend: true,
            });

            if (response.data.verified) {
                const targetDate = new Date(response.data.expiration);
                startExpirationTimer(targetDate);

                setResendOK(false);
                clearInterval(expirationTimer);
            }
        }
    };

    const startExpirationTimer = (targetDate) => {
        if (expirationTimer) {
            clearInterval(expirationTimer);
        }
        const expTimer = setInterval(() => {
            const currentDate = new Date().getTime();
            const remainingTime = targetDate - currentDate;
            const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
            const paddedMinutes = minutes.toString().padStart(2, '0');
            const paddedSeconds = seconds.toString().padStart(2, '0');
            if (remainingTime <= 0) {
                clearInterval(expirationTimer);
                setExpirationTime('One-time PIN is expired.');
            } else {
                setExpirationTime(`Expires in ${paddedMinutes}m ${paddedSeconds}s`)
            }
        }, 1000);
        setExpirationTimer(expTimer);
    };

    useEffect(() => {
        if (resendOK) {
            setResendTime(resendTimelimit);
        } else {
            const resendTimer = setInterval(() => {
                if (resendTime <= 0) {
                    clearInterval(resendTimer);
                    setResendOK(true);
                } else {
                    setResendTime((prevTime) => prevTime - 1);
                }
            }, 1000);

            return () => {
                clearInterval(resendTimer);
            };
        }
    }, [resendOK, resendTime]);


    return (
        <>
            <NavigationBar onError={error} />
            <main>
                <Alert variant={background} className="mb-0 rounded-0">
                    <Container>
                        <Row>
                            <Col sm={12} md={12} lg={5} className="d-flex justify-content-center align-middle">
                                <img src={logo} className="img-fluid d-none d-lg-block" alt="..." />
                            </Col>
                            <Col sm={12} md={12} lg={7} className="d-flex align-items-center">
                                <Container className="d-block my-5">
                                    <Alert variant="light" className="position-relative shadow p-3">
                                        <Form ref={formLogin} onSubmit={handleSubmit}>
                                            <Badge bg={background} className={`fs-6 position-absolute top-0 start-100 translate-middle ${gradient ? 'bg-gradient' : ''}`}>{error ? 'ERROR!' : `${step} of ${titles.length}`}</Badge>
                                            <div className="d-flex justify-content-between">
                                                <div className="fs-4 fw-bold">{titles[step - 1]}</div>
                                            </div>
                                            <div className="fs-6">Plase enter your credentials.</div>
                                            <small className={`d-block mb-2 ${errorVisibility} ${error ? 'text-danger' : 'text-success'} fs-bold`}>{errorMessage}</small>
                                            <fieldset className={step === 1 ? 'd-block active' : 'd-none'}>
                                                <Form.Floating className="mb-3">
                                                    <Form.Control name="username" type="text" className="required" minLength="8" placeholder="Username" autoComplete="off" autoFocus="on" pattern="^\w+$" title="The username must consist of alphanumeric characters and underscores." />
                                                    <label>Username</label>
                                                </Form.Floating >
                                                <Form.Floating className="mb-3">
                                                    <Form.Control name="password" type="password" className="required" minLength="8" placeholder="Password" autoComplete="off" />
                                                    <label>Password</label>
                                                </Form.Floating >
                                                <div className="d-md-flex justify-content-md-between d-block">
                                                    <div className="form-check mb-md-3 mb-1">
                                                        <Form.Check.Input name="remember" type="checkbox" value="true" />
                                                        <Form.Check.Label>Stay signed in</Form.Check.Label>
                                                    </div>
                                                    <div className="form-check mb-3">
                                                        <Link className={`text-decoration-none fs-6 ${error ? 'text-secondary' : 'text-danger'}`} to={error ? null : ROUTE.PUBLIC.FORGOT_PASSWORD}>Forgot Password</Link>
                                                    </div>
                                                </div>
                                            </fieldset>
                                            <fieldset className={step === 2 ? 'd-block active' : 'd-none'}>
                                                <Form.Floating className="mb-3">
                                                    <Form.Control name="otp" type="number" min="0" max="999999" className="required" placeholder="One-Time Password" pattern="9\d{9}" autoComplete="off" />
                                                    <label>One-time Password</label>
                                                </Form.Floating>
                                                <div className="d-md-flex justify-content-md-between d-block">
                                                    <Form.Floating className="mb-3">
                                                        <Button type="button" disabled={!resendOK} className={`fs-6 text-${background} border-0 bg-transparent`} onClick={handleResendOTP}>Resend code {resendTime === resendTimelimit ? null : `available in ${resendTime}s`}</Button>
                                                    </Form.Floating>
                                                    <Form.Floating className="mb-3">
                                                        <div className="fs-6">{expirationTime}</div>
                                                    </Form.Floating>
                                                </div>
                                            </fieldset>
                                            <Button variant={background} type="submit" className="w-100" disabled={disabledSubmit}>{(step === titles.length) ? 'Submit' : 'Next'}</Button>
                                        </Form>
                                    </Alert>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </Alert>
            </main>
            <Footer />
        </>
    );
};

export { Login as PublicLogin };

