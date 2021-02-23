import React, { useState } from 'react';

export default function Greeting(props) {

    const [name, setName] = useState('Mary');
    const [sarname, setSarName] = useState('Poppins');

    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleSarNameChange = (e) => {
        setSarName(e.target.value);
    }

    return (
        <section>
            <label htmlFor="">
                Name
            </label>
            <input
                type="text"
                value={name}
                onChange={handleNameChange}
            />
            <label htmlFor="">
                Sar Name
            </label>
            <input
                type="text"
                value={sarname}
                onChange={handleSarNameChange}
            />
        </section>
    )
}