import React, { useContext } from 'react';
import { GoogleAuthProvider } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const Signup = () => {
    const googleProvider = new GoogleAuthProvider();
    const { createUser, googleSignin } = useContext(AuthContext);
    const navigate = useNavigate();

    const handlesignup = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const university = form.university.value;
        const address = form.address.value;
        const password = form.password.value;

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                if (user) {
                    fetch("http://localhost:4000/users/new", {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify({ name, email, university, address }),
                    })
                        .then((response) => response.json())
                        .then((data) => console.log(data))
                        .catch((error) => console.log(error));
                }
                console.log(user);
                toast.success('successfully registered')
                navigate('/');
            })
            .catch((error) => console.log(error));

    };

    const handleGoogle = () => {
        googleSignin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error));
    }

    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl font-bold">Sign up</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl shadow-purple-500 ">
                        <form onSubmit={handlesignup} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-1xl ">
                                        Name
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="name"
                                    className="input input-bordered"
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
                                    className="input  input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-1xl  ">
                                        university
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="university"
                                    placeholder="university"
                                    className="input  input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-1xl  ">
                                        address
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="address"
                                    placeholder="ad"
                                    className="input  input-bordered"
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
                                    className="input  input-bordered"
                                />
                                <label className="label">
                                    <Link to='/login'
                                        href="#"
                                        className="label-text-alt  link link-hover"
                                    >
                                        Login please
                                    </Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn all-btn">Signup</button>
                                <button onClick={handleGoogle} className='btn btn-outline w-full mt-3'>CONTINUE WITH GOOGLE</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;