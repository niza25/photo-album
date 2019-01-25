import * as React from 'react'
import * as request from 'superagent'
import AlbumsList from './AlbumsList'
import { connect } from 'react-redux';

class AlbumsListContainer extends React.Component {
  state = {}

  componentDidMount() {
    request('https://jsonplaceholder.typicode.com/albums')
      .then(response => this.setState({ albums: response.body }))

      this.props.dispatch({
        type: 'HELLO_WORLD',
        payload: {
          firstName: 'Alice',
          lastName: 'McDog'
        }
      })
  }

  render() {
    if (!this.state.albums) return 'Loading...'
    return <AlbumsList albums={this.state.albums} />
  }
}
// no export above needed
export default connect()(AlbumsListContainer);