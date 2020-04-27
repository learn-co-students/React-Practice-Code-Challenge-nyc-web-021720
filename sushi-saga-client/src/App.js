import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
	state = {
		sushis: [],
		eaten: [],
		money: 100,
		sushiIndex: 0,
		addMoney: "",
	};

	componentDidMount() {
		fetch(API)
			.then((response) => response.json())
			.then((data) => {
				this.setState({
					sushis: data,
				});
			});
	}

	getFourSushis() {
		let allSushis = this.state.sushis;
		return allSushis.slice(this.state.sushiIndex, this.state.sushiIndex + 4);
	}

	getNextSushis = () => {
		let newIndex = this.state.sushiIndex + 4;
		if (newIndex >= this.state.sushis.length) {
			newIndex = 0;
		}
		this.setState({
			sushiIndex: newIndex,
		});
	};

	eatSushi = (id) => {
		let sushiPrice = this.state.sushis.find((sushi) => sushi.id === id).price;

		if (this.state.money >= sushiPrice && !this.state.eaten.includes(id)) {
			this.setState({
				eaten: [...this.state.eaten, id],

				money: this.state.money - sushiPrice,
			});
		} else {
			alert("Need more money or actual sushi");
		}
	};

	handleChange = (e) => {
		this.setState({ addMoney: e.target.value });
	};
	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({
			addMoney: "",
			money: this.state.money + parseInt(this.state.addMoney),
		});
	};

	render() {
		return (
			<div className="app">
				<form onSubmit={this.handleSubmit}>
					<input
						type="number"
						value={this.state.addMoney}
						placeholder="money"
						onChange={this.handleChange}
					/>
					<input type="submit" value="add money" />
				</form>
				<SushiContainer
					sushis={this.getFourSushis()}
					getNextSushis={this.getNextSushis}
					eatSushi={this.eatSushi}
					eaten={this.state.eaten}
				/>
				<Table money={this.state.money} eaten={this.state.eaten} />
			</div>
		);
	}
}

export default App;
