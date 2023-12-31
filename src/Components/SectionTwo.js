import React from "react";
import "../Styles/style.css";
import useAos from "../Components/aos";
import { Link } from "react-router-dom";

function SectionTwo() {
  useAos();

  return (
    <div className="SectionTwo">
        <h1 className="headBoy">My Projects</h1>
      <div className="container">
        <div className="catelogue">
          <img
            src="https://images.unsplash.com/photo-1516116412344-6663387e8590?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="catImg"
          />
          <h1>Catelogue 1</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, aut praesentium? Reiciendis maiores quibusdam ut.
            Quidem porro dignissimos quasi, minima omnis earum vel! Impedit
            dicta ullam in at ea id!
          </p>
        </div>
        <div className="catelogue">
          <img
            src="https://images.unsplash.com/photo-1516116412344-6663387e8590?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="catImg"
          />
          <h1>Catelogue 2</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, aut praesentium? Reiciendis maiores quibusdam ut.
            Quidem porro dignissimos quasi, minima omnis earum vel! Impedit
            dicta ullam in at ea id!
          </p>
        </div>
        <div className="catelogue">
          <img
            src="https://images.unsplash.com/photo-1516116412344-6663387e8590?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="catImg"
          />
          <h1>Catelogue 3</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, aut praesentium? Reiciendis maiores quibusdam ut.
            Quidem porro dignissimos quasi, minima omnis earum vel! Impedit
            dicta ullam in at ea id!
          </p>
        </div>
        <div className="catelogue">
          <img
            src="https://images.unsplash.com/photo-1516116412344-6663387e8590?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="catImg"
          />
          <h1>Catelogue 4</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, aut praesentium? Reiciendis maiores quibusdam ut.
            Quidem porro dignissimos quasi, minima omnis earum vel! Impedit
            dicta ullam in at ea id!
          </p>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
