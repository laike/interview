import React, { Component} from 'react'
import PropTypes from 'prop-types'

 class List extends Component {
  static propTypes = {
      list:PropTypes.array
  }
  constructor(props){
      super(props)
      
  }
  render(){
      return (
         <div>
              <ul style={styles.ul}>
          {this.props.list ? this.props.list.map(li=>{
              return(
                  <li className="item">{li}</li>
              )
          }):null}
          </ul>
         </div>
      )
  }
}

const styles = {
    ul:{
        listStyleType:'decimal'
    }
}

export default List    