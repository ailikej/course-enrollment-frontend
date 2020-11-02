import axios from 'axios';

export default axios.create({
    baseURL: 'http://aef096781ca494290919b04559dd0748-2050090330.us-west-2.elb.amazonaws.com:8080'
});