import React, { Component } from 'react'

export default class CardItem extends Component {
  render() {
    console.log(this.props.Image);
    return (
      <div>
         <div classname="card" style={{width: "18rem"}}>
         <img src={this.props.Image} //Add Props
           classname="card-img-top" alt="No  Images" style={{width: "17.9rem"}}/>

          {/* <img src="https://cdn.24.co.za/files/Cms/General/d/10743/97d776dc91734e98906c0e1b7f3b1afa.jpg"
           classname="card-img-top" alt="..." style={{width: "17.9rem"}}/> */}
          <div classname="card-body">
            <p classname="card-text">Vintage Typewriter to post awesome stories about UI design and webdev.</p>
            <h5 className="card-title">$49.50</h5>
            <p classname="card-text">Eligible for Shipping to mars or somewhere else</p>
            <p classname="card-text" style={{color: "red"}}>★★★★☆</p>
            <p classname="card-text" style={{margin:"-38px 0 0 75px"}}> 4.05</p>
            <button type="button" class="btn btn-light" style={{margin:"-55px 0 0 202px" ,border: "1px solid",height: "36px"}}>♡ Watch</button>
          </div>
        </div>

      </div>
    )
  }
}
