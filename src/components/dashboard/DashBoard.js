import React, { Component } from 'react'
import DashBoardItem from './DashBoardItem'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getWatches} from '../../actions/projectActions'
class DashBoard extends Component {

    componentDidMount(){
        this.props.getWatches()

    }
    render() {
        const watch = this.props.watch
        const watchComponent = watch.map(watch=>(<DashBoardItem key ={watch.id} watch={watch} />))
        return (
            <div className="projects">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="display-4 text-center">My Watches</h1>
                    <br />
                    <div className="btn-group">
                        <button type="button" className="btn btn-info btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          ADD
                        </button>
                        <div className="dropdown-menu">
                          <Link className="dropdown-item" to="/createwatch"> Watch </Link>
                          <button disabled className="dropdown-item">Transaction</button>
                        </div>
                      </div>
                    <br />
                    {
                //    <div className="card text-center">
                 //       <div className="card-header bg-success text-white">
                 //           <h4>Current Balance (Total)</h4>
                 //           <h1>Rs. 27000</h1>
                  //      </div>
                    
                  //  </div>
                    }
                    <hr />
                    {
                        // <!-- Project Item Component -->

                    }

                    {watchComponent}
                    
                    {
                        // <!-- End of Project Item Component -->
                    }
                   

                </div>
            </div>
        </div>
    </div>
        )
    }
}

const mapStateToProps = (state) =>({
    Watch:state.Watch.Watch
})

export default connect(mapStateToProps,{getWatches})(DashBoard)
