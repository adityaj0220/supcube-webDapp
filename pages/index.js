import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import Layout from '../components/Layout';
import user from '../backend/contractInstances/user';
import web3 from '../backend/web3';
import { Link } from '../routes';
import { Router } from '../routes';
//import Particles from 'react-particles-js';
//import ParticlesBg from 'particles-bg';
//import VueParticlesBg from 'particles-bg-vue';


class User extends React.Component
{
  state = {
    Useradd : '',
    Userpass: '',
    errorMsg: '',
    loading: false
  }

  onSubmit = async (event) =>
  {
      event.preventDefault();
      this.setState({loading: true, errorMsg: 'Creating...'})

      try{

      const accounts = await web3.eth.getAccounts();
      const hh = await user.methods.checkArray(this.state.Useradd).call();
      console.log(hh);
      const hk = await user.methods.index(this.state.Useradd).call();
      console.log(hk,this.state.Useradd,this.state.Userpass);
      const g = await user.methods.sdet(0).call();
      console.log(g);
      const pass = await user.methods.userLogin(this.state.Userpass,this.state.Useradd).call();
      console.log(pass);
      const pr = pass[1];
      console.log(pr);
      if(pass[0] == "True")
      {
      pr == "Producer" ?
      Router.pushRoute(`/Producer/${this.state.Useradd}`):
      pr == "Purchaser" ?
      Router.pushRoute(`/Purchaser/${this.state.Useradd}`):
      Router.pushRoute(`/Provider/${this.state.Useradd}`)
      }
      else{
      console.log("No")
      };
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
    
         <h5>{" "}</h5>
     <h2 style={{color:'white', textAlign:"center"}}>Welcome to Supcube!</h2>
     <h3 style={{color:'white', textAlign:"center"}}>A blockchain solution for supply chain management!</h3>
    

  <Grid textAlign='center' style={{ height: '70vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
         Log-in to your account
      </Header>
      <Form size='large' onSubmit = {this.onSubmit}>
        <Segment stacked>
          <Form.Input fluid
           icon='user'
           iconPosition='left'
           placeholder='Ethereum address'
           value ={this.state.Useradd}
           onChange={event => this.setState ({ Useradd: event.target.value })} />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            value ={this.state.Userpass}
            onChange={event => this.setState ({ Userpass: event.target.value })}
          />
          {this.state.errorMsg==="success" ? <Message positive header="Hi!" content="We are logging you in!"></Message>:
                (this.state.errorMsg==='Creating...') ? <Message positive header="Hi!" content="Logging in...!"></Message>:
                <Message
                error
                header="Incorrect address or password."
                //content={this.state.errorMsg}
                />}

          <Button color='teal' fluid size='large' loading={this.state.loading}>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us?
        <Link route={`/signup`}>
        <a>
            Sign Up
        </a>
        </Link>
      </Message>
    </Grid.Column>
  </Grid>
  
  </Layout>
);
}
}
export default User;
