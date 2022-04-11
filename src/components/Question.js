import React from "react";
class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      answer: "",
    };
  }

  handleChange = async (e) => {
    await this.setState({
      question: this.props.question,
      answer: e.currentTarget.value,
    });

    this.props.change(this.state.answer, this.props.id);
  };
  render() {
    const q = this.props.question;
    return (
      <div>
        {q}
        <ul style={styles.ul}>
          <li style={styles.li}>
            <input
              type="radio"
              value=" Strongly Disagree"
              onChange={this.handleChange}
              name={q}
              required
            />
            Strongly Disagree
          </li>
          <li style={styles.li}>
            <input
              type="radio"
              value="Disagree"
              onChange={this.handleChange}
              name={q}
            />
            Disagree
          </li>
          <li style={styles.li}>
            <input
              type="radio"
              value=" Slightly Disagree"
              onChange={this.handleChange}
              name={q}
            />
            Slightly Disagree
          </li>
          <li style={styles.li}>
            <input
              type="radio"
              value="Neutral"
              onChange={this.handleChange}
              name={q}
            />
            Neutral
          </li>
          <li style={styles.li}>
            <input
              type="radio"
              value=" Slightly Agree"
              onChange={this.handleChange}
              name={q}
            />
            Slightly Agree
          </li>
          <li style={styles.li}>
            <input
              type="radio"
              value="Agree"
              name={q}
              onChange={this.handleChange}
            />
            Agree
          </li>
          <li style={styles.li}>
            <input
              type="radio"
              value="Strongly Agree"
              onChange={this.handleChange}
              name={q}
            />
            Strongly Agree
          </li>
        </ul>
      </div>
    );
  }
}

const styles = {
  ul: {
    listStyle: "None",
  },

  li: {
    margin: "10px",
  },
};
export default Question;
