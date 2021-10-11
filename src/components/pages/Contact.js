import React from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Contact = () => {
  return (
    <div className="shop contact">
      <div className="container">
        <div className="shop__text">
          <h1>Contact Us</h1>
        </div>
      </div>
      <div className="container secondCon">
        <form class="form-horizontal" action="/action_page.php">
        <div class="form-group">
            <label class="control-label col-sm-2" for="email">First Name:</label>
            <div class="col-sm-10">
              <input type="email" class="form-control" id="email" placeholder="Enter First Name"/>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2" for="email">Last Name:</label>
            <div class="col-sm-10">
              <input type="email" class="form-control" id="email" placeholder="Enter Last name"/>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2" for="email">Email:</label>
            <div class="col-sm-10">
              <input type="email" class="form-control" id="email" placeholder="Enter email"/>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2" for="pwd">Message:</label>
            <div class="col-sm-10">
              <input type="password" class="form-control" id="pwd" placeholder="Enter Your Message"/>
            </div>
          </div>
         
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
        <br/>
      </div>
    <br />
    </div>
  );
};

export default Contact;
