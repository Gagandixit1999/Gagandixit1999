import React from 'react'
import profile from "./images/pic1.jpg";
import App from './App'
export default function Home() {
  return (
<>
<App/>
<h1>Home</h1>
<img src={profile}></img>


</>  );
}