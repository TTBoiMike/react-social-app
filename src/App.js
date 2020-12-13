import React from 'react'
// import CSS files
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
// import boostrap components
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
// component imports
import Timeline from './timeline'
import Create from './create'
// react router imports
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      publishedPosts: []
    }
    toastr.clear();
  }

  updatePublishedPosts(username, posttext, date) {
    let postid = this.state.publishedPosts.length
    let likes = 0
    const newPost = {username, posttext, date, postid, likes}
    let updatedPosts = [...this.state.publishedPosts, newPost] 
    this.setState({
      publishedPosts: updatedPosts
    })
  }

  addLike(postid) {
    toastr.success("Nice, you've liked the post.")
    let currentPosts = this.state.publishedPosts
    currentPosts[postid].likes += 1;
    console.log(currentPosts);
    this.setState({
      publishedPosts: Object.assign(currentPosts, this.state.publishedPosts)
    })
  }

  render() {
    return (
      <Router>
          <Navbar bg="light" expand="md">
            <Navbar.Brand>
              Social Media App
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
              <Nav>
                <Link className="nav-link" to="/">Timeline</Link>
                <Link className="nav-link" to="/create">Create post</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
      <Container>
        <Switch>
          <Route path="/create">
          <Create onsubmit={(username, posttext, date) => {this.updatePublishedPosts(username, posttext, date)}}/>
          </Route>
          <Route exact path="/">
          <Timeline posts={this.state.publishedPosts}  addLike={(postId) => this.addLike(postId)} />          </Route>
          <Route path="/">
            Error: 404 not found
          </Route>
        </Switch>
      </Container>
      </Router>
    )
  }
}

export default App;