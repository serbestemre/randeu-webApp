import React, {useState,useEffect, useCallback} from "react";
import {useDispatch, useSelector  } from 'react-redux';
import Typography from '@material-ui/core/Typography';

import axios from '../../axios';

const userProfile = (props) =>{

    const dispatch = useDispatch();
    const userToken = useSelector(state => {
        return state.auth.token
      })
      const [profile, setProfile] = useState();

      useEffect(() => {
        getProfile()
      }, [userToken, getProfile])

      const getProfile  = () => {
        axios({
            method: "GET",
            url: "/user/profile",
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer " + userToken
            }
        })
            .then((response) => {
                console.log(response.data);
            setProfile(response.data.data.fullName);
            })
            .catch((err) => {
                console.log(err.response)
            });
        };
  


    return (
    <div>
            <Typography gutterBottom component="h1" variant="h1">
        PROFIL
         </Typography>
        <Typography gutterBottom component="h1" variant="h5">
        {profile}
         </Typography>
    </div>
    )

};

export default userProfile;