import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';

class Album extends Component {
  constructor() {
    super();
    this.state = {
      infoCollection: [],
      songIndexList: [],
    };
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const { songIndexList } = this.state;
    const data = await getMusics(id);
    // console.log(data[0]);
    // console.log(data.slice(1));
    if (songIndexList.length === 0) {
      this.setState({
        songIndexList: data.slice(1),
        infoCollection: data[0],
      });
    }
  }

  render() {
    const {
      infoCollection,
      songIndexList,
    } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        <div>
          <img
            src={ infoCollection.artworkUrl100 }
            alt={ infoCollection.collectionName }
          />
          <p
            data-testid="artist-name"
          >
            { infoCollection.artistName }
          </p>
          <p
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
              <p>{ track.trackName }</p>
              <p>{ track.trackNumber }</p>
              <audio
                data-testid="audio-component"
                src={ track.previewUrl }
                controls
              >
                <track kind="captions" />
                O seu navegador não suporta o elemento
                {' '}
                <code>audio</code>
                .
              </audio>
              <MusicCard music={ track } />
            </section>
          ))
        }
      </div>
    );
  }
}

export default Album;

Album.propTypes = {
  infoCollection: PropTypes.arrayOf,
  songIndexList: PropTypes.arrayOf,
}.isRequired;
