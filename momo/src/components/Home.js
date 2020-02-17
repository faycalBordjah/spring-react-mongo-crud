import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



const Home = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/contacts').then(
            (res) => {
                setContacts(res.data);
                console.log(res.data)
            }
        ).catch((err) => console.log(err))
    }, []);


    return (

        <div className="Home">
            <header className="App-header">
                <nav>TO DO navbar</nav>
            </header>
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            Contact List
                            </h3>
                    </div>

                    <div className="panel-body">
                        <h4>
                            <Link to="/create">
                                <span className="glyphicon glyphicon-plus-sign" aria-hidden="true">Add Contact</span>
                            </Link>
                        </h4>
                        <table className="table table-stripe">
                            <thead>
                                <tr>
                                    <td>Name</td>
                                    <td>Adress</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    contacts.map((c, i) =>
                                        <tr key={i}>
                                            <td>
                                                {c.name}
                                            </td>
                                            <td>
                                                {c.address}
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;
