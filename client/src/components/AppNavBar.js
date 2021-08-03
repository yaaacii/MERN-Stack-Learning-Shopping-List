import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

class AppNavbar extends Component {
    state = {
        isOpen: false
    }
    //this turns the state of navbar to open or close
    toggle = () => { //this.toggle = this.toggle.bind(this) is the same as the arrow function
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    {/* /* the second dark helps make the text light 
                    // sm create nav bar on small devices. could do md or lg
                    // mb-5 moves everything down under the navbar */}
                    <Container>
                        <NavbarBrand href='/'>ShoppingList</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                {/* //  ml-auto will margin to the right */}
                                <NavItem>
                                    <NavLink href="https://docs.google.com/document/d/13u7qWP3RZ_FjxLXyzCrllUtceqj_cj9A67HFfvy06Sg/edit">
                                        my Notes
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}
export default AppNavbar;