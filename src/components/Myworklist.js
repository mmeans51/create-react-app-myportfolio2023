import React from "react";
import "./Myworklist.css"
import Mywork from "./Mywork"
import { Work } from "../data"

const Myworklist = () => {
    return (
        <div className="mw" id="myworklist">
            <div className="mw-text">
                <h2 className="mw-title">My Work</h2>
                <p className="mw-description">
                    Below you will see a few screen grabs of some projects i made or contributed too during the coding Boot camp. the images are link to the active webpage.
                    Also, head over to my git page at github.com/mmeans51 to see my other projects.
                </p>
            </div>
            <div className="mw-list">
                {Work.map((item) => (
                    <Mywork key={item.id} img={item.img} link={item.link} />
                ))}
              
            </div>
            
        </div>
    );
};

export default Myworklist