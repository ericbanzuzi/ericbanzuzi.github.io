import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
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
    // const spotlightProjects = {
    //   "No Man's Land": {
    //     title: "no man's land",
    //     desc:
    //       "A third-person survival-mode game where you battle against time and space to return to Earth.",
    //     techStack: "C# (UNITY)",
    //     link: "https://github.com/slakh96/no-mans-land",
    //     open: "https://gazijarin.itch.io/no-mans-land",
    //     image: "/assets/nomansland.png",
    //   },
    //   "Tall Tales": {
    //     title: "tall tales",
    //     desc:
    //       "A multi-player story-telling web game for 3-5 players. Its usage of sockets to allow for concurrent gameplay, connecting friends across the internet.",
    //     techStack: "NODE.JS (SOCKET.IO), REACT.JS, MONGODB",
    //     link: "https://github.com/gazijarin/TallTales",
    //     open: "https://talltales.herokuapp.com/",
    //     image: "/assets/talltales.png",
    //   },
    //   Portfolio: {
    //     title: "portfolio.js",
    //     desc:
    //       "A small JS library that helps with clear and succinct data presentation.",
    //     techStack: "NODE.JS (EXPRESS.JS)",
    //     link: "https://github.com/gazijarin/Portfolio.js",
    //     open: "https://afternoon-ocean-92382.herokuapp.com/",
    //     image: "/assets/portfolio.png",
    //   },
    // };
    const projects = {
      "Reproducibility Study: Two-Stage Training for Calibrated Neural Networks": {
        desc:
          "Replicated the main findings of a paper on two-stage training (TST) for calibrated neural networks, and extended the study with a set of ablation studies on model architectures, hyperparameter choices and loss functions.",
        techStack: "Python, PyTorch, Bash, Wandb",
        link: "https://github.com/JohannaDK/Repro-of-Decoupled-Layers-for-Calibrated-NNs",
        open: "https://openreview.net/forum?id=5Hwzd48ILf",
      },
      "Cross Border Energy Flow Prediction": {
        desc:
          "Designed a serverless ML system and with a visualisation focusing on MLOps best practices. The system generates daily forecasts for electricity flows between the Netherlands and its energy transmission partners. It uses a feature-store-centric pipeline through Hopsworks, GitHub Actions for automated daily updates, and Streamlit for user interface.",
        techStack: "Python, Hopsworks, GitHub Actions, Streamlit, XGBoost",
        link: "https://github.com/banzuzi-carioni/cross-border-electricity-flow-prediction",
        open: "",
      },
      "Word Prediction App": {
        desc:
          "Developed a small Streamlit app that gives word auto-completion suggestions while the user is typing, using an N-gram, RNN or a Transformer model.",
        techStack: "Python, PyTorch, Streamlit",
        link: "https://github.com/rcarioni/word-predictor",
        open: "",
      },
      "Lane Change Prediction": {
        desc:
          "Studied different deep learning approaches (CNNs and a ViT) for lane changing activity recognition and prediction of surrounding vehicles in highways.",
        techStack: "Python, PyTorch",
        link: "https://github.com/ericbanzuzi/lanechange-prediction-highways",
        open: "",
      },
      "Natural Disaster Prediction": {
        desc:
          "Investigating and predicting natural disasters. Full analysis from data processing and EDA to modeling a linear regression model to predict impact and severity of the disasters and a SARIMAX model for forecasting future disasters.",
        techStack: "Python, scikit-learn, pandas",
        link: "https://github.com/ericbanzuzi/natural-disaster-prediction",
        open: "",
      },
      "Fair Federated Learning through Hybrid Algorithms": {
        desc:
          "Developed and evaluated a framework of combining three state-of-the-art federated learning algorithms (FedProx, FedYogi and Ditto) to achieve a better trade-off between model performance and fairness across clients in a federated learning setting.",
        techStack: "Python, Flower, Pytorch, Wandb",
        link: "https://github.com/ericbanzuzi/hybrid-ffl-algorithms",
        open: "",
      },
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/  projects</span>
        </div>
        {/* <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel> */}
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
