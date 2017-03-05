import React, { PropTypes, Component } from 'react';

export default class SeriesDisplay extends Component {

  componentDidMount = () => {
    console.log("PROPS",this.props);
    this.props.actions.series.getSerie();
  }

  render(){
    let i = 0;
    return(
      <div>
        <ul>
          {this.props.series.map(serie => <p key={i++}>{serie.title} </p>)}
        </ul>
      </div>
    )
  }
}