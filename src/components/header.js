import React from 'react';
import PropTypes from 'prop-types';


class Header extends React.Component {

    

    render(){
      return (
          this.props.days.map(day =>
            <th className='thead-light' scope="col">{day}</th>
          )
      );
    }
}

Header.propTypes = {
    days: PropTypes.array.isRequired,
    obj: PropTypes.object
}

export default Header