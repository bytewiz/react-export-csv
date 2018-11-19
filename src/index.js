import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { parse as json2csv } from 'json2csv'
import styles from './styles.css'

function download (url, name) {
  let a = document.createElement('a')
  a.href = url
  a.download = name
  a.click()

  window.URL.revokeObjectURL(url)
}

export default class CsvExportBtn extends Component {
  static propTypes = {
    text: PropTypes.string,
    filename: PropTypes.string,
    model: PropTypes.array
  }

  downloadCsv = () => {
    const csv = json2csv(this.props.model)
    const url = window.URL.createObjectURL(new Blob([csv], { type: 'application/octet-stream' }))
    download(url, `${this.props.filename}.csv`)
  }

  render() {
    const {
      text
    } = this.props

    return (
      <button
        className={styles.button}
        onClick={this.downloadCsv}
      >
        {text}
      </button>
    )
  }
}

CsvExportBtn.defaultProps = {
  text: 'button',
  filename: 'file',
  model: [
    { header: 'value', otherheader: 'othervalue' },
    { header: 'value2', otherheader: 'othervalue2' }
  ]
}
// const csv = json2csv(exportModel);
//             const url = window.URL.createObjectURL(new Blob([csv], { type: 'application/octet-stream' }));
//             download(url, 'attendees.csv');
