import React from 'react'

const Login = () => {
    return (
        <>

<button type="button" className="btn1 btn btn-outline-success ms-2" data-bs-toggle="modal" data-bs-target="#loginModal">
                <span> <i className='fa fa-sign-in me-1'></i></span>   Login
            </button>


            <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel ">Login</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <button className="btn btn-primary w-100 mb-4 ">
                                <span><i className='fa fa-google'></i></span> Sign Up With Google
                            </button>

                            <button className="btn btn-primary w-100 mb-2 ">
                                <span><i className='fa fa-facebook'></i></span> Sign Up With Google
                            </button>

                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-primary w-100 mt-5">Submit</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Login