import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink,Nav } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import Logo from './LetMeBook.svg'

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
          <>
            <Navbar className="navbar navbar-expand-lg box-shadow mb-3">
              <img src={Logo} alt="Logo" />
              <Container>
                {/* <NavbarBrand tag={Link} to="/">LetMeBook</NavbarBrand> */}
                <Nav className="">
                  <div className="navlinks navbar ">
                    <NavItem>
                      <NavLink
                        tag={Link}
                        className="text-dark linkdesign"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        tag={Link}
                        className="text-dark linkdesign"
                        to="/doctors"
                      >
                        Doctors
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        tag={Link}
                        className="text-dark linkdesign"
                        to="/mydoctor"
                      >
                        MyDoctor
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        tag={Link}
                        className="text-dark linkdesign"
                        to="/about"
                      >
                        About
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        tag={Link}
                        className="text-dark linkdesign"
                        to="/login"
                      >
                        Sign-Up/Login
                      </NavLink>
                    </NavItem>
                  </div>
                </Nav>
              </Container>
            </Navbar>
          </>
        );
    }
}
