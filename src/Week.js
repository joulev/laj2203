import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import WeekList from "./WeekList";

function Spinner() {
  return (
    <div className="text-center">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

class Week extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weekNo: this.props.week,
      loaded: false,
      content: null
    }
  }

  fetchMd(num) {
    const mdPath = require(`./week/${num}.md`).default;
    fetch(mdPath)
      .then(response => {return response.text()})
      .then(text => this.setState({ loaded: true, content: text }));
  }

  componentDidMount = () => this.fetchMd(this.props.week);

  handleWeekListClick(num) {
    this.setState({ weekNo: num, loaded: false });
    this.fetchMd(num);
    this.props.onWeekListClick(num);
  }

  render() {
    return (
      <>
      <div className="row">
        <div className="col-md-4">
          <div className="sticky pt-5" id="left-pane">
            <h1>
              Week {this.state.weekNo}
            </h1>
            <hr className="mt-4 mb-0" />
            <div className="d-none d-md-block mt-3">
              <h4>Journal entries</h4>
              <div className="week-list mt-4 d-flex flex-wrap">
                <WeekList onClick={(num) => this.handleWeekListClick(num)} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 serif mb-3" id="content">
          <div className="content">
            {this.state.loaded
            ? <ReactMarkdown rehypePlugins={[rehypeRaw]} children={this.state.content} />
            : <Spinner />}
          </div>
        </div>
      </div>
      <div className="d-md-none my-3 text-center">
        <hr />
        <h4>Journal entries</h4>
        <div className="week-list mt-4 d-flex flex-wrap justify-content-center">
          <WeekList onClick={(num) => this.handleWeekListClick(num)} />
        </div>
      </div>
      </>
    );
  }
}

export default Week;
