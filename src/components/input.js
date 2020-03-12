import React, { Component} from 'react'
import PropTypes from 'prop-types'

 class input extends Component {
  static propTypes = {
      addTitle:PropTypes.func,
  }
  constructor(props){
      super(props)
      this.state={
          title:''
      }
      
  }
  render(){
      return (
          <div>
              <input type="text" value={this.state.title} onChange={this.change.bind(this)}/>
              <button onClick={this.add.bind(this)}>添加</button>
          </div>
      )
  }
  change(e){
      this.setState({
          title:e.target.value
      })
  }
  add(){
    let title = this.state.title; 
    this.props.addTitle(title); 
    this.setState({
        title:'' 
    })

  }
}



export default input    