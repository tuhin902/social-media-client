import React from 'react';
import { toast } from 'react-hot-toast';

const FirstSection = ({ setcount }) => {

    const handlesubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const img = form.img.value;
        const textarea = form.textarea.value;

        const response = await fetch(
            "http://localhost:4000/posts/new",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ img, textarea }),
            }

        );

        const data = await response.json();
        setcount((prev) => prev + 1);
        toast.success('post added')
        console.log(data);
    };

    return (
        <div className='flex items-center flex-col w-full' >
            <h1 className="text-3xl font-bold  mb-6 text-pink-700">
                {" "}
                What do you think?
            </h1>
            <div>
                <form onSubmit={handlesubmit} >
                    <input
                        type="file"
                        name="img"
                        placeholder="Type here"
                        className="input w-full input-bordered rounded "
                    />
                    <br />
                    <textarea className="textarea textarea-bordered rounded w-full h-5 mt-5" placeholder="Bio"
                        name="textarea"
                    ></textarea>
                    <br />
                    <button
                        className="btn all-btn w-80 mt-3 "
                        type="submit"
                    >
                        submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FirstSection;