import React, { useState } from 'react';
import Common from '../components/common/Common';
const ContactCompoent = () => {
    const [state, setstate] = useState({
        fullname: '',
        phone: '',
        email: '',
        message: '',
    })
    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My Name is ${state.fullname}. My Mobile Number is ${state.phone} and email is ${state.email}, Here is what I want to say ${state.message}`);

    }
    const InputEvent = (event) => {
        const { name, value } = event.target;
        setstate((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        })
    }
    useCallback(() => {
        document.title = "Talks Techy | Contact US";
    })
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact US</h1>
            </div>
            <div className="container container-div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="form-group">
                                <label for="exampleFormControlInput1">Full Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1"
                                    name="fullname"
                                    value={state.fullname}
                                    onChange={InputEvent}
                                    placeholder="Enter you name" />
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlInput1">Phone</label>
                                <input type="number" className="form-control" id="exampleFormControlInput1"
                                    name="phone"
                                    value={state.phone}
                                    onChange={InputEvent}
                                    placeholder="Mobile Number" />
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlInput1">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1"
                                    name="email"
                                    value={state.email}
                                    onChange={InputEvent}
                                    placeholder="name@example.com" />
                            </div>


                            <div className="form-group">
                                <label for="exampleFormControlTextarea1">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                                    name="message"
                                    value={state.message}
                                    onChange={InputEvent}></textarea>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-outline-primary">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactCompoent;