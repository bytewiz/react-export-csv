import React, { Component } from 'react'

import CsvExportBtn from 'react-export-csv'

export default class App extends Component {
  render () {
    return (
      <div>
        <CsvExportBtn text='download csv' />
      </div>
    )
  }
}
