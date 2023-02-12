import React from 'react';
import { Component } from "react";

class Profile extends Component {

  render() {
    /* TODO: render information about the developers */
    return <h2>This application is in three parts. The frontend and backend are hosted on Github, with the front end being created in REACTJS, and the backend being created in javascript, using Axios and Mongoose for data transfer between the front and back end, and the NoSQL Database hosted at Atlas. Data handed in from the user in front end is passed to the back end, which is then socketed into a database so the user's book preferences and status can be saved.</h2>
  }
};

export default Profile;
