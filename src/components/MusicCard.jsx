import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong } from '../services/favoriteSongsAPI';

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
      //   console.log(music);
      const result = await addSong(music);
      if (result) {
        this.setState({
          loading: false,
        });
        console.log(result);
      }
    });
  };

  render() {
    const {
      // music,
      favoritedSongs,
    } = this.props;
    const {
      checked,
      loading,
    } = this.state;
    // console.log(this);
    if (loading) return <p>Carregando...</p>;
    return (
      <div>
        <form>
          <p>Oi</p>
          <label
            htmlFor="musica"
          >
            Favoritar
            <input
            // data-testid={ `checkbox-music-${music.trackId}` }
              type="checkbox"
              name="favorita"
              id={ favoritedSongs }
              checked={ checked }
              // checked={ checked || favoritedSongs.includes(String(music.trackId)) }
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
