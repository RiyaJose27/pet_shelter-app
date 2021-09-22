import React, { useEffect, useState } from 'react';
import {useParams, Link, useHistory} from 'react-router-dom';
import axios from 'axios';
import ShelterCard from '../components/ShelterCard';

const SingleShelter = (props) => {
    const {_id} = useParams();
    const [shelter, setShelter] = useState({});

    useEffect(()=>{
        axios.get("http://localhost:8000/api/shelters/" + _id)
            .then(res=>setShelter(res.data.results))
            .catch(err=>console.log(err));
    },[_id])


    const onDeleteHandler =(_id) => {
        console.log(_id);
        
        axios.delete(`http://localhost:8000/api/shelters/${_id}/delete`)
        .then(res=>{
            console.log(res);
            
            props.setLoaded(prevState=>!prevState);
        })
        .catch(err => console.log(err));
    }

    return(
        <div className="d-flex justify-content-center mt-5">
            <div className="box">
            
            <button className="btn btn-sm btn-danger" onClick={() => onDeleteHandler(_id)}>Adopt {shelter.name}</button>
                <p>Details about :{shelter.name}</p>
                <p>Pet Type: {shelter.type}</p>
                <p>Description: {shelter.description}</p>
                <p>Skills: {shelter.skillone}<br />
                            {shelter.skilltwo}<br />
                            {shelter.skillthree}</p>
                
            </div>
        </div>
    )
}

export default SingleShelter;
