import React from "react";
import axios from "axios";

class DadJoke extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      joke: "",
      loading: false
    };
  }

  fetchJoke = async () => {
    this.setState({ loading: true });
    const res = await axios.get("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json"
      }
    });
    this.setState({ joke: res.data.joke, loading: false });
  };

  render() {
    const jokeDisplay = () => {
      return (
        <div>
          <p className="joke-text">
            {this.state.loading ? "Loading Joke..." : this.state.joke}
          </p>
        </div>
      );
    };

    return (
      <div className="dad-joke">
        <div className="container">
          <h2>Click the button for a dad joke!</h2>
          <button onClick={this.fetchJoke}>
            {this.state.joke ? "Get a New Joke" : "Get Joke"}
          </button>
          {jokeDisplay()}
        </div>
      </div>
    );
  }
}

export default DadJoke;
