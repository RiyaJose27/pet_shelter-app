import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



const ShelterCard = (props) => {
    const {name, type, description, skillone, skilltwo, skillthree} = props.data;

  



    return (
        <tr>

                    <td>{name}</td><br />
                    <td>{type}</td><br />
                    <td><Link to={`/shelters/${props.data._id}`}>details</Link>|</td> 
                    <td><Link to={`/shelters/${props.data._id}/edit`}>Edit</Link> </td>
                </tr>
        

    )

}


export default ShelterCard;