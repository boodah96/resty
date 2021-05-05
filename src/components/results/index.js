import React from 'react';
import './results.scss'

import ReactJson from 'react-json-view'

function Result ({state}){
 
    return(
    <div data-testid='test' className='result' >
      <ReactJson src={state.header} theme='ashes' />
      <ReactJson src={state.results} theme='ashes' />
    </div>
    )

}

export default Result;