import React from "react";
import { WhatsappShareButton, WhatsappIcon } from "react-share";
import holi from '../assets/holi.jpg'
import '../style/glow.css'

class App extends React.Component {
  state = {
    query: "",
    author:""
  };

  openApp() {
    if (navigator.share) {
      navigator.share({});
    }
  }
  onInputChange = (event) => {
    this.setState({ query: event.target.value });
    //let a= window.location.search;
    //this.setState({author:a.substring(9)});
   // console.log(a.substring(9));
  };
  componentWillMount(){
    this.setState({author:window.location.search.substring(9)})
  }

  render() {
    return (
      <div className="ui container">
        <h2 style={{ alignItems: "center" }}> Welcome to Festival</h2>
        <div>
            <img src= {holi} alt = "photo nhi h bahi" style={{height: window.innerHeight/2,  width: window.innerWidth/2}}/>
            <h2 className="glow"> {this.state.author} has sent this message to you</h2>
          <div>Enter Your Name</div>
          <input
            type="text"
            onChange={this.onInputChange}
            value={this.state.query}
          />
          <div>
            <WhatsappShareButton
              title={`${this.state.query} Click link to share to friends`}
              url={`https://greeting-app007.web.app/?myparam=${this.state.query}`}
              children={"yo"}
            >
              <WhatsappIcon size={32} round={true} />
                <a onClick={this.openApp}> {this.state.query}  - Click here to send to friends</a>
            </WhatsappShareButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
