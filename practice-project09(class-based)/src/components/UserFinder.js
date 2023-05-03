import React, { Fragment, useState, useEffect, Component } from "react";
import UsersContext from "../store/user-context";
import ErrorBoundaries from "./ErrorBoundaries";
import classes from "./UserFinder.module.css";
import Users from "./Users";

class UserFinder extends Component {
  static contextType = UsersContext; // you only can set the static contextType one time.
  // you can also use <Context.consumer> method to access user state or data
  constructor() {
    super();
    this.state = {
      allUsers: [], // we use 'this.context' keyword to access
      userSearch: "",
    };
  }

  componentDidMount() {
    this.setState({ allUsers: this.context.users });
  }

  componentDidUpdate(prevprops, prevState) {
    if (prevState.userSearch != this.state.userSearch) {
      let updateUser = this.context.users.filter((user) =>
        user.name.includes(this.state.userSearch)
      );
      this.setState({ allUsers: updateUser });
    }
  }

  onsetSearch = (e) => {
    this.setState({ userSearch: e.target.value });
  };

  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type="search" onChange={this.onsetSearch.bind(this)} />
        </div>
        <ErrorBoundaries>
          <Users userList={this.state.allUsers} />
        </ErrorBoundaries>
      </Fragment>
    );
  }
}

// const UserFinder = () => {
//   const [allUsers, setUser] = useState(DUMMY_USERS);
//   const [userSearch, setUserSearch] = useState("");

//   useEffect(() => {
//     let id = setTimeout(() => {
//         console.log("execute")
//       setUser(DUMMY_USERS.filter((user) => user.name.includes(userSearch)));
//     },600);
//     return () => {
//         console.log("unmount")
//         clearTimeout(id);
//     }
//   }, [userSearch]);

//   const onsetSearch = (e) => {
//     setUserSearch(e.target.value);
//   };
//   return (
//     <Fragment>
//       <div className={classes.finder}>
//         <input type="search" onChange={onsetSearch} />
//       </div>
//       <Users userList={allUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;
