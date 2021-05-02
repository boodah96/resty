import './main.scss'
import React from 'react';

class Main extends React.Component{
  constructor(props){
    super(props);
    this.state={
      url:'',
      method:''
    }
  }
  handleSubmit=(e)=>{
    e.preventDefault();
     const url=e.target.url.value;
     this.setState({url});

  }
  render(){
    return(
      <main>
        <div className="inputURL">
      
          <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="url">URL:</label>
          <input name="url" placeholder='URL' className="url" type="text" />
         <input type="submit" value="GO!"/>
          </form>
    
        </div>
        <div className="method">
          <button onClick={()=>{this.setState({method:'GET'})}}>GET</button>
          <button  onClick={()=>{this.setState({method:'POST'})}}>POST</button>
          <button  onClick={()=>{this.setState({method:'PUT'})}}>PUT</button>
          <button  onClick={()=>{this.setState({method:'DELET'})}}>DELET</button>

        </div>
        <section>
        <p>{this.state.method} {this.state.url}</p>
        </section>
        

      </main>
    )
  }
}



export default Main;
