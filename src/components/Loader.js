import React from 'react';
import '../styles/Loader.css'

class Loader extends React.Component {
render() {
return (
  <div className="Loading__container">
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
)
}
}

export default Loader