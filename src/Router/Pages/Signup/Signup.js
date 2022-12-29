import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl  font-bold">Sign up</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl shadow-purple-500 ">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-1xl ">
                                        Name
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="email"
                                    className="input  input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-1xl  ">
                                        Email
                                    </span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-1xl  ">
                                        Password
                                    </span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                />
                                <label className="label">
                                    <Link
                                        href="#"
                                        className="label-text-alt  link link-hover"
                                    >
                                        Login please
                                    </Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn all-btn">Signup</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;