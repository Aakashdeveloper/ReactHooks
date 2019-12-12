import React from 'react';
import { Link } from 'react-router-dom';
import './displayComponent.css';


function DisplayComponent(props){
    const renderList = ({subject}) => {
        if(subject){

            return subject.map((item,index) => {
                return(
                       
                        <div className="card col-md-2" key={index}>
                            <div className="row">
                                <img className="card-img-top" src={item.img} />
                                <span className="topTemp">{item.name}</span>
                            </div>
                            <div className="card-body">
                                <span className="max">{item.details}</span>   
                                <h4 className="card-title"></h4>
                                <p className="card-text">
                                    <p className="day">Rs. {item.fee} </p>
                                </p>
                                <Link to="/enquiries" className="btn btn-primary">
                                    enquiries
                                </Link>
                                </div>
                            </div>
                         
                        )
            })
        }

        
    }

    return(
        <div  className="container">
             <div className="row" >
             {renderList(props)}
             </div>
            
           
        </div>
                 
    )
}


export default DisplayComponent;