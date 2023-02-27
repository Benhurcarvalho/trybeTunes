import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import MusicCard from '../components/MusicCard';

class Album extends Component {
  constructor() {
    super();
    this.state = {
      infoCollection: [],
      songIndexList: [],
      favoritedSongs: [],
    };
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const { songIndexList } = this.state;
    const data = await getMusics(id);
    if (songIndexList.length === 0) {
      this.setState({
        songIndexList: data.slice(1),
        infoCollection: data[0],
      });
    }
    const favoritedSongs = await getFavoriteSongs();
    this.setState({
      favoritedSongs: favoritedSongs.map(({ trackId }) => String(trackId)),
    });
  }

  render() {
    const {
      infoCollection,
      songIndexList,
      favoritedSongs,
    } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        <div className="album">

          <div>
            <img
              src={ infoCollection.artworkUrl100 }
              alt={ infoCollection.collectionName }
            />
            <p
              className="result"
              data-testid="artist-name"
            >
              { infoCollection.artistName }
            </p>
            <p
              className="result"
              data-testid="album-name"
            >
              { infoCollection.collectionName }
            </p>
          </div>
          {
            songIndexList.map((track) => (
              <section
                key={ track.trackId }
                className="item"
              >
                <p className="result">{ track.trackName }</p>
                <p className="result">{ track.trackNumber }</p>
                <audio
                  data-testid="audio-component"
                  src={ track.previewUrl }
                  controls
                >
                  <track kind="captions" />
                  <p
                    className="result"
                  >
                    O seu navegador não suporta o elemento
                  </p>
                  {' '}
                  <code>audio</code>
                  .
                </audio>
                <MusicCard
                  music={ track }
                  favoritedSongs={ favoritedSongs }
                />
              </section>
            ))
          }
        </div>
      </div>
    );
  }
}

export default Album;

Album.propTypes = {
  infoCollection: PropTypes.arrayOf,
  songIndexList: PropTypes.arrayOf,
}.isRequired;
