import * as React from 'react'
import * as request from 'superagent'
import AlbumsList from './AlbumsList'
import { connect } from 'react-redux';
import { helloWorld } from '../actions/test';
import { addAlbum } from '../actions/addAlbum';
import { setAlbum } from '../actions/setAlbum';
import { getAlbums } from '../actions/albums';


class AlbumsListContainer extends React.Component {

  componentDidMount() {

    request('https://jsonplaceholder.typicode.com/albums')
      .then(response => {
        //this.props.setAlbum(response.body) without middleware thunks
        this.props.getAlbums()
      })
  }

  render() {
    if (!this.props.albums) return 'Loading...'
    return <AlbumsList albums={this.props.albums} />
  }

}

const mapStateToProps = state => {
  return {
    albums: state.albums
  }
}
// no export above needed
//you have to connet imported action as a second argument
//We can bind action creators (helloWorld) using the second argument of the connect function
export default connect(mapStateToProps, { helloWorld, addAlbum, setAlbum, getAlbums })(AlbumsListContainer);