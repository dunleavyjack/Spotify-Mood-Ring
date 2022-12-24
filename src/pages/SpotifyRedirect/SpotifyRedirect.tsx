import React, { useEffect } from 'react';
import { getSpotifyAccessToken } from '../../api/spotifyAPIUtil';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoadingAnimation from '../../components/LoadingAnimation/LoadingAnimation';
import _ from 'lodash';
import { sessionActions } from '../../features/session/sessionSlice';

const RedirectPage: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        const currentLocation: string = window.location.hash;
        try {
            if (_.isEmpty(window.location.hash)) {
                navigate('/mood');
            }
            const { access_token } = getSpotifyAccessToken(currentLocation);
            dispatch(sessionActions.setToken(access_token));
            navigate('/analyzing');
        } catch (error) {
            console.error(error);
            navigate('/');
        }
    });

    return <LoadingAnimation />;
};

export default RedirectPage;
