import React, { useState } from "react";
import "./style.css";
import API from "https://randomuser.me/api/"
;
function App() {
  const [developerState, setDeveloperState] = useState({
    picture: "",
    username: "",
    gender: "",
  });

  loadUsers = () => {
    API.getRandom()
    .then(res =>
      this.setState({
        picture: picture
      })
    )
    .catch(err => console.log(err));
};
  }

return (
        <div className="card">
          <div>
            picture: {developerState.image}
          </div>
          <div>
            Username: {developerState.username}
          </div>
          <div>
            gender: {developerState.gender}
          </div>
          <div className="card">
        <card picture={() => setDeveloperState({ ...developerState })} />
        </div>
        </div>
      );
}

export default App;
