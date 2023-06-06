import React, { useState } from 'react';
import axios from 'axios';
import SweetAlert from 'react-bootstrap-sweetalert';

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
    const [librariesList, setLibrariesList] = useState([]);

    /* SEARCH LIBRARY */

    const [searchParameterName, setSerchParameterName] = useState('');
    const handleInputChange = (event) => {
        setSerchParameterName(event.target.value.toString());
    }

    const searchItems = () => {
        let URL = searchParameterName !== "" ? ("http://localhost:5176/api/Library/Search?prName=" + searchParameterName) : ("http://localhost:5176/api/Library/GetAll");
        axios.get(URL).then(response => {
            response.data.map(item => { item.isEditing = false; })
            setLibrariesList(response.data);
        }).catch(error => {
            setAlertErrorMessage(error.message);
            setShowAlertError(true);
        })
    }

    /* UDATE */
    const handleLibraryInputChange = (prLibrary, prInput) => {
        let librariesNewReference = [...librariesList]; //Create a copy of the object with new reference (new space in memory)
        const index = librariesNewReference.findIndex((item) => item.name === prLibrary.name);
        const { name, value } = prInput.target; // Get the NAME and VALUE of the property changed
        librariesNewReference[index] = { ...prLibrary, [name]: value };// Update just the specific propertu keeping the others
        setLibrariesList(librariesNewReference);

    }

    const updateEditingStatus = (prLibrary, prFlag) => {
        try {
            let librariesNewReference = [...librariesList]; //Create a copy of the object with new reference (new space in memory)
            const index = librariesNewReference.findIndex((item) => item.name === prLibrary.name);
            librariesNewReference[index].isEditing = prFlag;
            setLibrariesList(librariesNewReference);
        }
        catch (error) {
            setAlertErrorMessage(error.message);
            setShowAlertError(true);
        }
    }

    //const editLibrary = (prLibrary) => {
    //    let librariesNewReference = [...librariesList]; //Create a copy of the object with new reference (new space in memory)
    //    const index = librariesNewReference.findIndex((item) => item.name === prLibrary.name);
    //    librariesNewReference[index].isEditing = true;
    //    setLibrariesList(librariesNewReference);
    //}

    const confirmUpdate = (prLibrary) => {
        axios.put("http://localhost:5176/api/Library/Update", prLibrary).then(response => {
            let librariesNewReference = [...librariesList]; //Create a copy of the object with new reference (new space in memory)
            const index = librariesNewReference.findIndex((item) => item.name === prLibrary.name);
            librariesNewReference[index] = prLibrary;
            librariesNewReference[index].isEditing = false;
            setLibrariesList(librariesNewReference);
            setShowAlertUpdatedLibrary(true);
        }).catch(error => {
            setAlertErrorMessage(error.message);
            setShowAlertError(true);
        }); 
    }

    /* INSERT */
    const [libraryToAdd, setLibraryToAdd] = (useState)({ name: '', address: '', telephone: '' }); 

    const handleLibraryToAddInputChange = (prInput) => {
        const { name, value } = prInput.target;
        let libraryToAddNewReference = { ...libraryToAdd, [name]: value };
        setLibraryToAdd(libraryToAddNewReference);
        
    }

    const confirmNewLibrary = () => {
        axios.post("http://localhost:5176/api/Library/Save", libraryToAdd).then(response => {
            let librariesNewReference = [...librariesList]; //Create a copy of the object with new reference (new space in memory)
            librariesNewReference.push(response.data);
            setLibrariesList(librariesNewReference);
            setLibraryToAdd({ name: '', address: '', telephone: '' }); // Clear the state
            setShowAlertNewLibrary(true);
        }).catch(error => {
            setAlertErrorMessage(error.message);
            setShowAlertError(true);
        });
    }

    /* DELETE */
    const deleteLibrary = (prLibrary) => {
        axios.delete("http://localhost:5176/api/Library/Delete", { data: prLibrary }).then(response => {
            let librariesNewReference = [...librariesList]; //Create a copy of the object with new reference (new space in memory)
            const index = librariesNewReference.findIndex((item) => item.name === prLibrary.name);
            librariesNewReference.splice(index, 1); //Remove item from list
            setLibrariesList(librariesNewReference);
            setShowAlertDeletedLibrary(true);
        }).catch(error => {
            setAlertErrorMessage(error.message);
            setShowAlertError(true);
        });
    }

    /* ALERTS  */
    const [showAlertNewLibrary, setShowAlertNewLibrary] = useState(false);
    const [showAlertUpdatedLibrary, setShowAlertUpdatedLibrary] = useState(false);
    const [showAlertDeletedLibrary, setShowAlertDeletedLibrary] = useState(false);

    const [showAlertError, setShowAlertError] = useState(false);
    const [alertErrorMessage, setAlertErrorMessage] = useState('');
    

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
                                    <input className="form-control" placeholder="Name" name="name" value={libraryToAdd.name} onChange={  handleLibraryToAddInputChange.bind(this) } type="text" />
                                </div>
                                { /* ADDRESS */}
                                <div className="col-md-4">
                                    <label className="form-label">Address</label>
                                    <input className="form-control" placeholder="Address" name="address" value={libraryToAdd.address} onChange={handleLibraryToAddInputChange.bind(this)} type="text" />
                                </div>
                                { /* Phone */}
                                <div className="col-md-3">
                                    <label className="form-label">Telephone</label>
                                    <input className="form-control" placeholder="Phone" name="telephone" value={libraryToAdd.telephone} onChange={handleLibraryToAddInputChange.bind(this)} type="text" />
                                </div>

                                <div className="col-md-2">
                                    <label className="form-label">&nbsp;</label>
                                    <div className="btn-toolbar">
                                        <button type="button" className="btn btn-success form-control" onClick={ confirmNewLibrary.bind(this) } >Save</button>
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
                                    {librariesList.map(item =>
                                        <tr key={item.name} >
                                            <td> <input className="form-control" value={item.name} onChange={ handleLibraryInputChange.bind(this, item) } name="name" disabled={!item.isEditing} /> </td>
                                            <td> <input className="form-control" value={item.address} onChange={handleLibraryInputChange.bind(this, item)}  name="address" disabled={!item.isEditing} /> </td>
                                            <td> <input className="form-control" value={item.telephone} onChange={handleLibraryInputChange.bind(this, item)}  name="telephone" disabled={!item.isEditing} /> </td>
                                            <td>
                                                <div className="btn-toolbar" >
                                                    <button type="button" className="btn btn-info mr-2" onClick={updateEditingStatus.bind(this, item, true)} style={{ display: item.isEditing ? 'none' : 'block' }}>Edit</button>
                                                    <button type="button" className="btn btn-warning mr-2" onClick={updateEditingStatus.bind(this, item, false)} style={{ display: item.isEditing ? 'block' : 'none' }}>Cancel</button>
                                                    <button type="button" className="btn btn-info mr-2" onClick={confirmUpdate.bind(this, item)} style={{ display: item.isEditing ? 'block' : 'none' }}>Save</button>
                                                    <button type="button" className="btn btn-danger mr-2" onClick={ deleteLibrary.bind(this, item) }>Delete</button>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>

            { /* ALERT ERROR MESSAGE */}
            {showAlertError &&
                <SweetAlert warning
                    confirmBtnText="Ok"
                    confirmBtnBsStyle="success"
                    title="Something wrong happened..."
                    onConfirm={() => setShowAlertError(false)}>
                    { alertErrorMessage }
                </SweetAlert>
            }

            { /* ALERT LIBRARY ADDED */}
            {showAlertNewLibrary &&
                <SweetAlert success
                    confirmBtnText="Ok"
                    confirmBtnBsStyle="success"
                    title="Item succesfully added!"
                    onConfirm={() => setShowAlertNewLibrary(false)}>
                Please click on "Ok" to close
                </SweetAlert>
            }

            { /* ALERT LIBRARY UPDATED */}
            {showAlertUpdatedLibrary &&
                <SweetAlert success
                    confirmBtnText="Ok"
                    confirmBtnBsStyle="success"
                    title="Item succesfully updated!"
                onConfirm={() => setShowAlertUpdatedLibrary(false)}>
                    Please click on "Ok" to close
                </SweetAlert>
            }

            { /* ALERT LIBRARY DELETED */}
            {showAlertDeletedLibrary &&
                <SweetAlert success
                    confirmBtnText="Ok"
                    confirmBtnBsStyle="success"
                    title="Item succesfully deleted!"
                    onConfirm={() => setShowAlertDeletedLibrary(false)}>
                    Please click on "Ok" to close
                </SweetAlert>
            }

        </div>
    )
}

export default LibraryComponent;