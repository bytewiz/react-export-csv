import React, { Component } from 'react'

import CsvExportBtn from 'react-export-csv'

const data = [
  { firstName: 'Joe', lastName: 'Johnson' },
  { firstName: 'Bob', lastName: 'Johnson' },
]

export default class App extends Component {
  render() {
    return (
      <div style={{ padding: '20px' }}>
        <CsvExportBtn
          text="download csv"
          filename="sample"
          model={data}
        />
      </div>
    )
  }
}
