import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import { Link} from 'react-router-dom';

const Create = (props) => {
    const history = useHistory();
    
    
    const [form, setForm] = useState({
        name: "",
        type: "",
        description: "",
        skillone: "",
        skilltwo: "",
        skillthree: ""
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

        axios.post("http://localhost:8000/api/shelters/create", form)
            .then(res=>{
                console.log(res.data);

                if(res.data.results){
                history.push('/');
                }
                else{
                    setErrors(res.data.err.errors);
                }
                
            })
            .catch(err => console.log(err))

    }
    return(
        <div className="w-50 mx-auto p-3">    
        <p>know a pet needing a home?</p>   
        
            <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label>Pet Name:</label>
                    <input name="name" placeholder="name" className="form-control" type="text" onChange={onChangeHandler} />
                    <span className="alert-danger">{errors.name && errors.name.message}</span>
                </div>

                <div className="form-group">
                <label>Pet Type:</label>
                <input name="type" placeholder="type" className="form-control" type="text" onChange={onChangeHandler}/>
                    <span className="alert-danger">{errors.type && errors.type.message}</span>
                </div>
                <div className="form-group">
                <label>Pet Description:</label>
                    <input name="description" placeholder="description" className="form-control" type="text" onChange={onChangeHandler} />
                    <span className="alert-danger">{errors.description && errors.description.message}</span>
                </div><br />
                <div className="form-group">
                <label>Skills(optional)</label><br />
                <label>Skill 1:</label>
                    <input name="skillone" placeholder="skillone" className="form-control" type="text" onChange={onChangeHandler} />
                    <span className="alert-danger">{errors.skillone && errors.skillone.message}</span>
                </div><br />
                <div className="form-group">
                <label>Skill 2:</label>
                    <input name="skilltwo" placeholder="skilltwo" className="form-control" type="text" onChange={onChangeHandler} />
                    <span className="alert-danger">{errors.skilltwo && errors.skilltwo.message}</span>
                </div><br />
                <div className="form-group">
                <label>Skill 3:</label>
                    <input name="skillthree" placeholder="skillthree" className="form-control" type="text" onChange={onChangeHandler} />
                    <span className="alert-danger">{errors.skillthree && errors.skillthree.message}</span>
                </div><br />

                <button input type="submit" className="btn btn-primary">Add Pet</button>

            </form>
        </div>
    )
}
export default Create;