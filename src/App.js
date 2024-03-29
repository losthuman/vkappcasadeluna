import React from 'react';
import connect from '@vkontakte/vkui-connect';
import { View } from '@vkontakte/vkui';

import Home from './panels/Home';
import Schedule from './panels/Schedule';
import Price from './panels/Price';
import '@vkontakte/vkui/dist/vkui.css';
import Metronome from "./panels/Metronome";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activePanel: 'home',
			fetchedUser: null
		};
	}

	componentDidMount() {
		connect.subscribe((e) => {
			switch (e.detail.type) {
				case 'VKWebAppGetUserInfoResult':
					this.setState({ fetchedUser: e.detail.data });					
					break;
				default:
					// console.log(e.detail.type);
			}
		});
		connect.send('VKWebAppGetUserInfo', {});
	}

	go = (e) => {
		this.setState({ activePanel: e.currentTarget.dataset.to })
	};

	render() {
		return (
			<View activePanel={this.state.activePanel}>
				<Home id="home" fetchedUser={this.state.fetchedUser} go={this.go} />
				<Schedule id="schedule" go={this.go}/>
				<Price id="price" go={this.go}/>
				<Metronome id="metronome" go={this.go} />
			</View>
		);
	}
}

export default App;
