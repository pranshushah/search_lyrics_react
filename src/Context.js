import React, { Component } from 'react';
import axios from 'axios';

export const Context = React.createContext();

export class Provider extends Component {
  state = {
    track_list: null,
    heading: 'Top 10 Tracks',
    newData: data => {
      this.setState({ track_list: data, heading: 'Search Result' });
    }
  };

  componentDidMount() {
    axios
      .get(
        `https://lit-taiga-99958.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=IN&f_has_lyrics=1&apikey=${
          process.env.REACT_APP_MM_KEY
        }`
      )
      .then(res => {
        console.log('a');
        this.setState({ track_list: res.data.message.body.track_list });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
