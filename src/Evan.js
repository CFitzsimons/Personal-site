import React, {Component} from 'react';
import {Jumbotron, Media} from 'reactstrap';

class Evan extends Component{
    render(){
        return(
            <div class = "Jumbotron">
                <Jumbotron>
                {/* <Media>
                    <Media left>
                    <img src={evan} alt="Evan Power" class="thumbnail"/>
                    </Media>
                </Media> */}
                <h1 class="text-right"> Evan Power</h1>
                <p className="lead">Software Developer</p>
                </Jumbotron>
          </div>
        );
    }
}

export default Evan;
