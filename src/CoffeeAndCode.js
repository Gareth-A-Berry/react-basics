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
    constructor(props) {
        super(props);
        this.state = {
            adventureName: '',
            email: '',
            password: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange({ field, value }) {
        this.setState({
            [field]: value
        })
    }

    render() {
        const { adventureName, email, password } = this.state;
        return (
            <section className="container">
                <Card>
                    <Header />
                    <Input
                        onChange={this.handleInputChange}
                        placeholder={"Adventure Name"}
                        label={"Adventure Name"}
                        value={adventureName}
                        field={'adventureName'}
                    />
                    <Input
                        onChange={this.handleInputChange}
                        placeholder={"Email"}
                        label={"Email"}
                        value={email}
                        field={'email'}
                    />
                    <Input
                        onChange={this.handleInputChange}
                        placeholder={"Password"}
                        label={"Password"}
                        value={password}
                        field={'password'}
                        type={'password'}
                    />
                    <Button />
                    <span className="container__text">
                        or login with
                    </span>
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
