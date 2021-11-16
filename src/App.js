import { Container, Grid, Icon, Segment } from 'semantic-ui-react';

//Components
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalances from './components/DisplayBalances';
import DisplayBalance from './components/DisplayBalance';
import './App.css';



function App() {
  return (
    <Container>
      
      <MainHeader title='Budget' type='h1'/>
        <DisplayBalance  title='Your Balance' value='2553.50' color="black" size='small' />
        <DisplayBalances  />


      <MainHeader title='History' type='h3'/>
        <Segment color="red">
          <Grid columns={3} textAlign='right'>
            <Grid.Row>
                  <Grid.Column width={10} textAlign='left'>Something</Grid.Column>
                  <Grid.Column width={3} textAlign='right'>$10,00</Grid.Column>
                  <Grid.Column width={3}>
                    <Icon name="edit" bordered />
                    <Icon name="trash" bordered />
                  </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>


        <MainHeader title='Add new transaction' type='h3'/>
        <NewEntryForm />

    </Container>
  );
}

export default App;
