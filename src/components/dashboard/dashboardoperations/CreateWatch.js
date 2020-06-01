import React, { Component } from 'react'
import {createWatch} from '../../../actions/projectActions'
import {connect} from 'react-redux'
import classnames from 'classnames'

class CreateWatch extends Component {
    constructor(props) {
        super(props)
        this.state = {
             Name:'',
             Price:'',
             Description:'',
             Priority:'',
             errors:''
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({errors:nextProps.errors})

        }
    }

    changeHandler = (event,fieldName) =>{
        this.setState({
            [fieldName]: event.target.value
        })
    }
    
    submitHandler = (event) =>{
        const newWatch = {
             Name:'this.sate.Name',
             Price:'this.state.Price',
             Description:'this.state.Description',
             Priority:'this.state.Priority'

        }
        this.props.createWatch(newWatch,this.props.history)
       event.preventDefault()
    }




    render() {
        return (
            <div className="project">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h5 className="display-4 text-center">Create Watch</h5>
                    <hr />
                    <form onSubmit={(event)=>this.submitHandler(event)}>
                        <div className="form-group">
                            <input type="text" onChange={(event)=>this.changeHandler(event,"Name")} className={classnames("form-control form-control-lg",{"is-invalid":this.state.errors.Name})} placeholder="Name" />
                            <p className="text-danger">{this.state.errors.Name}</p>
                        </div>
                        <div className="form-group">
                            <input type="text" onChange={(event)=>this.changeHandler(event,"Price")} className={classnames("form-control form-control-lg",{"is-invalid":this.state.errors.Price})} placeholder="Price" />
                            <p className="text-danger">{this.state.errors.Price}</p>
                        </div>
                        <div className="form-group">
                            <textarea onChange={(event)=>this.changeHandler(event,"Description")} className={classnames("form-control form-control-lg",{"is-invalid":this.state.errors.Description})} placeholder="Description"></textarea>
                            <p className="text-danger">{this.state.errors.Description}</p>
                        </div>
                        <div className="form-group">
                            <select onChange={(event)=>this.changeHandler(event,"Priority")} className="form-control form-control-lg">
                                <option value={3}>Display Priority</option>
                                <option value={1}>High</option>
                                <option value={2}>Medium</option>
                                <option value={3}>Low</option>
                            </select>
                        </div>
                        <input type="submit" className="btn btn-primary btn-block mt-4" value="Create/Update" />
                    </form>
                </div>
            </div>
        </div>
    </div>
        )
    }
}
const mapStateToProps = (state) =>({
    errors:state.errors
})

export default connect(mapStateToProps,{createWatch})(CreateWatch)
