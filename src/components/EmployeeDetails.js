import React from 'react'
import {format} from 'date-fns'

function EmployeeDetails(props){
  return (
    <tbody>
      {props.filterResults.map(result => (
        <tr key={result.email}>
          <td><img alt="working" src={result.picture.thumbnail} /></td>
          <td>{result.name.first} {result.name.last}</td>
          <td>{result.phone}</td>
          <td><a href={"mailto:" + result.email}>{result.email}</a></td>
          <td>{ format(new Date(result.dob.date), 'MM-dd-yyyy')}</td>
        </tr>

      ))}
    </tbody>
  )
}
export default EmployeeDetails