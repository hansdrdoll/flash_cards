import React from "react";
import TokenService from "../TokenService";
import { NavLink, Link } from "react-router-dom";
import { Menu, Input } from "semantic-ui-react";
import UserImg from "./ic_person_black_18px.svg";

const Header = props => {
  return (
    <div>
      {/* Mobile view */}
      <div className="header-mobile">
        <Menu pointing secondary>
          <Menu.Item
            as={NavLink}
            to="/dashboard"
            name="Dashboard"
          >
            Dashboard
          </Menu.Item>
          <Menu.Menu position="right">
            {/* <Menu.Item>
              <Input className='icon' icon='search' placeholder='Search...' />
            </Menu.Item> */}
            <Menu.Item as={NavLink} to="/profile" name="profile">
              <img className="profile-img" src={UserImg} alt="user" />
              {props.username != '' ? (
                <p>{props.username}
                <a onClick={props.logOut}>log out</a></p>
              ):(
                <p><Link to="/login">Log in</Link></p>
              )}
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
      {/* Desktop View */}
      <div className="header-desktop">
        <Menu pointing secondary>
          <Menu.Item
            as={NavLink}
            to="/dashboard"
            name="Dashboard"
          >
            Dashboard
          </Menu.Item>
          <Menu.Item
            as={NavLink}
            to="/decks/new"
            name="CreateDeck"
          >
            Create Deck
          </Menu.Item>
          <Menu.Menu position="right">
            {/* <Menu.Item>
            <Input className='icon' icon='search' placeholder='Search...' />
          </Menu.Item> */}
            <Menu.Item name="profile">
              <img className="profile-img" src={UserImg} alt="user" />
              {props.username != '' ? (
                <p>{props.username}
                <a onClick={props.logOut}> log out</a></p>
              ):(
                <p><Link to="/login">Log in</Link></p>
              )}
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
