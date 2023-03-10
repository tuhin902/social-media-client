import React, { useEffect, useState } from 'react';
import Singlesection from './Singlesection';

const SecondSection = ({ count }) => {
    const [section, setsection] = useState();

    useEffect(() => {
        fetch("https://social-media-server-three-liart.vercel.app/posts")
            .then((res) => res.json())
            .then((data) => {
                setsection(data);
            });
    }, [count]);
    console.log(section);

    return (
        <div className='mt-16'>

            <div>
                {section?.map((singlesec) => (
                    <Singlesection
                        singlesec={singlesec}
                        key={singlesec._id}
                    ></Singlesection>
                ))}
            </div>
        </div>
    );
};

export default SecondSection;