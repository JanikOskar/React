import React from 'react';
import './App.css';

function App() {
  return (
      <body>
        <div class="triangle">
          
          <form class="inputt">
            <input type="text" placeholder="what to do" onfocus="this.value=''" name="todo" class="inpu"></input>
          <input type="submit" value="Send"></input>
          </form>
          <div class="container">
<div class="box1">
<p>ToDo</p>
</div>
<div class="box2"
><p>Active</p>
</div>
<div class="box3">
<p>Done</p>
</div>
</div>
        </div>
      </body>

  );
}

export default App;
