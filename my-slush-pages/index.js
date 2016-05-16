import React from 'react'
import { render } from 'react-dom'
import App from './components/app'


class AwesomeGenerator extends React.Component{
  constructor(props){
    super(props)
    this.state = {count:this.props.value}
    }


  render(){
    setTimeout(() =>{
      this.setState({name: '*** scrumptious ***'})
    }, 5000)
    return(
      <div>
        <h1><i>{this.props.name}</i> is making carrot cake, rate it here</h1>
        <div onClick={()=>this.setState({count: this.state.count +1})}><h3>Carrot Cakes Level of awesomeness: {this.state.count} </h3>COMMENTS:{this.state.name} </div>
      </div>
       )
  }
}


render(
  <div>
  <AwesomeGenerator name="Heidi The Baker Girl" value={5}/>
  <AwesomeGenerator name="Jo The Slice Queen" value={2}/>
  </div>, document.querySelector('main')
  )


