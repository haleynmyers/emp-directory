import React from "react";

const styles = {
  hero: {
    background: "#3f51b5",
    minHeight: 50,
    fontSize: "1.2rem",
    color: "white",
    padding: "50px 20px"  }
}

function Hero(props) {
  return (
    <div className="hero text-center" style={styles.hero}>
      <h1>Employee Directory</h1>
      <form className="search">
        <div className="form-group">
          <input
            type="text"
            name="search"
            onChange={props.handleInput}
            placeholder="Search by name"
            />
        </div>
      </form>
    </div>
  );
}

export default Hero;
