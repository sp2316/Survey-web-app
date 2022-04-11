import React from "react";
import Question from "./Question";
import { data } from "../data";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { questions: [], answers: [] };
  }

  componentDidMount() {
    // generating random questions
    let questions = [],
      answers = [];
    let mem = [];
    while (questions.length < 10) {
      let val = data[Math.floor(Math.random() * data.length)]["questiontext"];
      //to avoid duplicate questions
      if (mem.indexOf(val) == -1) {
        questions.push(val);
        answers.push("");
        mem.push(val);
      }
    }

    this.setState({ questions, answers }, () => {
      // console.log(this.state.questions);
    });
  }

  setAnswers = (answer, id) => {
    let { answers } = this.state;
    if (id < answer.length) {
      answers[id] = answer;
      this.setState({ answers });
    }
  };

  render() {
    const { questions } = this.state;

    return (
      <form
        method="post"
        action="http://localhost:8000/post"
        method="post"
        style={{ backgroundColor: "lightgrey" }}
      >
        <ol style={{ marginTop: "0px", paddingTop: "10px" }}>
          {questions.map((q, i) => (
            <li>
              <Question question={q} id={i} change={this.setAnswers} />
            </li>
          ))}
        </ol>
        <button style={styles}>SUBMIT</button>
      </form>
    );
  }
}
const styles = {
  marginTop: "20px",
  marginLeft: "50%",
  display: "inline",
  width: "200px",
  height: "50px",
  outline: "None",
};
export default Home;
