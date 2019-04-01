import React from "react";
import Articles from "../components/Article";
import axios from "axios";

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
    });
    // This will get the data from api
  }
  render() {
    return <Articles data={this.state.articles} />;
  }
}

export default ArticleList;
