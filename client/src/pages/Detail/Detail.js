import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import { connect } from "react-redux";


let mapStateToProps = (store) => {
  return {
      data: store.data.data
  }
}

class Detail extends Component {
  state = {
    post: {}
  };

  componentDidMount() {
    API.getPost(this.props.match.params.id)
      .then(res => this.setState({ post: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.props)
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">

              <h1>
                {this.state.post.title} by {this.state.post.user}
              </h1>

          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Description</h1>
              <p>
                {this.state.post.description}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/findTool">← Back to Posts</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default connect(mapStateToProps)(Detail);