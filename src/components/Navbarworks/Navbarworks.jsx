import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import WorksData from '../../data/WorksData/WorksData';

const Navbarworks = () => {
  const projectsCat = useParams();  
  const [currentWorks, setCurrentWorks] = useState([]);
  
  useEffect(() => {
    const data = WorksData.find((work) => ':' + work.name.toLowerCase() === projectsCat.projectsCat)
      if (data) {setCurrentWorks(data);}      
  }, [projectsCat]);

  
  return (
    <>
      <div className='navbar'>
        <h1> Projects </h1>
        <div>
          {WorksData.map((work) => (
            <Link to={`/works/:${work.name.toLowerCase().replace(" ", "_")}`} key={work.name}>{work.name}</Link>
          ))}
        </div>
        <div>
          <h2>{currentWorks.title}</h2>
          <h3>{currentWorks.name}</h3>
          <p>{currentWorks.description}</p>
        </div>
      </div>
    </>
      
  );
}

export default Navbarworks;