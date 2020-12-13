import React from 'react'
import './App.css'


class Timeline extends React.Component {

      handleReaction(eventComponent, postid) {
        if(eventComponent === "like"){
          this.props.addLike(postid)
        } else if (eventComponent === "delete") {
          this.props.removepost(postid)
        }
      }

      buildPostHTML() {
        return this.props.posts.map((post) => (
              <div key={post.postid} class="timeline__post">
                <div className="post-info-block">
                  <div className="post-username">
                    {post.username}
                  </div>
                  <div className="post-date">
                    {post.date}
                  </div>
                </div>
                <div className="post-text">
                  {post.posttext}
                </div>
                <div className="post-info-block">
                  <div className="post-reactions">
                    <div className="like" id={post.postid} onClick={(event) => this.handleReaction(event.currentTarget.className, event.currentTarget.id)}>
                      <svg id="heart" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" class="svg-inline--fa fa-heart fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
                    </div>
                    <div className="delete" id={post.postid} onClick={(event) => this.handleReaction(event.currentTarget.className, event.currentTarget.id)}>
                      <svg id="bin" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="dumpster" class="svg-inline--fa fa-dumpster fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M560 160c10.4 0 18-9.8 15.5-19.9l-24-96C549.7 37 543.3 32 536 32h-98.9l25.6 128H560zM272 32H171.5l-25.6 128H272V32zm132.5 0H304v128h126.1L404.5 32zM16 160h97.3l25.6-128H40c-7.3 0-13.7 5-15.5 12.1l-24 96C-2 150.2 5.6 160 16 160zm544 64h-20l4-32H32l4 32H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h28l20 160v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h320v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16l20-160h28c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16z"></path></svg>
                    </div>
                  </div>
                  {post.likes} likes
                </div>
              </div>
            )
        )
      }

      render() {
          return (
            <>
            <div className="timeline">
                {this.buildPostHTML()}
            </div>
            </>
          )
      }
}
export default Timeline