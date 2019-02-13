import React from 'react';
import './ListItem.css';
const ListItem = ({ list }) => {

  return (
    <ol>
      {
        list &&
          list.length > 0 ?
            (
              list.map(item => {
                return (
                  <li key={item.name}>{item.name}</li>
                )
              })
            )
            :
            (
              <li>Loading..</li>
            )
      }
    </ol>
  )
}

export default ListItem
