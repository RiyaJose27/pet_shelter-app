import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShelterCard from '../components/ShelterCard';
import {Link} from 'react-router-dom';



const AllShelters = (props) => {
    const [shelters, setShelters] = useState([]);
    const [loaded, setLoaded] = useState(true);

    useEffect(() => {
        console.log("running use effect");
        console.log(loaded);
        axios.get("http://localhost:8000/api/shelters/all")
            .then(res => {
                setShelters(res.data.results);
            })
            .catch(err => console.log(err))
    }, [loaded])
    return (
        <div className="center">
                 <Link to="/shelters/new">add a pet to the shelter</Link> 
                <h2>These pets are looking for a good home</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th><br/>&nbsp;
                        <th>Type</th><br />&nbsp;

                        <th>Actions</th>
                    </tr>
                </thead>
                

                {
                    shelters.map((item, i) => {
                        return <ShelterCard key={i} data={item} setLoaded={setLoaded} />
                    })
                }
                </table>
        </div>
    )
}
export default AllShelters;