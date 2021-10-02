import React, { useState } from 'react';


const Shop = () => {
    const [ course, setCourse] = useState([]);

    useEffect(() => { 
        fetch("../Course/courseData.json")
        .then( res => res.json())
        .then(data =>{
            console.log(data);;
        })
    }, [])
    return (
        <div>
            <h2> Welcone to LFWF</h2>
        </div>
    );
};

export default Shop;