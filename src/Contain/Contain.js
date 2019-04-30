import React, { Component } from 'react'
import { connect } from 'react-redux';
import './Contain.css';

 class Contain extends Component {
    // state = {
    //     age:21
    //   }
    //   onAgeUp=()=>
    //   {
    //     this.setState({
    //       age: this.state.age+1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    //     })
    //   }
    //   onAgeDown=()=>
    //   {
    //     this.setState({
    //       age: this.state.age-1
    //     })
    //   }


  render() {
    return ( 
      <div>
      <h1>AGE is {this.props.age}</h1>
      <button onClick={this.props.onAgeUp} >AGE Up</button>
      <button onClick={this.props.onAgeDown}>AGE Down</button>
      <h2>History</h2>
      <div>
          <ul className="historyamend">
              {
                   this.props.history.map(el =>
                       (
                           <li key={el.id}>
                           {el.age}
                           <button  onClick = {() => this.props.DeleteItem(el.id)} >X</button>
                           </li>
                       )

                       
                   )
              }
          </ul>
      </div>
     </div>
    )          
  }
}
const mapStateToProps = (state) =>{
    return{
        age:state.age,
        history: state.history
    }
}
const mapDispatchToProps = (dispach) =>
{
    return{
        onAgeUp:() => dispach({type: 'AGE_UP' , value: 2}),
        onAgeDown:() => dispach({type: 'AGE_DOWN' , value: 3}),
        DeleteItem:(id) => dispach({type: 'DELETE_ITEM' , key: id}),


    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Contain);