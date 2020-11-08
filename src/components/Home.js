import React from"react";
import {Button} from "react-bootstrap"


const Home = (props) => {
  console.log ("Home props :" , props);
  return (
    <div>
      <img src="https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80 "alt="pizza"/>
      <Button>Pizza?</Button>
    </div>
  )
}

export default Home; 