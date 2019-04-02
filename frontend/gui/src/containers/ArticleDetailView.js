import React from "react";
import axios from "axios";

import { Card, Button } from "antd";
import CustomForm from "../components/Form";
class ArticleDetail extends React.Component {
  state = {
    article: {}
  };
  componentDidMount() {
    const articleID = this.props.match.params.articleID;
    // This is called everytime we mount this component
    axios.get(`http://localhost:8000/api/${articleID}`).then(res => {
      this.setState({
        article: res.data
      });
      console.log(res.data);
    });
    // This will get the data from api
  }
  handleDelete = event => {
    const articleID = this.props.match.params.articleID;
    axios.delete(`http://localhost:8000/api/${articleID}/`);
  };

  render() {
    return (
      <div>
        <Card title={this.state.article.title}>
          <p>{this.state.article.content}</p>
        </Card>
        <br />
        <h2>Edit the Article</h2>
        <CustomForm
          requestType="put"
          articleID={this.props.match.params.articleID}
          btnText="Update"
        />
        <form onSubmit={this.handleDelete}>
          <Button type="danger" htmlType="submit">
            Delete
          </Button>
        </form>
      </div>
    );
  }
}

export default ArticleDetail;
