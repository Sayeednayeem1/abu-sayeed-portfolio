import React from 'react';
import Typewriter from 'typewriter-effect';

const Home = () => {
    return (
        <div>
            <Typewriter
                options={{
                    strings: ['Hello', 'World'],
                    autoStart: true,
                    loop: true,
                }}
            />
        </div>
    );
};

export default Home;