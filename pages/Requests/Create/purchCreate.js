import React from 'react';
import { Form,Button,Input,Message } from 'semantic-ui-react'
import Purchaser from '../../../backend/contractInstances/purchaser'
import web3 from '../../../backend/web3';
import user from '../../../backend/contractInstances/user';
import Layout from '../../../components/Layout';
import { Router } from '../../../routes';

class ShipmentNew extends React.Component {
    state =
    {
        description: '',
        amount: null,
        prodadd:'',
        errorMsg:'',
        loading: false
    };
    onSubmit = async (event) =>
    {
        event.preventDefault();
        this.setState({loading: true, errorMsg: 'Creating...'})

        try{
        const accounts = await web3.eth.getAccounts();
        const stake = await user.methods.val(accounts[0]).call();
        const purchaser = Purchaser(stake);
        console.log(stake);
        await purchaser.methods
        .createRequests(this.state.description,this.state.amount,this.state.prodadd)
        .send({
            from: accounts[0]
        });
       setTimeout(Router.pushRoute(`/purchaser/${accounts[0]}/Requests/SentRequests`),3000);
    }catch(err)
    {
        this.setState({errorMsg: err.message});
    }
    if(this.state.errorMsg==="Creating..."){
        this.setState({errorMsg: "success", loading: true});
    }
    else
    this.setState({loading: false});
    };

    render()
    {
        return(
          <Layout>
          <div>
            <h1 style={{color:'#0098ff'}}>Create Request:</h1>
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
                <Form.Field>
                    <label style={{color:'white'}}>Producer Address</label>
                    <Input
                    value ={this.state.prodadd}
                    onChange={event => this.setState ({ prodadd: event.target.value })} />
                </Form.Field>
                {this.state.errorMsg==="success" ? <Message positive header="Nice!" content="Request has been created!"></Message>:
                (this.state.errorMsg==='Creating...') ? <Message positive header="Request status" content="Creating...!"></Message>:
                <Message
                error
                header="Kindly enter valid values into the form."
               // content={this.state.errorMsg}
                />}
                <Button loading={this.state.loading}
                primary>Create!</Button>
            </Form>

            </div>
            </Layout>
        );
    };
}

export default ShipmentNew;
