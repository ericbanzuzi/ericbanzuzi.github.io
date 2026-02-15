import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    const one = (
      <p>
        I am currently a <b>Software Engineer</b> at
        <a href="https://focal.inc/"> Focal</a>, where I help build
        the home of performance marketing creatives. Previously, I have been at
        <a href="https://rucio.cern.ch/"> CERN </a> and{" "}
        <a href="https://www.kone.com/en/company/"> KONE</a>. I hold a
        <b> Master's of Science</b> in{" "}
        <b>Machine Learning </b>from{" "} 
        <a href="https://www.kth.se/en"> KTH Royal Institute of Technology</a>.
      </p>
    );
    const two = (
      <p>
        Outside of work, I’m nerdy about tech gadgets, and enjoy outdoor activities like running, hiking and tennis. 
        If there’s an Arsenal match on or a new season of a series dropping, do not expect a fast response 🦦. 
      </p>
    );

    const tech_stack = [
      "Python",
      "Java",
      "Typescript",
      "React.js",
      "Javascript ES6+",
      "SQL",
    ];

    const ai_stack = [
      "PyTorch", 
      "TensorFlow", 
      "Keras", 
      "scikit-learn", 
      "Spark", 
      "pandas", 
      "Matplotlib", 
      "Seaborn", 
      "Wandb", 
      "MLFlow", 
      "LangChain",
      "LlamaIndex",
      "Smolagents",
      "HuggingFace Transformers",
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}

              <div className="tech-stack-header">Programming</div>
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              
              <div className="tech-stack-header">AI & Data</div>
              <ul className="ml-stack">
                {ai_stack.map(function (ai_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{ai_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              
              {[two]}
            </div>
            <div className="about-image">
              <img alt="Eric Banzuzi" src={"/assets/eric.jpg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
