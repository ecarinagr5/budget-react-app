import React from 'react';
import DisplayBalance from './DisplayBalance';
import { Segment, Grid } from 'semantic-ui-react';

function DisplayBalances() {
    return(
        <Segment textAlign="center">
            <Grid columns={2} divided>
                <Grid.Row>
                <Grid.Column>
                    <DisplayBalance  title='Income' value='1253.54' color="green" size='tiny' />
                </Grid.Column>
                <Grid.Column>
                    <DisplayBalance  title='Expenses' value='623.50' color="red" size='tiny' />
                </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default DisplayBalances;