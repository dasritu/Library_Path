import React from 'react';
import '../styles/User.css'
const MyCarousel = () => {
  return (
    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel" style={{"margin-top":"20px"}}>
      <div className="carousel-inner">
        <div className="carousel-item active"> 
          <div className="d-flex justify-content-between">
            {/* First Card */}
            <div className="card" style={{ width: '10rem',height:'25vh' }}>
              <img src="https://m.media-amazon.com/images/I/51xPgn8HYLS._SY264_BO1,204,203,200_QL40_FMwebp_.jpg" className="card-img-top" alt="..." style={{ "margin-top":"12px",
    "margin-left":"30px",
    "width": "31%"}}/>
              <div className="card-body">
                <a href="/" className="btn btn-success" style={{"height":"30px"}}>
                 RETURN
                </a>
              </div>
            </div>

            {/* Second Card */}
            <div className="card" style={{ width: '10rem' ,height:'25vh'}}>
            <img src="https://m.media-amazon.com/images/I/51xPgn8HYLS._SY264_BO1,204,203,200_QL40_FMwebp_.jpg" className="card-img-top" alt="..." style={{ "margin-top":"12px",
    "margin-left":"30px",
    "width": "31%"}}/>
              <div className="card-body">
                <a href="/" className="btn btn-success">
                 RETURN
                </a>
              </div>
            </div>
            <div className="card" style={{ width: '10rem' ,height:'25vh'}}>
            <img src="https://m.media-amazon.com/images/I/51xPgn8HYLS._SY264_BO1,204,203,200_QL40_FMwebp_.jpg" className="card-img-top" alt="..." style={{ "margin-top":"12px",
    "margin-left":"30px",
    "width": "31%"}}/>
              <div className="card-body">
                <a href="/" className="btn btn-success">
                 RETURN
                </a>
              </div>
            </div>
            {/* Add more cards here */}
          </div>
        </div>

        {/* Add more carousel items with d-flex justify-content-between */}
        <div className="carousel-item">
          <div className="d-flex justify-content-between">
            {/* Third Card */}
            <div className="card" style={{ width: '10rem',height:'25vh' }}>
            <img src="https://m.media-amazon.com/images/I/51xPgn8HYLS._SY264_BO1,204,203,200_QL40_FMwebp_.jpg" className="card-img-top" alt="..." style={{ "margin-top":"12px",
    "margin-left":"30px",
    "width": "31%"}}/>
              <div className="card-body">
                <a href="/" className="btn btn-success">
                 RETURN
                </a>
              </div>
            </div>

            {/* Fourth Card */}
            <div className="card" style={{ width: '10rem' ,height:'25vh'}}>
            <img src="https://m.media-amazon.com/images/I/51xPgn8HYLS._SY264_BO1,204,203,200_QL40_FMwebp_.jpg" className="card-img-top" alt="..." style={{ "margin-top":"12px",
    "margin-left":"30px",
    "width": "31%"}}/>
              <div className="card-body">
                <a href="/" className="btn btn-success">
                 RETURN
                </a>
              </div>
            </div>

            {/* Add more cards here */}
          </div>
        </div>

        {/* Add more carousel items with d-flex justify-content-between */}
      </div>

      {/* Add carousel controls */}
      <a
        className="carousel-control-prev"
        href="#myCarousel"
        role="button"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon custom-arrow" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#myCarousel"
        role="button"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon custom-arrow" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>
    </div>
  );
};

export default MyCarousel;
