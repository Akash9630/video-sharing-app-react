import Grid from '@mui/material/Grid';
const App = () => (

    <Grid style={{ justifyContent: "center" }} container spacing={10} >
        <Grid item xs={11}>
            <Grid container spacing={10}>
                <Grid item xs={12}>
                    <SearchBar />
                </Grid>
                <Grid item xs={8}>
                    <VideoDetail />
                </Grid>
                <Grid item xs={4} >
                    <VideoList />
                </Grid>
            </Grid>
        </Grid>
    </Grid >
)

export default App