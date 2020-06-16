import React from 'react';
import { Form,Button,Input,Message} from 'semantic-ui-react'
import Producer from '../../backend/contractInstances/producer'
import web3 from '../../backend/web3';
import user from '../../backend/contractInstances/user';
import Layout from '../../components/Layout';
import { Router } from '../../routes';

class ShipmentNew extends React.Component {
    



    state =
    
    {
        description: '',
        amount: null,
        errorMsg:'',
        loading: false,
        
       
      
    };

    onSubmit = async (event) =>
    {
        event.preventDefault();
        this.setState({loading: true, errorMsg: 'Creating...'})
        this.setState({posMsg: ''})

        try{
        const accounts = await web3.eth.getAccounts();
        const stake = await user.methods.val(accounts[0]).call();
        const producer = Producer(stake);
        console.log(stake);
        await producer.methods
        .createShipments(this.state.description,this.state.amount)
        .send({
            from: accounts[0]
        });
        
      setTimeout(Router.pushRoute(`/producer/${accounts[0]}`), 3000);
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

    render()
    {
        return(
          <Layout>
              <div className="entire">
          <div>
              <div className="heading">
              
            <h1 style={{color:'white'}}>Create a Shipment:</h1>
            </div>
            <Form  onSubmit={this.onSubmit} error={!!this.state.errorMsg}>
                <Form.Field>
                    <label style={{color:'white'}}>Description</label>
                    <Input
                    value ={this.state.description}
                    onChange={event => this.setState ({ description: event.target.value })} />
                </Form.Field>
                <Form.Field>
                    <label style={{color:'white'}}>Quantity</label>
                    <Input
                    value ={this.state.amount}
                    onChange={event => this.setState ({ amount: event.target.value })} />
                </Form.Field>
                {this.state.errorMsg==="success" ? <Message positive header="Nice!" content="Your shipment has been created! You will be directed to the homepage shortly..."></Message>:
                (this.state.errorMsg==='Creating...') ? <Message positive header="Shipment status" content="Creating...!"></Message>:
                <Message
                error
                header="Please enter value or check your value for descrepencies!"
                //content={this.state.errorMsg}
                />}
                <div>
                <Button loading={this.state.loading}
                primary>Create!</Button>
                
              </div>
              
            </Form>
            
            </div>
            
            </div>
            <style jsx>{`
            h1{
                font-family: "Arial";
               
                
            }
          

            
            `}</style>
            </Layout>
        );
    };
}

export default ShipmentNew;
