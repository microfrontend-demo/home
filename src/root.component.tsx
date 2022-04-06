import React, { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import axios from "axios";

export default function Root(props) {
  return (
    <BrowserRouter basename="/">
      <div><p>Welcome to my company!</p></div>
    </BrowserRouter>
  )
}
