import React, { useState } from 'react'

const ReactEvent = () => {

    const [title, setTitle] = useState('React Event and Hooks Concepts')
    const [bg, setBg] = useState('#d6cbd3')
    const [active, setActive] = useState('')

    const ClickMeHandler = () => {
        console.log("clicked");
        //set the title 
        setTitle('React Event and Hooks Concepts 🙋')

        //set bg color
        setBg('#e3eaa7');
        setActive('active');
    }

    const DubleClickMe = () => {
        setTitle('React Event and Hooks Concepts 💢')
        setBg('#3e4444');
    }




    return (
        <div class="react-event" style={{ backgroundColor: bg }}>

            <h1 className={active}>{title}</h1>
            <hr />
            <button onClick={() => ClickMeHandler()} className="btn btn-primary">Click Me</button>
            <hr />
            <button onClick={ClickMeHandler} onDoubleClick={DubleClickMe} className="btn btn-danger">Click Me</button>
            <hr />
            <button onMouseEnter={ClickMeHandler} onMouseLeave={DubleClickMe} className="btn btn-success">Click Me</button>
        </div>
    );
}


export default ReactEvent;