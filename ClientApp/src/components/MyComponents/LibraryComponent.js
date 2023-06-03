import React from 'react';
import axios from 'axios';

const LibraryComponent = (props) => {
    return (
        <div>
            <hr />
            <h2>Library</h2>
            <br />
            <div className="row">
                { /* SEARCH LIBRARY */}
                <div className="col-md-4">
                    <div className="card border border-secondary shadow-0">
                        <div className="card-header bg-secondary text-white"><b>Search</b> Library<span className="glyphicon glyphoicon-search"></span></div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-7">
                                    <label className="form-label">Name</label>
                                    <input className="form-control" placeholder="Name" name="name" type="text" />
                                </div>

                                <div className="col-md-5">
                                    <label className="form-label">&nbsp;</label>
                                    <div className="btn-toolbar">
                                        <button type="button" className="btn btn-primary form-control">Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                { /* NEW LIBRARY */}
                <div className="col-md-8">
                    <div className="card border border-secondary shadow-0">
                        <div className="card-header bg-secondary text-white"><b>New</b> Library</div>
                        <div className="card-body">
                            <div className="row">
                                { /* NAME */}
                                <div className="col-md-3">
                                    <label className="form-label">Name</label>
                                    <input className="form-control" placeholder="Name" name="name" type="text" />
                                </div>
                                { /* ADDRESS */}
                                <div className="col-md-4">
                                    <label className="form-label">Address</label>
                                    <input className="form-control" placeholder="Address" name="address" type="text" />
                                </div>
                                { /* Phone */}
                                <div className="col-md-3">
                                    <label className="form-label">Phone</label>
                                    <input className="form-control" placeholder="Phone" name="Phone" type="text" />
                                </div>

                                <div className="col-md-2">
                                    <label className="form-label">&nbsp;</label>
                                    <div className="btn-toolbar">
                                        <button type="button" className="btn btn-success form-control">Save</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />

                { /* DISPLAY LIBRARIES */}
                <div className="col-md-13">


                    <div className="card border border-secondary shadow-0">
                        <div className="card-header bg-secondary text-white"><b>Display</b> Libraries</div>
                        <div className="card-body">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Address</th>
                                        <th>Phone</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td> <input className="form-control" type="text" value="Name" /> </td>
                                        <td> <input className="form-control" type="text" value="Address" /> </td>
                                        <td> <input className="form-control" type="text" value="Phone" /> </td>
                                        <td>
                                            <div className="btn-toolbar">
                                                <button className=" btn btn-info mr-2">Edit</button>
                                                <button className=" btn btn-success mr-2">Save</button>
                                                <button className=" btn btn-danger mr-2">Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>



                </div>

            </div>
        </div>            
    )
}

export default LibraryComponent;