import './App.css';
import {Component} from 'react';
import Form from './components/form'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Result from './components/results'
class App extends Component{
    constructor(props){
        super(props);
        this.state={
            count:'',
            method:'get',
            header:'',
            results:'',
            url:'',
        }
    }

    updateState=(data)=>{
        this.setState(data)
    }
   

    render(){
        return(
            <>
            <Header />
            <Form updateState={this.updateState} state={this.state}/>
        <h1>{this.state.count}</h1>
        <Result state={this.state} />
            <Footer />
        </>
        )
    }
}

// function App() {
//     return ( <>
//         <Header />
//         <Main />
//         <Footer />
//         </>

//     );
// }

export default App;