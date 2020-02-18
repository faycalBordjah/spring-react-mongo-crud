import React, { useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Show = () => {
    let { id } = useParams();
    console.log(id);
    return (<div className="container">
        <div className="panel panel-default">
            <div className="panel-heading">
                <h3 className="panel-title">
                    Contact Details
                </h3>
            </div>
            <div className="panel-body">
                <h4><Link to="/">
                    <span className="glyphicon glyphicon-th-list" aria-hidden="true">
                        Contacts List
                    </span>
                </Link></h4>
                <dl>
                    <dt>Name:</dt>
                    <dd></dd>
                    <dt>Address:</dt>
                    <dd>toto</dd>
                    <dt>City:</dt>
                    <dd>toto</dd>
                    <dt>Phone Number:</dt>
                    <dd>toto</dd>
                    <dt>Email Address:</dt>
                    <dd>toto</dd>
                </dl>
                <Link to={`/edit`} className="btn btn-success">Edit</Link>
                <button className="btn btn-danger">Delete</button>
            </div>
        </div>
    </div>);
}
export default Show;