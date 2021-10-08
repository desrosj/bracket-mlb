import React, { Component } from 'react';

const YEAR = require('./config/year');

const { computeResults } = require('./actions/compute');
const _ = require('lodash');

class Score extends Component {

	render() {
		const y = this.props.match.params.year || YEAR;
		const results = _.reverse(_.sortBy(computeResults( y ), 'score'));
		return (
			<ol className="App-intro">
				{results.map ( ( r, i ) => {
					const trimmed = r.name.substring(1);
					const tweet = `https://twitter.com/${trimmed}`;
					return <li key={ "result-" + i } ><a href={tweet}> {r.name}</a> - {r.score}</li>
				})}
			</ol>
		);
	}
}

export default Score;
