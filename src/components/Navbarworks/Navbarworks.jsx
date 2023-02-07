import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import WorksData from '../../data/WorksData/WorksData';
import  { DisplayContext } from '../../pages/Works/Works';
import ReactSwitch from 'react-switch';


const Navbarworks = () => {
  const projectsCat = useParams();  
  const [currentWorks, setCurrentWorks] = useState([]);

  const display = useContext(DisplayContext) || {};
  const context = display.display || 'link';
  console.log(display);

  useEffect(() => {
    const data = WorksData.find((work) => ':' + work.name.toLowerCase() === projectsCat.projectsCat)
      if (data) {setCurrentWorks(data);}      
  }, [projectsCat]);

  
  return (
    <>
      <div className='navbar'>
        <div className='subtitle'>
          <h1> Projects </h1>
          <div className='switch'>
            <label> {display.display === "link" ? "Link Mode" : "Card Mode"} </label>
            <ReactSwitch onChange={display.toggleDisplay} checked={display.display === 'card'} />
          </div>          
        </div>
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