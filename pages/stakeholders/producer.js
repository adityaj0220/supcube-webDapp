import React from 'react';
import { Card,Button,Divider, Icon } from 'semantic-ui-react'
import Layout from '../../components/Layout';
import Producer from '../../backend/contractInstances/producer';
import web3 from '../../backend/web3';
import user from '../../backend/contractInstances/user';
import { Link } from '../../routes';


class Shipment extends React.Component{
  static async getInitialProps(props){
        const stake = await user.methods.val(props.query.address).call();
        console.log(stake);
        const producer = Producer(stake);
        const add = await producer.methods.prod().call();
        const camp = await producer.methods.getShipments().call();
        console.log(camp);
        return {camp,add,stake};
    }
renderShip()
{
    const items = this.props.camp.map(address => {
        return {
            header: address,
            description: (
            <Link route={`/producer/shipments/${address}`}>
            <a>
                View Shipment
            </a>
            </Link>),
            fluid: true
            }
    });

    return <Card.Group items={items} />;
};

    render(){
        return(
          <Layout>
            <div>
            <Link route='/shipments/new'>
            <a>
            <Button animated
            floated='right'
            style ={{marginBottom: 10}}
            color="green"
                       >
                           <Button.Content visible>
                               Create Shipment

                           </Button.Content>
                           <Button.Content hidden>
                               <Icon name="add"/>
                           </Button.Content>
                       </Button>
            </a>
            </Link>
            <Link route={`/producer/${this.props.add}/Requests`}>
            <a>
                <Button
                    floated='right'
                    content="Requests"
                    primary/>
            </a>
            </Link>
            <h3 style={{color:'#0098ff'}}>Producer</h3>
            <p style={{color:'white'}}>Address : {this.props.add}</p>

            <Divider width={5}/>
            {this.renderShip()}

            </div>
            </Layout>
        );
    };
}

export default Shipment;
