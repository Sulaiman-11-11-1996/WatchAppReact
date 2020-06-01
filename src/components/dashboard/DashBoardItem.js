import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class DashBoardItem extends Component {
    deleteBtnClick = () =>{
        alert(this.props.watch.id)
    }
    render() {
        const watch = this.props.watch
        return (
            <div>
            <div className="container">
                        <div className="card card-body bg-light mb-3">
                            <div className="row" >
                                <div className="col-lg-4 col-md-3 col-6">
                                    <h3>RADO GOLDEN HORSE AUTOMATIC {watch.Name}</h3>
                                    <p>Price: 253635{watch.Price}</p>
                                    <p>An original look from 1962 is brought to life in a new and improved form for the twenty-first century.{watch.Description}</p>
                                </div>
                                {
                        //    <div className="col-lg-4 col-md-3 col-6 text-center">
                        //            <h3>Balance</h3>
                        //            <h1>Rs. 27000 {watch.currentBalance}</h1>
                        //        </div>
                                }

                                <div className="col-md-4 col-12 d-lg-block">
                                    <ul className="list-group">
                                        <a href="transactions.html">
                                            <li className="list-group-item board text-success">
                                                <i className="fa fa-flag-checkered pr-1"> View</i>
                                            </li>
                                        </a>
                                        <a href="watchForm.html">
                                            <li className="list-group-item update text-info">
                                                <i className="fa fa-edit pr-1"> Update</i>
                                            </li>
                                        </a>
                                        <Link to="/dashboard" onClick={()=>this.deleteBtnClick()}>
                                            <li className="list-group-item delete text-danger">
                                                <i className="fa fa-minus-circle pr-1"> Delete</i>
                                            </li>
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                
            </div>
        )
    }
}

export default DashBoardItem
