import React, { useEffect } from "react";
import star from "../../Images/star-icon.png";
import floppydisk from "../../Images/floppy_disk.jpg";
import collectorsData from "../../DataFrontEnd/CollectorsData";
import { Link } from "react-router-dom";

function CollectorScreen() {
  return (
    <div className="collector-screen">
      <h1>Collectors</h1>
           <ul className="collectors-list">
        {
            collectorsData.map(collector =>
                <li key={collector._id}>
                    <div className="collector-wrapper">
                        <Link to={'/product/' + collector._id}><img className="collector-img" src={collector.image} alt="product1" />
                        </Link>
                        <div className="collector-name">
                            <Link to={'/Collectors/' + collector._id}> {collector.name} 
                        </Link>
                        </div>
                        <div className="collector-brand">{collector.brand}</div>
                        <div className="collector-desc">{collector.description}</div>
                        <div className="collector-price">${collector.price}</div>
                        <div className="collector-era">{collector.era} </div>
                    </div>
                </li>
            )
        }

    </ul>

    </div>
  );
}

export default CollectorScreen;
