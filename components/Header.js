import React from 'react';
import { Menu} from 'semantic-ui-react';
import { Link } from '../routes';
export default () => {
    return(
        <Menu style= {{marginTop: '20px'}}>
            <Link route="/">
                <a className = "item">
                SupCube
                </a>
            </Link>
            <Menu.Menu position='right'>
            <Link route="/">
                <a className = "item">
                Signout
                </a>
            </Link>
            </Menu.Menu>
        </Menu>
    );
}
