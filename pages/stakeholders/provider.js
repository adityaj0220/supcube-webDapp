import React from 'react';
import { Card,Button,Divider } from 'semantic-ui-react'
import Layout from '../../components/Layout';
import Provider from '../../backend/contractInstances/provider'
import web3 from '../../backend/web3';
import user from '../../backend/contractInstances/user';
import { Link } from '../../routes';


class Shipment extends React.Component{
  static async getInitialProps(props){
        const stake = await user.methods.val(props.query.address).call();
        console.log(stake);
        const provider = Provider(stake);
        const camp = await provider.methods.retAdd().call();
        const add = props.query.address
        return {camp,add};
    }
renderShip()
{
    const items = this.props.camp.map(address => {
        return {
            header: address,
            description: (
            <Link route={`${this.props.add}/shipment/${address}`}>
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
            <Link route={`/provider/${this.props.add}/Requests`}>
            <a>
                <Button
                    floated='right'
                    content="Requests"
                    primary/>
            </a>
            </Link>
            <p></p>
            <h3 style={{color:'#0098ff'}}>Provider</h3>
            <p style={{color:'white'}}>Address: {this.props.add}</p>
            <Divider width={5}/>
            {this.renderShip()}
            </div>
            </Layout>
        );
    };
}

export default Shipment;
