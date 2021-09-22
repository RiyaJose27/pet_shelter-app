import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';
import ShelterCard from '../components/ShelterCard';

const Edit = (props) => {
    const {_id} = useParams();
    const history = useHistory();

    const [form, setForm] = useState({
        name: "",
        type:"",
        description: "",
        skillone:"",
        skilltwo:"",
        skillthree:""
    })
    const [errors, setErrors] = useState({});

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        axios.patch(`http://localhost:8000/api/shelters/${_id}/update`,form)
            .then(res=>{
                console.log(res.data);

                if(res.data.results){
                    history.push('/');
                }
                else{
                    setErrors(res.data.err.errors);
                }
            })
            .catch(err=>console.log(err))
    }

    useEffect(()=>{
        axios.get("http://localhost:8000/api/shelters/" + _id)
            .then(res=>setForm(res.data.results))
            .catch(err=>console.log(err));
    },[_id])

    return(
        <div className="w-50 mx-auto p-3">
            <form onSubmit={onSubmitHandler}>
            
                <p>Edit {form.name}</p>
                <div className="form-group">
                <label>Pet Name:</label>
                    <input name="name" value={form.name} className="form-control" type="text" placeholder="name" onChange={onChangeHandler} />
                    <span className="alert-danger">{errors.name && errors.name.message}</span>
                </div>

                <div className="form-group">
                <label>Pet Type:</label>
                    <input name="type" value={form.type} className="form-control" type="text" placeholder="type" onChange={onChangeHandler} />
                    <span className="alert-danger">{errors.type && errors.type.message}</span>
                </div>

                <div className="form-group">
                <label>Pet Description:</label>
                    <input name="description" value={form.description} className="form-control" type="text" placeholder="description" onChange={onChangeHandler} />
                    <span className="alert-danger">{errors.description && errors.description.message}</span>
                </div>
                <div className="form-group">
                <label>Skill 1:</label>
                    <input name="skillone" value={form.skillone} className="form-control" type="text" placeholder="skillone" onChange={onChangeHandler} />
                    <span className="alert-danger">{errors.skillone && errors.skillone.message}</span>
                </div>
                <div className="form-group">
                <label>Skill 2:</label>
                    <input name="skilltwo" value={form.skilltwo} className="form-control" type="text" placeholder="skilltwo" onChange={onChangeHandler} />
                    <span className="alert-danger">{errors.skilltwo && errors.skilltwo.message}</span>
                </div>
                <div className="form-group">
                <label>Skill 3:</label>
                    <input name="skillthree" value={form.skillthree} className="form-control" type="text" placeholder="skillthree" onChange={onChangeHandler} />
                    <span className="alert-danger">{errors.skillthree && errors.skillthree.message}</span>
                </div>

           
                <button className="btn btn-primary" input type="submit">Edit Pet</button>
            </form>
        </div>
    )
}

export default Edit;