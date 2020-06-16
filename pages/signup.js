import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import Layout from '../components/Layout';
import user from '../backend/contractInstances/user';
import web3 from '../backend/web3';
import { Router } from '../routes';
//import ParticlesBg from 'particles-bg';
class User extends React.Component
{
  state = {
    Useradd : '',
    Userpass: '',
    Userprof: '',
    errorMsg: '',
    loading:false
  }

  onSubmit = async (event) =>
  {
      event.preventDefault();
      this.setState({loading: true, errorMsg: 'Creating...'})

      try{
      const accounts = await web3.eth.getAccounts();
      await user.methods
      .userSignup(this.state.Userprof,this.state.Userpass)
      .send({
          from: accounts[0]
      });
      setTimeout(Router.pushRoute('/'),3000);
  }catch(err)
  {
      this.setState({errorMsg: err.message});
  }
  if(this.state.errorMsg==="Creating..."){
    this.setState({errorMsg: "success",loading: true});
 
}
else
  this.setState({loading: false});
  };

  render(){
    return (
  <Layout>
    
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
         Sign-up with new account
      </Header>
      <Form size='large' onSubmit = {this.onSubmit}>
        <Segment stacked>
          <Form.Input fluid
           icon='user'
           iconPosition='left'
           placeholder='Ethereum address'
           value ={this.state.Useradd}
           onChange={event => this.setState ({ Useradd: event.target.value })} />
           <Form.Input fluid
            icon='user'
            iconPosition='left'
            placeholder='Profile'
            value ={this.state.Userprof}
            onChange={event => this.setState ({ Userprof: event.target.value })} />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Set Password'
            type='password'
            value ={this.state.Userpass}
            onChange={event => this.setState ({ Userpass: event.target.value })}
          />
          {this.state.errorMsg==="success" ? <Message positive header="Account Status" content="Your account has been created!"></Message>:
                (this.state.errorMsg==='Creating...') ? <Message positive header="Hold on!" content="Please wait while we set up your account"></Message>:
                <Message
                error
                header="Please enter valid address or check the profile name again!"
                //content={this.state.errorMsg}
                />}
          
          <div>
          <Button color='teal' fluid size='large'>
            Signup
          </Button>
          </div>
        </Segment>
      </Form>
      <Message>
         <a href='https://metamask.io/'>Metamask Signup?</a>
      </Message>
    </Grid.Column>
  </Grid>
  </Layout>
);
}
}
export default User;
