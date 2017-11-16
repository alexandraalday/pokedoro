import React, { Component } from 'react';
import moment from 'moment';
import TimerHeader from '../../TimerHeader/components/TimerHeader';
import TimerDisplay from '../../TimerDisplay/components/TimerDisplay';
import TimerButton from '../../TimerButton/components/TimerButton';
import TimerConfig from '../../TimerConfig/components/TimerConfig';
import * as timerStates from '../../timerStates';


class Timer extends Component {
	constructor() {
		super();

		this.state = {
			currentTime: moment.duration(25, 'minutes'),
			baseTime: moment.duration(25, 'minutes'),
			timerState: timerStates.NOT_SET,
		};

		this.setBaseTime = this.setBaseTime.bind(this);
	}

	setBaseTime(newBaseTime) {
		this.setState({
			baseTime: newBaseTime,
			currentTime: newBaseTime,
		});
	}

	render() {
		return (
			<div className="container-fluid">
				<TimerHeader />
				<TimerDisplay currentTime={this.state.currentTime} />
				<TimerButton />
				{
					(this.state.timerState !== timerStates.RUNNING)
					&&
					(<TimerConfig 
						baseTime = {this.state.baseTime}
						setBaseTime={this.setBaseTime}
					/>)
				}
			</div>
		);
	}
};

export default Timer;