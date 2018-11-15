# react-export-csv

> react component parsing json to downloadable csv file

[![NPM](https://img.shields.io/npm/v/react-export-csv.svg)](https://www.npmjs.com/package/react-export-csv) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## TODO:
- [X] create component
- [X] add support for CSV files
- [X] add documentation for usage
- [ ] add support for XLSX files
- [ ] test browser compatability
- [ ] release npm package

## Install

```bash
npm install --save react-export-csv
```

## Usage

```jsx
import React, { Component } from 'react'

import CsvExportBtn from 'react-export-csv'

const data = [
  { firstName: 'Joe', lastName: 'Johnson' },
  { firstName: 'Bob', lastName: 'Johnson' },
]

class Example extends Component {
  render () {
    return (
      <CsvExportBtn 
        text="download csv"
        filename="sample"
        model={data}
      />
    )
  }
}
```

## Output file
firstName | lastName
------------ | -------------
Joe | Johnson
Bob | Johnson

## Default looks
![button](https://i.imgur.com/8v3WoW4.png)
![button](https://i.imgur.com/jNawKlv.png)

## License

MIT © [bytewiz](https://github.com/bytewiz)
