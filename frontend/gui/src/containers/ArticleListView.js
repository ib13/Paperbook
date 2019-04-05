import React from "react";
import Articles from "../components/Article";
import axios from "axios";
import CustomForm from "../components/Form";

const listData = [];

class ArticleList extends React.Component {
  state = {
    articles: []
  };

  componentDidMount() {
    // This is called everytime we mount this component
    axios.get("http://localhost:8000/api/").then(res => {
      this.setState({
        articles: res.data
      });
      console.log(res.data);
      console.log(res);
    });
    // This will get the data from api
  }
  render() {
    return (
      <div>
        <Articles data={this.state.articles} />
        <br />
        <h2>Create an Article</h2>
        <CustomForm requestType="post" articleID={null} btnText="Create" />
      </div>
    );
  }
}

export default ArticleList;
