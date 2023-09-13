import React from 'react'
import '../styles/User.css';

import Ritu from '../image/RituImage.JPG';
import MyCarousel from './MyCarousel';
export default function User() {
  return (
    <div>
      <div className="box">
        <div className="box-left">
            <div className="user-detail">
                <div className="user-img">
                  
                    <img src={Ritu} alt="" />
                </div>
                <div className="details">
                    <h6>Name:</h6>
                    <h6>Library Card No:</h6>
                    <h6>Department:</h6>
                    <h6>Year:</h6>
                </div>
            </div>
            <div className="book-detail">
              <div className="detail-box">
                <div className="request">
                  <h5>Requested Books</h5>
                </div>
                <div className="issue">
                  <h5>Issued Books</h5>
                </div>
                <div className="taken">
                  <h5>Taken From Library</h5>
                </div>
              </div>
            </div>
        </div>
        <div className="box-right">
            <div className="book-avail">
              <div className="book">
                <h5>Book Name</h5>
                <button>Request</button>
              </div>
              <div className="book">
                <h5>Book Name</h5>
                <button>Request</button>
              </div>
              <div className="book">
                <h5>Book Name</h5>
                <button>Request</button>
              </div>
              <div className="book">
                <h5>Book Name</h5>
                <button>Request</button>
              </div>
              <div className="book">
                <h5>Book Name</h5>
                <button>Request</button>
              </div>
              <div className="book">
                <h5>Book Name</h5>
                <button>Request</button>
              </div>
              <div className="book">
                <h5>Book Name</h5>
                <button>Request</button>
              </div>
            </div>
            <div className="my-book">
              <div className="book">
                <h5>MY BOOKS</h5>
                
                </div>
                {/* <div className="card" style={{ width: '18rem' }}>
                  <img src="" class="card-img-top" alt="..."/>
                  <div class="card-body">
          
                    <a href="//" class="btn btn-success">Go somewhere</a>
                  </div>
              </div> */}
              <MyCarousel/>
            </div>
        </div>
      </div>
    </div>
  )
}
