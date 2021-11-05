import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import WeekList from "./WeekList";

class Week extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weekNo: null,
      content: null
    }
  }

  fetchMd(num) {
    const mdPath = require(`./week/${num}.md`).default;
    fetch(mdPath)
      .then(response => {return response.text()})
      .then(text => this.setState({ content: text, weekNo: num }));
  }

  componentDidMount = () => this.fetchMd(this.props.week);

  handleWeekListClick(num) {
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
            <ReactMarkdown rehypePlugins={[rehypeRaw]} children={this.state.content} />
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
