import React, {Linking} from 'react';
import { Form,Input,Message,Button, Icon } from 'semantic-ui-react';
import Shipment from '../backend/contractInstances/shipment'
import web3 from '../backend/web3'
import { Router } from '../routes';

const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({host: 'ipfs.infura.io', port : 5001,protocol : 'https'})


class File extends React.Component {
   state = {
       laoding : false,
        buffer: null,
        fileHash : '',
        errorMsg:'',
        downFile: ''
   };

    onSubmit = async (event) => {
        event.preventDefault();

        this.setState({loading: true})
        console.log('Submitting Form ...');
        await ipfs.add(this.state.buffer, async (error, result) =>  {
            this.setState({fileHash: result[0].hash})

            const shipment = Shipment(this.props.address);
            try{
                const accounts = await web3.eth.getAccounts();
                await shipment.methods.setHash(this.state.fileHash).send({
                    from:accounts[0]
                });
                console.log("Uploaded");
            }catch(err){
                    this.setState({errorMsg: err.message});
            }
        })

        this.setState({loading: false});

    };
    capture = (event) => {
        event.preventDefault();
            console.log('File Captured');
            const files = event.target.files[0];
            const reader = new window.FileReader();
            reader.readAsArrayBuffer(files)
            reader.onloadend = () => {
                this.setState({buffer: Buffer(reader.result)});
            }

    };
    viewFile = async (event) => {
        event.preventDefault();

        const shipment = Shipment(this.props.address);
        const gethash = await shipment.methods.getUser().call();
        this.setState({downFile: gethash[2]});
        window.open(`https://ipfs.infura.io/ipfs/${this.state.downFile}`)
    }
    render(){
        return(
            <div>
            <Form onSubmit ={this.onSubmit}>
                <Form.Field>
                    <label  style={{color:'white'}}>
                    Upload shipment here :
                    </label>
                    <Input type='File' onChange={this.capture}/>
                </Form.Field>
                <Message
                error
                header="Oops!"
                content={this.state.errorMsg}/>

                   <Button animated = 'fade' 
                       primary>
                           <Button.Content visible>
                               Upload File

                           </Button.Content>
                           <Button.Content hidden>
                               <Icon name="upload"/>
                           </Button.Content>
                       </Button>


            </Form>
            <p></p>
             <Button
             primary
             loading={this.state.loading}
             onClick={this.viewFile}
             animated ='fade'
             >
                 <Button.Content visible>
                               View File

                           </Button.Content>
                           <Button.Content hidden>
                               <Icon name="eye"/>
                           </Button.Content>
             </Button>
             </div>
                   )

    };
}

export default File;
