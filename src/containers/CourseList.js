import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { List, Skeleton } from "antd";
import * as actions from "../store/actions/courses";
import Hoc from "../hoc/hoc";

class CourseList extends React.PureComponent {
  componentDidMount() {
    if (this.props.token !== undefined && this.props.token !== null) {
      this.props.getCOURSES(this.props.token);
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.token !== this.props.token) {
      if (newProps.token !== undefined && newProps.token !== null) {
        this.props.getCOURSES(newProps.token);
      }
    }
  }

  renderItem(item) {
    return (
      <Link to={`/courses/${item.id}`}>
        <List.Item>{item.name}</List.Item>
      </Link>
    );
  }

  render() {
    return (
      <Hoc>
        {this.props.loading ? (
          <Skeleton active />
        ) : (
          <div>
            <h3 style={{ margin: "16px 0" }}>Courses</h3>
            <List
              size="large"
              bordered
              dataSource={this.props.courses}
              renderItem={item => this.renderItem(item)}
            />
          </div>
        )}
      </Hoc>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    courses: state.courses.courses,
    loading: state.courses.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCOURSES: token => dispatch(actions.getCOURSES(token))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseList);
