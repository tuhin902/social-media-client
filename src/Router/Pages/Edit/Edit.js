import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Edit = () => {
    const { user } = useContext(AuthContext);
    const [about, setabout] = useState();
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:4000/users?email=${user?.email}`)
            .then((res) => res.json())
            .then((data) => setabout(data));
    }, [user]);

    const handleupdateuser = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const university = form.university.value;
        const address = form.address.value;
        console.log(name, email, university, address);

        fetch(`http://localhost:4000/users/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ name, email, address, university }),
        })
            .then((res) => {
                res.json();
                navigate("/");
            })
            .then((data) => console.log(data));
    };
    return (
        <div>
            <div className="hero min-h-screen bg-black ">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left"></div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-black ">
                        <form onSubmit={handleupdateuser} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-purple-700">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="name"
                                    name="name"
                                    defaultValue={about?.name}
                                    className="input bg-gray-400 input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-purple-700">Email</span>
                                </label>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="email"
                                    defaultValue={about?.email}
                                    className="input bg-gray-400 input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-purple-700">University</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="university"
                                    name="university"
                                    defaultValue={about?.university}
                                    className="input  bg-gray-400 input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="address"
                                    name="address"
                                    defaultValue={about?.address}
                                    className="input bg-gray-400 input-bordered"
                                />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn all-btn">submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Edit;