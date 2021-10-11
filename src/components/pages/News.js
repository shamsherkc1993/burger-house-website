
import React from "react";
import { Link } from "react-router-dom";
import burger1 from '../../../src/img/burger1.jpg'
import burger2 from '../../../src/img/burger5.jpg'
import burger3 from '../../../src/img/burger6.jpg'


const News = () => {
  return (
    <div className="shop">
      <div className="container">
        <div className="shop__text">
          <div>
            <h1>View our latest news</h1>
          </div>
        </div>
      </div>
      <br/><br/><br/>
     <div className="container ">
       <div className="row">
        <div className="col-sm-4">
            <div class="card" style={{width: "18rem;"}}>
            <img src={burger1} class="card-img-top" alt="newsimg"/>
            <div class="card-body">
              <h5 class="card-title">New Year offer</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to="/" class="btn btn-primary">View Detail</Link>
            </div>
          </div>
        </div>

        <div className="col-sm-4">
            <div class="card" style={{width: "18rem;"}}>
            <img src={burger2} class="card-img-top" alt="newsimg"/>
            <div class="card-body">
              <h5 class="card-title">New Burger in market</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to="/" class="btn btn-primary">View Detail</Link>
            </div>
          </div>
        </div>

        <div className="col-sm-4">
            <div class="card" style={{width: "18rem;"}}>
            <img src={burger3} class="card-img-top" alt="newsimg"/>
            <div class="card-body">
              <h5 class="card-title">Christmas Offer</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to="/" class="btn btn-primary">View Detail</Link>
            </div>
          </div>
        </div>
       </div><br/>
     </div>
    </div>
  );
};

export default News;
