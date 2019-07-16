import React from 'react';
import {Link} from 'react-router-dom'
import '../styles/Aside.css'

class FilterList extends React.Component {
render() {
return (
<div>
  <h4 className="font-type1 FilterList__title">Filtrar por:</h4>

  <ul className="filter-list">
    <li><h3 className="font-type1" >Status:</h3></li>
    <li><Link to="/app" onClick={() => this.props.eventStatus('alive')} className="font-type2 FilterList__item">Alive</Link> </li>
    <li><Link to="/app" onClick={() => this.props.eventStatus('dead')} className="font-type2 FilterList__item">Dead</Link> </li>
    <li><Link to="/app" onClick={() => this.props.eventStatus('unknow')} className="font-type2 FilterList__item">Unknow</Link> </li>
  </ul>
  <ul className="filter-list">
    <li><h3 className="font-type1" >Gender:</h3></li>
    <li><Link to="/app" onClick={() => this.props.eventGender('female')} className="font-type2 FilterList__item">Female</Link> </li>
    <li><Link to="/app" onClick={() => this.props.eventGender('male')} className="font-type2 FilterList__item">Male</Link> </li>
    <li><Link to="/app" onClick={() => this.props.eventGender('genderless')} className="font-type2 FilterList__item">Genderless</Link> </li>
    <li><Link to="/app" onClick={() => this.props.eventGender('unknow')} className="font-type2 FilterList__item">Unknow</Link> </li>
  </ul>
</div>
)
}
}

export default FilterList;
