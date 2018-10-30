import React, { Component } from 'react';
import axios from 'axios';
import { Context } from '../../../Context';

class Search extends Component {
  static contextType = Context;
  state = {
    trackTitle: ''
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  findTrack = e => {
    e.preventDefault();

    axios
      .get(
        `https://lit-taiga-99958.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${
          this.state.trackTitle
        }&page_size=10&page=1&s_track_rating=desc&apikey=${
          process.env.REACT_APP_MM_KEY
        }`
      )
      .then(res => {
        this.context.newData(res.data.message.body.track_list);
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div className="card card-body mb-4 p-4">
        <h1 className="display-4 text-center">
          <i className="fas fa-music" />
          Search for song
        </h1>
        <p className="lead text-center">Get the lyrics for songs</p>
        <form onSubmit={this.findTrack}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Song Title..."
              name="trackTitle"
              value={this.state.trackTitle}
              onChange={this.onChange}
            />
          </div>
          <button
            className="btn btn-primary btn-lg btn-block mb-5"
            type="submit"
          >
            Get track Lyrics
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
