import { Component } from "react";
import User from "./User";

import classes from "./Users.module.css";

// -------Functional Based Components--------
// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? "Hide" : "Show"} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

//------------Class Based Components------------

class Users extends Component {
  // we use constructor to initialize state since it is the first thing calls
  constructor() {
    super() // must use beacuse we are extending
    this.state = {
      showUsers: true,
    }; // in class based components your state is always an object
  }

  componentDidUpdate() {
    if(this.props.userList.length === 0){
      throw new Error('now data provided')
    }
  }
  toggleUsersHandler = () => {
    // this.state.showUsers = false; NOT how you do it
    this.setState((prestate) => {
      return { showUsers: !prestate.showUsers };
    }); // set state alway take object as a parameter and will not override state just like functional components, it merges in state
  };

  render() {
    const usersList = (
      <ul>
        {this.props.userList.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
// In line 65 we use '.bind(this)' beacuse here this depend on context and when we click the button context of this is the button not the class here so we have to use bind which ensure this will be class as context.
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

export default Users;
