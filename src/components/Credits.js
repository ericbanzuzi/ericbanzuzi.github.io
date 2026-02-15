import React from "react";
import "../styles/Credits.css";
import FadeInSection from "./FadeInSection";

class Credits extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    return (
      <FadeInSection>
        <div id="credits">
          <div className="ending-credits">
            <div>Original design by Gazi Jarin. Developed & Modified by Eric Banzuzi.</div>
            <div>© {new Date().getFullYear()} Eric Banzuzi</div>
          </div>
        </div>
      </FadeInSection>
    );

  }
}

export default Credits;
