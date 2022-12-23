import React from "react";

class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div className="github-profile" style={{ margin: "1rem" }}>
        <img src={profile.avatar_url} style={{ width: "75px" }} />
        <div
          className="info"
          style={{
            display: "inline-block",
            marginLeft: "12px",
          }}
        >
          <div className="name" style={{ fontSize: "125%" }}>
            {profile.name}
          </div>
          <div className="company">|{profile.company}</div>
        </div>
      </div>
    );
  }
}

export default Card;
