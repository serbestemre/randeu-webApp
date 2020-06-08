import React  from "react";
import {useDispatch, useSelector  } from 'react-redux';
import Typography from '@material-ui/core/Typography';

const userProfile = (props) =>{

    const userProfile = useSelector(state => {
        return state.auth.userProfile
      })


    return (
    <div>
            <Typography gutterBottom component="h1" variant="h1">
        PROFIL
         </Typography>
        <Typography gutterBottom component="h1" variant="h5">
        {userProfile.fullName}
         </Typography>
    </div>
    )

};

export default userProfile;