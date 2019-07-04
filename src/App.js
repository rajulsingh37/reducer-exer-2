import React, { Component } from "react";
import formatNumber from "format-number";
import photographer from "./images/girl.png";
import "./App.css";
import { getWithdrawAction } from "./actions";
import store from "./store";

class App extends Component {
  render() {
    console.log(store);
    const { totalAmount, username } = store.getState();
    return (
      <div className="App">
        <img className="App__userpic" src={photographer} alt="user" />
        <p className="App__username">Hello, {username}! </p>
        <div className="App__amount">
          {formatNumber({ prefix: "$" })(totalAmount)}
          <p className="App__amount--info">Total Amount</p>
        </div>

        <section className="App__buttons">
          <button data-amount="10000" onClick={this.dispatchButtonAction}>
            WITHDRAW $10,000
          </button>
          <button data-amount="5000" onClick={this.dispatchButtonAction}>
            WITHDRAW $5,000
          </button>
        </section>

        <p className="App__giveaway">Give away all your cash to charity</p>
      </div>
    );
  }

  dispatchButtonAction(e) {
    const action = getWithdrawAction(e.target.getAttribute("data-amount"));
    store.dispatch(action);
  }
}

export default App;
