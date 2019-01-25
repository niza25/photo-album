import * as React from 'react'
import { Link } from 'react-router-dom'

export default function AlbumsList(props) {
  return (
    <div>
      <h1>All Albums</h1>
      There are {props.albums.length} albums available.
      <ul>
        {props.albums.map(album =>
          <li key={album.id}>
          <Link to = {`/albums/${album.id}`}>{album.title}</Link>
          </li>
        )}
      </ul>
    </div>)
}