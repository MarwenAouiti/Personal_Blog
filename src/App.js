import React, { Component } from "react";
import PageWrapper from "./components/PageWrapper";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { connect } from "react-redux";

// Pages
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import AdminWrapper from "./components/AdminWrapper";
import Login from "./components/pages/Login";
import Blog from "./components/pages/Blog";
import Single from "./components/pages/Single";
import Signup from "./components/pages/Signup";

// Admin Pages
import Dashboard from "./components/pages/Admin/Dashboard";
import Users from "./components/pages/Admin/Users";
import Posts from "./components/pages/Admin/Posts";
import AddPost from "./components/pages/Admin/AddPost";
import LoginWrapper from "./components/LoginWrapper";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route
            exact={true}
            path="/admin/users"
            render={props => {
              return (
                <div>
                  {this.props.auth.token ? (
                    <AdminWrapper>
                      <Users />
                    </AdminWrapper>
                  ) : (
                    <LoginWrapper>
                      <Login />
                    </LoginWrapper>
                  )}
                </div>
              );
            }}
          />
          <Route
            exact={true}
            path="/admin/posts"
            render={props => {
              return (
                <div>
                  {this.props.auth.token ? (
                    <AdminWrapper>
                      <Posts />
                    </AdminWrapper>
                  ) : (
                    <LoginWrapper>
                      <Login />
                    </LoginWrapper>
                  )}
                </div>
              );
            }}
          />
          <Route
            exact={true}
            path="/admin/posts/:view"
            render={props => {
              return (
                <div>
                  {this.props.auth.token ? (
                    <AdminWrapper>
                      <AddPost />
                    </AdminWrapper>
                  ) : (
                    <LoginWrapper>
                      <Login />
                    </LoginWrapper>
                  )}
                </div>
              );
            }}
          />
          <Route
            exact={true}
            path="/admin/posts/:view/:id"
            render={props => {
              return (
                <div>
                  {this.props.auth.token ? (
                    <AdminWrapper>
                      <AddPost />
                    </AdminWrapper>
                  ) : (
                    <LoginWrapper>
                      <Login />
                    </LoginWrapper>
                  )}
                </div>
              );
            }}
          />
          <Route
            exact={true}
            path="/signup"
            render={props => {
              if (this.props.auth.token) {
                return <Redirect to="/" />;
              } else {
                return (
                  <LoginWrapper>
                    <Signup />
                  </LoginWrapper>
                );
              }
            }}
          />
          <Route
            exact={true}
            path="/admin"
            render={props => {
              return (
                <div>
                  {this.props.auth.token ? (
                    <AdminWrapper>
                      <Dashboard />
                    </AdminWrapper>
                  ) : (
                    <LoginWrapper>
                      <Login />
                    </LoginWrapper>
                  )}
                </div>
              );
            }}
          />

          {/* When you are directed to this path display the component inside {} */}
          <Route
            exact={true}
            path="/"
            render={props => (
              <PageWrapper>
                <Home {...props} />
              </PageWrapper>
            )}
          />

          <Route
            path="/blog/:slug"
            exact={true}
            render={props => (
              <PageWrapper>
                <Single {...props} />
              </PageWrapper>
            )}
          />
          <Route
            path="/blog"
            exact={true}
            render={props => (
              <PageWrapper>
                <Blog {...props} />
              </PageWrapper>
            )}
          />
          <Route
            path="/about"
            exact={true}
            render={props => (
              <PageWrapper>
                <About {...props} />
              </PageWrapper>
            )}
          />
          <Route
            path="/contact"
            exact={true}
            render={props => (
              <PageWrapper>
                <Contact {...props} />
              </PageWrapper>
            )}
          />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
