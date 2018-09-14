<<<<<<< HEAD
import React from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
    return (
       <nav>
           <IndexLink to='/' activeClassName='active'>Home</IndexLink>
           {' | '}
           <Link to ='/courses' activeClassName='active'>Courses</Link>
           {' | '}
           <Link to ='/about' activeClassName='active'>About</Link>
       </nav>
    );
};

=======
import React from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
    return (
       <nav>
           <IndexLink to='/' activeClassName='active'>Home</IndexLink>
           {' | '}
           <Link to ='/courses' activeClassName='active'>Courses</Link>
           {' | '}
           <Link to ='/about' activeClassName='active'>About</Link>
       </nav>
    );
};

>>>>>>> a37834bb84baaa3fe82cae863ed6e292d5e75f78
export default Header;