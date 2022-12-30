import React, { useState } from 'react';
import FirstSection from '../../FirstSection/FirstSection';
import SecondSection from '../../SecondSection/SecondSection';

const Home = () => {
    const [count, setcount] = useState(0);

    return (
        <div>
            <div className="flex flex-row bg-indigo-100">
                <div className="basis-1/4"></div>
                <div className="basis-6/12">
                    <FirstSection setcount={setcount}></FirstSection>
                    <SecondSection count={count}></SecondSection>
                </div>
                <div className="basis-1/4"></div>
                {/* <Sectionsection count={count}></Sectionsection> */}
            </div>
        </div>
    );
};

export default Home;