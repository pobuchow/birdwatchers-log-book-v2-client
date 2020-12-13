import React from "react";
import ObservationPanel from "./../observation/panel/ObservationPanel";
import AddObservationButton from "./../observation/add/button/AddObservationButton";

export default function HomePage(props) {
  return (
    <div>
      <div data-testid="homepage-hello-text">
        Hello, {props.user ? props.user.username : " please log in"}
      </div>
      {props.user ? 
        <div>
          <AddObservationButton />
          <ObservationPanel size={10} />
        </div> : ""}
    </div>
  );
}
