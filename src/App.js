import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import NotFound from "./NotFound";
import Week from "./Week";
import WeekList from "./WeekList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curWeek: this.props.week
    }
  }

  render() {
    switch (this.state.curWeek) {
      case 0:
        return (
          <>
          <Header onClick={() => this.setState({curWeek: 0})} />
          <div className="container">
            <div className="row my-5">
              <div className="col-md-2 col-lg-3" />
              <div className="col-md-8 col-lg-6">
                <Home />
                <div className="mt-4 text-center">
                  <hr />
                  <h4>Journal entries</h4>
                  <div className="week-list mt-4 d-flex flex-wrap justify-content-center">
                    <WeekList onClick={(num) => this.setState({curWeek: num})} />
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-lg-3" />
            </div>
          </div>
          <Footer />
          </>
        );
      case -1:
        return (
          <>
          <Header onClick={() => this.setState({curWeek: 0})} />
          <div className="container">
            <div className="row my-5">
              <div className="col-md-2 col-lg-3" />
              <div className="col-md-8 col-lg-6">
                <NotFound />
                <div className="mt-4 text-center">
                  <hr />
                  <h4>Journal entries</h4>
                  <div className="week-list mt-4 d-flex flex-wrap justify-content-center">
                    <WeekList onClick={(num) => this.setState({curWeek: num})} />
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-lg-3" />
            </div>
          </div>
          <Footer />
          </>
        );
      default:
        return (
          <>
          <Header onClick={() => this.setState({curWeek: 0})} />
          <div className="container">
            <Week week={this.state.curWeek} onWeekListClick={(num) => this.setState({curWeek: num})} />
          </div>
          <Footer />
          </>
        );
    }
  }
}

export default App;
