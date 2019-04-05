import React from "react";
import { Form, Input, Button } from "antd";
import axios from "axios";

const FormItem = Form.Item;

class CustomForm extends React.Component {
  //   handleFormFill = requestType => {
  //     switch (requestType) {
  //       case "put":
  //         // console.log(this.props.title1);
  //         return this.props.title1;
  //         break;

  //       default:
  //         return null;
  //         break;
  //     }
  //   };
  handleFormSubmit = (event, requestType, articleID) => {
    // event.preventDefault();
    const title = event.target.elements.title.value;
    const content = event.target.elements.content.value;
    console.log(title, content);

    switch (requestType) {
      case "post":
        axios
          .post("http://localhost:8000/api/", {
            title: title,
            content: content
          })
          .then(res => console.log(res))
          .catch(err => console.log(err));
        break;
      case "put":
        axios
          .put(`http://localhost:8000/api/${articleID}/`, {
            title: title,
            content: content
          })
          .then(res => console.log(res))
          .catch(err => console.log(err));
        break;

      default:
        break;
    }
  };
  render() {
    return (
      <div>
        <Form
          onSubmit={event =>
            this.handleFormSubmit(
              event,
              this.props.requestType,
              this.props.articleID
            )
          }
        >
          <Form.Item label="Title">
            <Input
              name="title"
              placeholder="Put a title Here"
              // value={this.handleFormFill(this.props.requestType)}
            />
          </Form.Item>
          <Form.Item label="Content">
            <Input name="content" placeholder="Enter some content..." />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {this.props.btnText}
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
export default CustomForm;
