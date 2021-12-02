import React from 'react'
import { Grid } from '@material-ui/core';

import { SearchBar, VideoList, VideoDetail } from './components';

import youtube from './api/youtube';

class App extends React.Component {
    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 8,
                key: 'AIzaSyDr0N2rM6zwl4gHSdM68TvfA3pnrczLi8A',
                q: searchTerm,
            }
        });
        console.log(response.data.items);
    }
    render() {
        return (
            <Grid justifyContent="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>

                        <SearchBar onFormSubmit={this.handleSubmit} />

                        <Grid item xs={12}>

                            <VideoDetail />

                        </Grid>
                        <Grid item xs={8}>

                        </Grid>
                        <Grid item xs={4}>

                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        )
    }
}

export default App;