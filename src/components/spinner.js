import React, { Component } from 'react'
import loading from './pacLoading.gif';

export default class spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img className='my-3' src={loading} alt="Loading"/>
      </div>
    )
  }
}
