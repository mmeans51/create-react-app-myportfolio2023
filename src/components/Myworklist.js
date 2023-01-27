import React from "react";
import "./Myworklist.css"
import Mywork from "./Mywork"
import { Work } from "../data"

const Myworklist = () => {
    return (
        <div className="mw" id="myworklist">
            <div className="mw-text">
                <h2 className="mw-title">Portfolio</h2>
                <span className='line'></span>
                <p className="mw-description">
                    Below you will see a few screen grabs of some projects i made or contributed to. The images are links to the active webpage.
                    Also, head over to my <a href="https://github.com/mmeans51?tab=repositories">GIT PAGE</a> to see my other projects.
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