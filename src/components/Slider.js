import React, {Component} from 'react';
import Image1 from "../Images/Image1.png";
import Image3 from "../Images/Image3.png";
import Image4 from "../Images/Image4.png";


class Slider extends Component {
  render () {
    return(
       <div>
           <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                     <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                     <li data-target="#myCarousel" data-slide-to="1"></li>
                     <li data-target="#myCarousel" data-slide-to="2"></li>
                 </ol>

                 <div className="carousel-inner">
                      <div className="item active">
                          <img src={Image1} alt=""/>
                       </div>

                       <div className="item">
                          <img src={Image3} alt=""/>
                       </div>

                       <div className="item">
                           <img src={Image4} alt=""/>
                       </div>
                  </div>

                  <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                      <span className="glyphicon glyphicon-chevron-left"></span>
                      <span className="sr-only">Previous</span>
                  </a>
                  <a className="right carousel-control" href="#myCarousel" data-slide="next">
                       <span className="glyphicon glyphicon-chevron-right"></span>
                       <span className="sr-only">Next</span>
                  </a>
               </div>
       </div>
    )
  }
}
export default Slider;