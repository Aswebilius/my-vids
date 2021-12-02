import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 8,
        key: 'AIzaSyDr0N2rM6zwl4gHSdM68TvfA3pnrczLi8A'
    }
})
