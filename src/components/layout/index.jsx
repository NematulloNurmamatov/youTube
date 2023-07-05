import React, { Component, Fragment } from 'react'
import Header from '../Header/Header'
import Home from '../Home/Home'
// import Home from '../Home/Home'



export class Layout extends Component {
  render() {
    return (
      <Fragment>
          <Header />
          <main>
            <Home />
          </main>
      </Fragment>
    )
  }
}

export default Layout