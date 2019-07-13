import React from 'react';

class FilterList extends React.Component {
render() {
return (
<div className="container">
  <ul className="filter-list">
    <li><h3 className="font-type1" >Status:</h3></li>
    <li><a onClick={() => this.props.eventStatus('alive')} className="font-type2">Alive</a> </li>
    <li><a onClick={() => this.props.eventStatus('dead')} className="font-type2">Dead</a> </li>
    <li><a onClick={() => this.props.eventStatus('unknow')} className="font-type2">Unknow</a> </li>
  </ul>
  <ul className="filter-list">
    <li><h3 className="font-type1" >Gender:</h3></li>
    <li><a onClick={() => this.props.eventGender('female')} className="font-type2">Female</a> </li>
    <li><a onClick={() => this.props.eventGender('male')} className="font-type2">Male</a> </li>
    <li><a onClick={() => this.props.eventGender('genderless')} className="font-type2">Genderless</a> </li>
    <li><a onClick={() => this.props.eventGender('unknow')} className="font-type2">Unknow</a> </li>
  </ul>
</div>
)
}
}

export default FilterList;
