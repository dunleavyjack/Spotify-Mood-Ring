import React from 'react';
import _ from 'lodash';
import { getParamValues } from '../utils/functions';
export default class RedirectPage extends React.Component {
    componentDidMount() {
        const { history, location } = this.props;
        try {
            if (_.isEmpty(location.hash)) {
                return history.push('/yourmood');
            }
            const access_token = getParamValues(location.hash);
            localStorage.setItem('params', JSON.stringify(access_token));
            history.push('/yourmood');
        } catch (error) {
            history.push('/');
        }
    }
    render() {
        return null;
    }
}