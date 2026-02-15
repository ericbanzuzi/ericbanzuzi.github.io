import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  } else {
    return {
      id: `vertical-tab-${index}`,
    };
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: 300,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    Focal: {
      jobTitle: "Software Engineer @",
      duration: "FEB 2026 - PRESENT",
      desc: [
        "TBD",
      ],
    },
    KONE: {
      jobTitle: "Data Scientist Trainee @",
      duration: "MAY 2025 - DEC 2025",
      desc: [
        "Developed and maintained end-to-end machine learning pipelines for churn prediction of elevator maintenance contracts.",
        "Fixed and improved logic in ETL tasks, training data generation, and batch prediction tasks, increasing pipeline reliability and robustness.",
        "Analysed and built new model features to improve predictions, translating business insights into meaningful predictive features in close collaboration with the business advisors.",
        "Enhanced the prediction model performance and reproducibility by implementing hyperparameter tuning with Optuna and experiment tracking with MLFlow.",
        "Defined a set of KPIs and built a Power BI dashboard to monitor churn metrics and model performance over time."
      ],
    },
    CERN: {
      jobTitle: "Summer Student @",
      duration: "JUN 2024 - AUG 2024",
      desc: [
        "Contributed to Rucio, a Python-based, open-source exabyte-scale distributed data management system used by ATLAS, CMS, and numerous other scientific communities.",
        "Modernised the command-line client interface, refactored legacy code, and fixed user-reported bugs following strict CI/CD and code review standards.",
        "Worked in an international, agile team and gained hands-on experience with containers, automated testing, and large-scale distributed systems."
      ],
    },
    Oxford_Instruments: {
      jobTitle: "R&D Intern @",
      duration: "JUL 2021 - MAY 2024 | PART-TIME",
      desc: [
        "Developed data analysis and test instrument control software for sensor characterization, including small CLI and GUI (PyQt/Tkinter) apps with real time monitoring and control over sensor measurements.",
        "Developed software tools to support experts with data analysis, processing and format conversion of results to other platforms, reducing manual effort and enabling reliable integration of test results with internal platforms.",
      ],
    },
    ABB: {
      jobTitle: "Data Analyst Intern @",
      duration: "JUL 2023 - AUG 2023",
      desc: [
        "Analysed user data on the usage of software tools and drives to identify trends and gaps in the data.",
        "Defined and documented improved data collection requirements for Drive Composer 3.X software by identifying the most valuable data points to monitor.",
        "Built interactive reports in Azure Application Insights to support product managers in data-driven decision-making.",
      ],
    },
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key.replace("_", " ")} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key.replace("_", " ")}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                <FadeInSection delay={`${i + 1}00ms`}>
                  <li key={i}>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;
