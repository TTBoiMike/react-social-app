import React from 'react'
import './App.css'
import Container from 'react-bootstrap/Container'
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'

class Create extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            posttext: "",
            date: "",
            image: ""
        }
    }
    
    handleChange(event) {
        const newState = {};
        newState[event.target.name] = event.target.value
        this.setState(newState);
        console.log(this.state)
    }

    handleSubmit(event) {
        toastr.success("Your post has been published. Hurray!")
        event.preventDefault();
        this.props.onsubmit(this.state.username, this.state.posttext, this.state.date);
        this.setState({
            username: "",
            posttext: "",
            date: ""
        })
    }

    
    render() {
        return (
            <>
            <Container>
                <section className="profile">
                        <h2>Publish a Post</h2>
                    <form className="create-post-form" onSubmit={(e) => this.handleSubmit(e)} onChange={(e) => this.handleChange(e)}>
                        <div className="profile-form-top-row">
                            <input type="text" name="username" id="username" placeholder="enter username" value={this.state.username} required/>
                            <input type="date" id="date" name="date" value={this.state.date} required />
                        </div>
                        <div>
                            <textarea id="posttext" name="posttext" rows="5" value={this.state.posttext} required />
                        </div>
                        <button type="submit">Publish</button>
                    </form>
                </section>
            </Container>
            </>  
        )
    }
}
export default Create