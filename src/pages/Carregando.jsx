import React, { Component } from 'react';

class Carregando extends Component {
  render() {
    return (
      // <span is-loading>...</span>
      <img
        className="is-loadin-gif"
        src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator_square_small.gif"
        alt="lodin"
      />
    );
  }
}

export default Carregando;
