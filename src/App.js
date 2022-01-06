import React, {useState} from "react";
import axios from 'axios';
function App() {

  let [showLoader , setShowLoader] = useState(false) ; 
  let [ joke, setJoke] = useState() ; 
  
  let getJoke = () => {
    setShowLoader(true) ; 
    setJoke();
    axios.get('https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/type/general').then( (response) => {
      console.log(response);
      setJoke(response.data[0]);
      setShowLoader(false) ; 
    });
  }

  return <div className="App">
      {
        showLoader && <div className="spinner-border d-block" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
      }

      {
        joke && <>
            <h2> { joke.setup }  </h2>
            <h1> {joke.punchline} </h1>
        </>
      }

      <button className="btn btn-danger"  onClick={getJoke}> Get another joke !!  </button>
  </div>;
}

export default App;
