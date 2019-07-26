import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { login } from '../../store/actions/auth';

class AuthModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            email: '',
            password: ''
        };

        this.toggle = this.toggle.bind(this);
    }

    loginUser = async () => {
        const response = await this.props.login(this.state.email, this.state.password);
        if (response.status === 'error') {
          alert("connexion error")
        } else if (response.status === 'success') {
          alert("connexion OK")
        }
      }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return (
            <div>
                <Button color="danger" onClick={this.toggle}>Sign In</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Sign In</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={(e) => this.submitForm(e)}>
                            <FormGroup>
                                <Label for="userMail">Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="userMail"
                                    placeholder="Your pseudo"
                                    onChange={(e) => this.onChange(e)}
                                    value={this.state.email}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="userPass">Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="userPass"
                                    placeholder="Your password"
                                    onChange={(e) => this.onChange(e)}
                                    value={this.state.pass}
                                />
                            </FormGroup>
                        </Form>
                        <Button type="submit" color="primary" onClick={this.toggle}>Confirm</Button>{' '}
                        <Button color="secondary" onClick={this.loginUser}>Cancel</Button>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
  })
  
  const mapDispatchToProps = {
    login
  }
  
  // @ts-ignore
  export default connect(mapStateToProps, mapDispatchToProps)(AuthModal)