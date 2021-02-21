import React, {Compononent} from 'react';
import {BrowserRouter} from 'react-router-dom';


function IntroPage() {
  return (
    <div className ="container center">

      <div className = "card">
        <div className = "card-content">
          <span className = "card-title blue-text center">Welcome to Company X </span>
        </div>
        <div className = "card-action">
            <div className = "row">
              <div className = "col s12 m6">
              <iframe width="500" height="300" src="https://www.youtube.com/embed/vkBW7RoGG1Q" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div className = "col s12 m6">
                <h5 className="blue-text">Company Bio</h5>
                <p className = "left">We are a team of college students working on this project like it's our full time job. Any amount would help support and continue development on this project and is greatly appreciated.</p>
              </div>
            </div>
        </div>
      </div>

      <div className = "card">
        <div className = "card-content">
          <span className = "card-title blue-text center">Quality</span>
        </div>
        <div className = "card-action">
            <div className = "row">
              <div className = "col s12 m4">
                <div className="icon-block">
                    <h2 className="center light-blue-text"><i class="material-icons medium">flash_on</i></h2>
                    <h5 className="center">Speeds up development</h5>

                    <p className="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
                </div>
              </div>
              <div className = "col s12 m4">
                <div class="icon-block">
                  <h2 class="center light-blue-text"><i class="material-icons medium">group</i></h2>
                  <h5 class="center">User Experience Focused</h5>

                  <p class="light">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
                </div>
              </div>
              <div className = "col s12 m4">
                <div class="icon-block">
                  <h2 class="center light-blue-text"><i class="material-icons medium">settings</i></h2>
                  <h5 class="center">Easy to work with</h5>

                  <p class="light">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
                </div>
              </div>
            </div>
        </div>
      </div>

      <div className = "card">
        <div className = "card-content">
          <span className = "card-title blue-text center"> Contact us </span>
        </div>
        <div className = "card-action">
            <div className = "row">
              <div className = "col s12 m6 offset-m3">
                    <form>

                      <div className = "input-field">
                        <i className="material-icons prefix">email</i>
                        <input type="email" id= "email"></input>
                        <label for="email">Your Email</label>
                      </div>

                      <div className = "input-field">
                        <i className="material-icons prefix">face</i>
                        <input type="text" id= "name"></input>
                        <label for="name">Your Name</label>
                      </div> 

                      <div className="input-field">
                        <i className="material-icons prefix">message</i>
                        <textarea id="message" class = "materialize-textarea" cols="40" rows="10"></textarea>
                        <label for="message"> Your Message</label>
                      </div>

                      <div className="input-field">
                          <button className="btn blue">Submit</button>
                      </div>
              
            
                      
                    </form>
              </div>
            </div>
        </div>
      </div>


    </div>
  );
}

export default IntroPage;