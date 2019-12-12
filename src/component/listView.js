import React, {useState,useEffect} from 'react';
import DisplayComponent from './displayComponent';

const url = "http://localhost:8900/courses"

function ListView(){
    const [title] = useState('Developer Funnel')
    const [courses, setCourses] = useState(0)

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then((res) => {
                setCourses(res)
            })
    },[courses])

    
    return(
        <div>
            <div className="jumbotron">
                <React.Fragment>
                    <DisplayComponent subject={courses}></DisplayComponent>
                </React.Fragment>
            </div>
            
        </div>
    )
}

export default ListView;