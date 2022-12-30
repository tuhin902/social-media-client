import React from 'react';
import { BsSuitHeartFill } from "react-icons/bs";
import { AiTwotoneLike } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Singlesection = ({ singlesec }) => {
    return (
        <div className='flex justify-center'>
            <div className="card w-full lg:w-3/4  mb-4 bg-slate-100  shadow-xl">
                <figure>
                    <img src={singlesec.img} alt="" />
                </figure>
                <div className="card-body">
                    <p className="text-1xl font-bold">
                        {singlesec.textarea.slice(0, 100) + "..."}
                    </p>
                    <div className="card-actions justify-start">
                        <button className="mr-4">
                            {/* <span>{singlesec.love}</span> */}
                            <BsSuitHeartFill className="love-react text-2xl"></BsSuitHeartFill>
                        </button>
                        <button>
                            <AiTwotoneLike className="like-react text-2xl"></AiTwotoneLike>
                        </button>
                    </div>
                    <Link to={`detail/${singlesec._id}`}>
                        <button className="btn all-btn  bg-pink-500">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Singlesection;