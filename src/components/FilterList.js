import React from 'react';

class FilterList extends React.Component {
render() {
return (
<div className="container">
  <ul className="filter-list">
    <li><h3 className="font-type1" >Status:</h3></li>
    <li><a className="font-type2" href="/">Alive</a> </li>
    <li><a className="font-type2" href="/">Dead</a> </li>
    <li><a className="font-type2" href="/">Unknow</a> </li>
  </ul>
  <ul className="filter-list">
    <li><h3 className="font-type1" >Gender:</h3></li>
    <li><a className="font-type2" href="/">Female</a> </li>
    <li><a className="font-type2" href="/">Male</a> </li>
    <li><a className="font-type2" href="/">Genderless</a> </li>
    <li><a className="font-type2" href="/">Unknow</a> </li>
  </ul>
</div>
)
}
}

export default FilterList;
