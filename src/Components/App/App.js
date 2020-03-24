import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "../../Routes/Homepage/HomePage";
import Startpage from "../../Routes/Startpage/Startpage";
import LeaderBoard from "../LeaderBoard/LeaderBoard";
import Instruction from "../Instruction/Instruction";
import Footer from "../Footer/Footer";
import "./App.css";

class App extends Component {
  state = {
    showLeaderBoard: false,
    showInstruction: false
  };

  toggleLeaderBoard = () => {
    if (
      this.state.showInstruction === true &&
      this.state.showLeaderBoard === false
    ) {
      this.setState({ showInstruction: false });
    }
    this.setState({ showLeaderBoard: !this.state.showLeaderBoard });
  };

  toggleInstruction = () => {
    if (
      this.state.showInstruction === false &&
      this.state.showLeaderBoard === true
    ) {
      this.setState({ showLeaderBoard: false });
    }
    this.setState({ showInstruction: !this.state.showInstruction });
  };

  render() {
    return (
      <div className="App">
        <main>
          <Switch>
            <Route exact path={"/"} component={Homepage} />
            <Route exact path={"/start"} component={Startpage} />
          </Switch>
          {this.state.showLeaderBoard && <LeaderBoard />}
          {this.state.showInstruction && <Instruction />}
          <Footer
            toggleLeaderBoard={this.toggleLeaderBoard}
            toggleInstruction={this.toggleInstruction}
          />
        </main>
      </div>
    );
  }
}
export default App;
