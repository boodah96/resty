import React from 'react';

import superagent from 'superagent';

function Form(props) {
    const handleSubmit=(e)=>{
        e.preventDefault();
       
            
            superagent[props.state.method](e.target.url.value).then(data => {
                props.updateState({  count:data.body.count,
                
                header:data.header,
                results:data.body.results,
                url:e.target.url.value,})
               })
              
            
      
        
    }
    return (
        <main>
        <div className="inputURL">
      
          <form action="" onSubmit={handleSubmit}>
          <label htmlFor="url">URL:</label>
          <input name="url" placeholder='URL' className="url" type="url" required />
         <input type="submit" value="GO!"/>
          </form>
    
        </div>
        <div className="method">
          <button onClick={()=>props.updateState({method:'get'})}>GET</button>
          <button  onClick={()=>props.updateState({method:'post'})}>POST</button>
          <button  onClick={()=>props.updateState({method:'put'})}>PUT</button>
          <button  onClick={()=>props.updateState({method:'delete'})}>DELET</button>

        </div>

      </main>
    )
}

export default Form;
