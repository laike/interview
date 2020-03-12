import React, { Component} from 'react'
import Input from './components/input'
import List from './components/list'

 class App extends Component {
  constructor(props){
    super(props);
    this.state={
        list:[]
    }
  }
//   addTitle(title){
//       let curList = this.state.list;
//       console.log(this.state.list);// [a,b]
//       this.setState({
//           list:curList.concat(title) // c
//       })
//       console.log(this.state.list); // [a,b]

//   }
addTitle(title){
    let curList = this.state.list;
    
    this.setState({
        list:curList.concat(title) 
    })
    this.setState({
        list:curList.concat(title+1) 
    })
    this.setState({
        list:curList.concat(title+2) 
    })
    

}
  render(){
      return (
          <div style={styles.container}>
              <Input addTitle={this.addTitle.bind(this)}/>
              <List list={this.state.list}/>
          </div>
      )
  }
}

const styles = {
    container:{
    
    }
}
export default App    