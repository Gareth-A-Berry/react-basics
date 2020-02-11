import React, { PureComponent } from 'react';

// Styling
import './CoffeeAndCode.css'

// Components
import {
    Card,
    Header,
    Input,
    Button,
    Footer,
    TwitterIcon,
    FacebookIcon,
    GoogleIcon
} from './components'
class CoffeeAndCode extends PureComponent{

    render() {
        return (
            <section className="container">
                <Card>
                    <Header />
                    <Input placeholder={"Adventure Name"} label={"Adventure Name"}/>
                    <Input placeholder={"Email"} label={"Email"}/>
                    <Input placeholder={"Password"} label={"Password"} type={'password'}/>
                    <Button />
                    <text className="container__text">
                        or login with
                    </text>
                    <div className="container__icons">
                        <TwitterIcon />
                        <FacebookIcon />
                        <GoogleIcon />
                    </div>
                    <Footer/>
                </Card>
            </section>
        );
    }

}

export default CoffeeAndCode;
