import * as React from 'react'
import * as request from 'superagent'
import AlbumsList from './AlbumsList'
import { connect } from 'react-redux';
import { helloWorld } from '../actions/test'
import { addAlbum } from '../actions/addAlbum'

class AlbumsListContainer extends React.Component {
  state = {}

  componentDidMount() {
    request('https://jsonplaceholder.typicode.com/albums')
      .then(response => this.setState({ albums: response.body }))
// I'm using imported helloWorld to dispatch my action
      this.props.helloWorld('Alice', 'McDog');

      this.props.addAlbum('My Photos', 34);
  }

  render() {
    if (!this.state.albums) return 'Loading...'
    return <AlbumsList albums={this.state.albums} />
  }
}
// no export above needed
//you have to connet imported action as a second argument
//We can bind action creators (helloWorld) using the second argument of the connect function
export default connect(null, {helloWorld, addAlbum})(AlbumsListContainer);