import React from 'react';
import HeaderLoggedIn from './header_logged_in';
import HeaderLoggedOut from './header_logged_out';
import HeaderNavigation from './header_navigation';
import { Link } from 'react-router';
import SearchContainer from '../search/search_container';

class Header extends React.Component {
  constructor(props){
    super(props);

    }


  render(){
    if(this.props.currentUser){
      return(
        <section>
        <section className="nav-header">
            <SearchContainer />
          <Link to="/"><h1 className="logo">ANNOTATOR</h1></Link>
          <HeaderLoggedIn
            user={this.props.currentUser}
            logout={this.props.logout}
            errors={this.props.errors}
          />
        </section>
        <HeaderNavigation user={this.props.currentUser}/>
        </section>
      );
    } else {
      return (
        <section>
          <section className="nav-header">

              <SearchContainer />

            <Link to="/"><h1 className="logo">ANNOTATOR</h1></Link>
            <HeaderLoggedOut
              login={this.props.login}
              signup={this.props.signup}
              errors={this.props.errors}
              clearErrors={this.props.clearErrors}
            />
          </section>
          <HeaderNavigation user={this.props.currentUser}/>
        </section>
      );
    }
  }
}

export default Header;
