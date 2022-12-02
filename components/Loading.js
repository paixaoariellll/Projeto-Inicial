import Image from 'next/image';
import React from 'react';
import fish from '../publi/fish.png';

function Loading() {
    return (
        <center>
            <div>
                <Image src={fish} width={300} height={300}
                    alt="loading"
                    style={{ marginBottom: 10 }}
                />
                <Circle color="#696969" size={350} />
            </div>
        </center>
    )
}

export default Loading