import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong } from '../services/favoriteSongsAPI';
import Carregando from '../pages/Carregando';

class MusicCard extends Component {
  constructor() {
    super();
    this.state = {
      checked: false,
      loading: false,
    };
  }

  handleCheck = ({ target }) => {
    const { checked } = target;
    console.log(target);
    this.setState({
      checked,
      loading: true,
    }, async () => {
      const { music } = this.props;
      console.log(music);
      const result = await addSong(music);
      if (result) {
        this.setState({
          loading: false,
        });
      }
    });
  };

  render() {
    const {
      music,
      favoritedSongs,
    } = this.props;
    const {
      checked,
      loading,
    } = this.state;
    if (loading) return <Carregando />;
    return (
      <div>
        <form>
          <label
            htmlFor={ `music-${music.trackId}` }
          >
            <p className="result">Favoritar</p>
            <input
              className="checkbox"
              data-testid={ `checkbox-music-${music.trackId}` }
              type="checkbox"
              name="favorita"
              id={ `music-${music.trackId}` }
              checked={ checked || favoritedSongs.includes(String(music.trackId)) }
              onChange={ this.handleCheck }
            />
          </label>
        </form>
      </div>
    );
  }
}

export default MusicCard;

MusicCard.propTypes = {
  favoritedSongs: PropTypes.arrayOf(PropTypes.string).isRequired,
  music: PropTypes.shape({
    trackId: PropTypes.number.isRequired,
  }).isRequired,
};
