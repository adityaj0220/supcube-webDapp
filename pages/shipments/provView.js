import React from 'react';
import Layout from '../../components/Layout';
import { Card,Grid,Button,Form,Input,Message } from 'semantic-ui-react';
import web3 from '../../backend/web3';
import Provider from '../../backend/contractInstances/provider'
import user from '../../backend/contractInstances/user';
import { Link } from '../../routes';
import { Router } from '../../routes';
import File from '../../components/uploadFile'

class Show extends React.Component{
  state = {
    purch: '',
    shipAdd: '',
    downFile: '',
    errormsg : ''
  }

  static async getInitialProps(props) {
    console.log(props.query.address);
      const stake = await user.methods.val(props.query.add).call();
      const provider = Provider(stake);
      const summary = await provider.methods.getVal(props.query.address).call();
      console.log(summary);

      return {
          address: props.query.address,
          description: summary[0],
          amount: summary[1],
          hash: summary[2]
      };
  }
  renderCards() {
        const {
            description,amount} = this.props;

        const items = [
            {
                header:'Description',
                description: description,
                style: { overflowWrap: 'break-word',
                          fluid :'red' }
            },
            {
                header: 'Quantity',
                description: amount
              }
        ];
        return <Card.Group items={items} />;
    }

  render() {
      return(
        <Layout>
        <h3 style={{color:'white'}}>Shipment Dashboard</h3>
        <Grid>
            <Grid.Row>
            <Grid.Column width={10}>
            {this.renderCards()}
            </Grid.Column>
            <Grid.Column width={6}>
          <File address={this.props.address}/>
          </Grid.Column>
            </Grid.Row>
        </Grid>

        </Layout>
      );
  }
}

export default Show;
