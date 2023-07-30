import axios from 'axios';
import { parse } from 'cookie';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
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
    const [step, setStep] = useState(1);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('Warning!');
    const [errorVisibility, setErrorVisibility] = useState('invisible');
    const [disabledSubmit, setDisabledSubmit] = useState(false);

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
                    });

                    if (response.data.verified) {
                        // Process and store cookies from the response
                        const cookies = response.headers

                        console.log(cookies);
                        // cookies.forEach((cookie) => {
                        //     document.cookie = cookie;
                        //     console.log(cookie);
                        // });
                        submitSuccess(response.data.message, setTimeout(() => {
                            setStep(step + 1);
                            setErrorVisibility('invisible');
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

        // if (error) {
        //     setTimeout(() => {
        //         submitReset();
        //     }, timeout);
        // }
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

    return (
        <>
            <NavigationBar onError={error} />
            <main>
                <div className={`alert alert-${CONTENT.NAV_COLOR} mb-0 rounded-0`}>
                    <Container>
                        <Row>
                            <Col sm={12} md={12} lg={5} className="d-flex justify-content-center align-middle">
                                <img src={logo} className="img-fluid d-none d-lg-block" alt="..." />
                            </Col>
                            <Col sm={12} md={12} lg={7} className="d-flex align-items-center">
                                <Container className="d-block my-5">
                                    <div className="alert alert-light position-relative shadow p-3">
                                        <form ref={formLogin} onSubmit={handleSubmit}>
                                            <span className={`fs-6 position-absolute top-0 start-100 translate-middle badge rounded-pill bg-${CONTENT.NAV_COLOR}`}>{error ? 'ERROR!' : `${step} of ${titles.length}`}</span>
                                            <div className="d-flex justify-content-between">
                                                <div className="fs-4 fw-bold">{titles[step - 1]}</div>
                                            </div>
                                            <div className="fs-6">Plase enter your credentials.</div>
                                            <small className={`d-block mb-2 ${errorVisibility} ${error ? 'text-danger' : 'text-success'} fs-bold`}>{errorMessage}</small>
                                            <fieldset className={step === 1 ? 'd-block active' : 'd-none'}>
                                                <div className="form-floating mb-3">
                                                    <input name="username" type="text" className="form-control required" minLength="8" placeholder="Username" autoComplete="off" autoFocus="on" pattern="^\w+$" title="The username must consist of alphanumeric characters and underscores." />
                                                    <label>Username</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input name="password" type="password" className="form-control required" minLength="8" placeholder="Password" autoComplete="off" />
                                                    <label>Password</label>
                                                </div>
                                                <div className="d-md-flex justify-content-md-between d-block">
                                                    <div className="form-check mb-md-3 mb-1">
                                                        <input name="remember" className="form-check-input" type="checkbox" value="true" placeholder="Remember me" />
                                                        <label className="form-check-label">Stay signed in</label>
                                                    </div>
                                                    <div className="form-check mb-3">
                                                        <Link className={`text-decoration-none fs-6 ${error ? 'text-secondary' : 'text-danger'}`} to={error ? null : ROUTE.PUBLIC.FORGOT_PASSWORD}>Forgot Password</Link>
                                                    </div>
                                                </div>
                                            </fieldset>
                                            <fieldset className={step === 2 ? 'd-block active' : 'd-none'}>
                                                <div className="form-floating mb-3">
                                                    <input name="otp" type="number" min="0" max="999999" className="form-control required" placeholder="One-Time Password" pattern="9\d{9}" autoComplete="off" />
                                                    <label>One-time Password</label>
                                                </div>
                                                <div className="d-md-flex justify-content-md-between d-block">
                                                    <div className="form-floating mb-3">
                                                        <button type="button" className={`fs-6 text-${CONTENT.NAV_COLOR} border-0 bg-transparent`}>Resend code</button>
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <div className="fs-6">Expires in 00m 00s</div>
                                                    </div>
                                                </div>
                                            </fieldset>
                                            <button type="submit" className={`btn btn-${CONTENT.NAV_COLOR} w-100`} disabled={disabledSubmit}>{(step === titles.length) ? 'Submit' : 'Next'}</button>
                                        </form>
                                    </div>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </main>
            <Footer />
        </>
    );
};

export { Login as PublicLogin };

