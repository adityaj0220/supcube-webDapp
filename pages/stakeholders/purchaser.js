import React from 'react';
import { Card,Button,Divider } from 'semantic-ui-react'
import Layout from '../../components/Layout';
import Purchaser from '../../backend/contractInstances/purchaser'
import user from '../../backend/contractInstances/user';
import web3 from '../../backend/web3';

import { Link } from '../../routes';


class Shipment extends React.Component{
  static async getInitialProps(props){
        const stake = await user.methods.val(props.query.address).call();
        console.log(stake);
        const purchaser = Purchaser(stake);
        const camp = await purchaser.methods.retAdd().call();
        const add = props.query.address;
        console.log(add);
        return {camp,add,stake};
    }
renderShip()
{
    const items = this.props.camp.map(address => {
        return {
            header: address,
            description: (
            <Link route={`${this.props.add}/shipment/${address}` }>
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
            <Link route={`/purchaser/${this.props.add}/Requests`}>
            <a>
                <Button
                    floated='right'
                    content="Requests"
                    primary/>
            </a>
            </Link>
            <h3 style={{color:'#0098ff'}}>Purchaser</h3>
            <p style={{color:'white'}}>Address: {this.props.add}</p>
            <Divider width={5}/>
            {this.renderShip()}
            </div>
            </Layout>
        );
    };
}

export default Shipment;
