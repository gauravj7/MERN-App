import React, {Component} from 'react';
import axios from 'axios';

import ListItem from './ListItem';

class List extends Component {

  state = {
    items: []
  }

  componentDidMount(){
    this.getTodos();
  }

  getTodos = () => {
    axios.get('/api/items')
      .then(res => {
        if(res.data){
          this.setState({
            items: res.data
          })
        }
      })
      .catch(err => console.log(err))
  }



  render() {
    let list = this.state.items;

    return(
      <div>
        <h1>My List</h1>
        <ListItem list={list} />
      </div>
    )
  }
}

export default List;
