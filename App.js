import React from 'react';
import airplane from './airplane.jpg';
import './App.css';

function Home() {
  return (
    <div className="Home">
	
	<div className="Home-prag">
	<a href= "http://www.pragmatics.com/">Pragmatics</a>
	</div>
      <header className="Home-header">
        
        <p>
          Pragmatics Air
        </p>
      
      </header>
	<nav className = "Home-nav">
	  <pre>
 	   Log in    Sign Up    Language    Search
	  </pre>
	</nav>

	<body className="Home-body">

	  <article className ="Home-dir">
	    <p> Home</p><p>
	    View Listings </p><p>
	    Hotels</p><p>
	    Dining</p><p>
	    Shopping</p><p>
	    Parking</p><p>
	    Log in</p><p>
	    Help </p>
	  </article>

	  <aside className = "Home-track">
	    <p>Track My Flight:</p>
	  </aside>

	  <section className="Home-image">
	
	    <img src={airplane} className="Home-pic" alt="pic"/>

	  </section>

	</body>
	<footer className="Home-footer">
	  &copy;2019 Pragmatics Inc. All Rights Reserved.
	</footer>

    </div>
  );
}

export default Home;
