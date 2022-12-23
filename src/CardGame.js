import React from "react";
import "./CardGame.css";

import Form from "./components/Form/Form";
import CardList from "./components/Card/CardList";

class CardGame extends React.Component {
  state = {
    profiles: [],
  };

  addNewProfile = (profileData) => {
    this.setState((prevState) => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };

  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profile={this.state.profiles} />
      </div>
    );
  }
}

export default CardGame;
