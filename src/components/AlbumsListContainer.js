import * as React from 'react'
import * as request from 'superagent'
import AlbumsList from './AlbumsList'
import { connect } from 'react-redux';
import { helloWorld } from '../actions/test';
import { addAlbum } from '../actions/addAlbum';
import { setAlbum } from '../actions/setAlbum';


class AlbumsListContainer extends React.Component {
  
  componentDidMount() {

    request('https://jsonplaceholder.typicode.com/albums')
      .then(response => {
        this.props.setAlbum(response.body)
      })
// I'm using imported helloWorld to dispatch my action
// it's wrapped in dispatch becuase of connect - dispatches immediately to reducer

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
export default connect(mapStateToProps, {helloWorld, addAlbum, setAlbum})(AlbumsListContainer);