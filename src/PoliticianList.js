import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography, Grid, Divider } from '@material-ui/core';
import PoliticianCard from './PoliticianCard';


function PoliticianList(props) {

    const { classes, feds, gridNum, handlePol } = props;

    return (
        <Paper className={classes.paper} style={{ background: 'transparent', boxShadow: 'none' }}>
            <Typography variant='h2' align='center' gutterBottom>
                Politicians
            </Typography>
            <Divider />
            <Grid container spacing={10}>
                <Grid container spacing={10} justify='center'>
                    {feds ? feds.map(fed => (
                        <Grid item xs={gridNum} key={fed.name}>
                            <PoliticianCard fed={fed} handlePol={handlePol} />
                        </Grid>))  
                    : 
                        null
                    }
                </Grid>
            </Grid>
        </Paper>
    );
}

const styles = theme => ({

    paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing(3)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
    },
});

export default withStyles(styles)(PoliticianList);