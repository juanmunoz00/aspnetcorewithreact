import React, { useState } from 'react';
import axios from 'axios';

const LibraryComponent = (props) => {

    //const [libraryList, setLibraryList] = useState(
    //    [
    //        { id: 1, name: 'Library 1', address: 'Address 1', telephone: '090898' },
    //        { id: 2, name: 'Library 2', address: 'Address 2', telephone: '090898' },
    //        { id: 3, name: 'Library 3', address: 'Address 3', telephone: '090898' },
    //        { id: 4, name: 'Library 4', address: 'Address 4', telephone: '090898' },
    //    ]
    //);

    /* LIST LIBRARIES */ 
    /// library state variable to store the controller response value
    const [libraryList, setLibraryList] = useState([]);

    /* SEARCH LIBRARY */
    const [searchParameterName, setSerchParameterName] = useState('');
    const handleInputChange = (event) => {
        setSerchParameterName(event.target.value.toString());
    }

    const searchItems = () => {
        let URL = searchParameterName != "" ? ("http://localhost:5176/api/Library/Search?prName=" + searchParameterName) : ("http://localhost:5176/api/Library/GetAll");
        axios.get(URL).then(response => {
            setLibraryList(response.data);
        })
    }


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
                                    <input className="form-control" placeholder="Name" name="name" type="text" value={searchParameterName} onChange={handleInputChange.bind(this)} />
                                </div>

                                <div className="col-md-5">
                                    <label className="form-label">&nbsp;</label>
                                    <div className="btn-toolbar">
                                        <button type="button" className="btn btn-primary form-control" onClick={searchItems.bind(this)} >Search</button>
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
                                    </tr>
                                </thead>
                                <tbody>
                                    {libraryList.map(item =>
                                        <tr key={item.name} >
                                            <td>{item.name} </td>
                                            <td>{item.address} </td>
                                            <td>{item.telephone}</td>
                                        </tr>
                                    )}
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