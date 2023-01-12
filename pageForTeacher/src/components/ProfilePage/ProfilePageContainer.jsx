import React from 'react';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/redusers/profileUserReduser';
import axios from 'axios';
import ProfilePage from './ProfilePage';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

class ProfilePageContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then(response => {
        this.props.setUserProfile(response.data);
      })
  }

  render() {
    return (
      <div className="profile">
        <ProfilePage {...this.props} profile={this.props.profile} />
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profileUser.profile
});

function withRouter(Component) {
  function ComponentWithRouterProps(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }
return ComponentWithRouterProps;
}

export default connect(mapStateToProps, { setUserProfile })(withRouter(ProfilePageContainer));