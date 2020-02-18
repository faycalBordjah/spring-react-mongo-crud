import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Create = () => {

    const [contact, setContact] = useState({
        name: '',
        address: '',
        city: '',
        phone: '',
        email: '',
    })

    const onChange = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(contact);
        axios.post("http://localhost:8080/contacts", contact).then(
            (res) => {
                console.log(res.data);
            }
        )
    }

    return (
        <div className="container">
            <div>
                <Link to="/">
                    <span className="glyphicon glyphicon-plus-sign" aria-hidden="true">Contacts</span>
                </Link>
            </div>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h2 className="panel-title">
                        Add contact
                    </h2>
                </div>
                <div className="panel-body">
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label >Name: </label>
                            <input type="text" className="form-control" name="name" placeholder="Your name" onChange={onChange} value={contact.name} />
                        </div>
                        <div className="form-group">
                            <label>Address: </label>
                            <input type="text" className="form-control" name="address" placeholder="Your address" onChange={onChange} value={contact.address} />
                        </div>
                        <div className="form-group">
                            <label>City: </label>
                            <input type="text" className="form-control" name="city" placeholder="Your city" onChange={onChange} value={contact.city} />
                        </div>
                        <div className="form-group">
                            <label>Phone: </label>
                            <input type="text" className="form-control" name="phone" placeholder="Your phone" onChange={onChange} value={contact.phone} />
                        </div>
                        <div className="form-group">
                            <label>Email: </label>
                            <input className="form-control" type="text" name="email" placeholder="Your email" onChange={onChange} value={contact.email} />
                        </div>
                        <button type="submit" className="btn btn-primary"> Create</button>
                    </form>
                </div>
            </div>
        </div >);
}
export default Create;