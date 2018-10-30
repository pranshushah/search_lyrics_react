import React, { Component } from 'react';
import { Context } from '../../../Context';
import Spinner from '../../Layout/Spinner/Spinner';
import Track from './Track/Track';
class Tracks extends Component {
  static contextType = Context;

  render() {
    let show;
    const { track_list, heading } = this.context;
    if (!track_list) {
      show = <Spinner />;
    } else {
      show = (
        <>
          <h3 className="text-center mb-4">{heading}</h3>
          <div className="row">
            {track_list.map(item => (
              <Track key={item.track.track_id} track={item.track} />
            ))}
          </div>
        </>
      );
    }
    return <>{show}</>;
  }
}

export default Tracks;
