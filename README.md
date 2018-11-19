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

## Special thanks to:

[![image](https://p14.zdusercontent.com/attachment/1015988/1bOrztw7biCDPhVF1EAtoRaK8?token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..IOKYiuGc7KxOxN8LXSoCiQ.mEEzII77YnmuGBE7kRs0nSBQZx8HIbiI_Hiw0CEwNFxBlWRb2FbyFl_9cLvhlCCUHVvMiXU3pYg5JZunRFt-XELX2crivutRd9z8Hbkqae-2TtHaWm59bRJpCmCwNuqZqsa5g5YdFoDw_5Js75BGMDB9lam56RVTRkY3xfu14XKxDOQYh6v6Rc9Bh09csHU938Oqagfc4MSPPDmdA-3240vzVDVtmv_KhP_l9J8Y-szLmc0942pgp3TF3qEIXGQorLSBuvlSkdQmGn0EfPROFoaE05bSxcSmI-un9KNgKQw.PG4wYn8cyXOC70V5g0dMKw)][1]

[1]: https://www.browserstack.com

## License

MIT © [bytewiz](https://github.com/bytewiz)
