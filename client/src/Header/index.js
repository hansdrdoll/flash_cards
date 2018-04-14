import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, Input } from "semantic-ui-react";
import UserImg from "./ic_person_black_18px.svg";

const Header = props => {
  // QUESTION: we want the currently selected view to be highlighted.
  // can this come from the react router match props?
  return (
    <div>
      {/* Mobile view */}
      <div className="header-mobile">
        <Menu pointing secondary>
          <Menu.Item
            as={NavLink}
            to="/dashboard"
            name='Dashboard'
            // active={activeItem === 'editorials'}
            // onClick={this.handleItemClick}
          >
            Dashboard
          </Menu.Item>
          <Menu.Menu position="right">
            {/* <Menu.Item>
              <Input className='icon' icon='search' placeholder='Search...' />
            </Menu.Item> */}
            <Menu.Item
              as={NavLink}
              to="/profile"
              name='profile'
            >
              <img className="profile-img" src={UserImg} alt="user" />
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
          name='Dashboard'
          // active={activeItem === 'editorials'}
          // onClick={this.handleItemClick}
        >
          Dashboard
        </Menu.Item>
        <Menu.Item
          as={NavLink}
          to="/decks/new"
          name='CreateDeck'
          // active={activeItem === 'editorials'}
          // onClick={this.handleItemClick}
        >
          Create Deck
        </Menu.Item>
        <Menu.Item
          as={NavLink}
          to="/Play"
          name='Review'
          // active={activeItem === 'editorials'}
          // onClick={this.handleItemClick}
        >
          Review
        </Menu.Item>
        <Menu.Menu position="right">
          {/* <Menu.Item>
            <Input className='icon' icon='search' placeholder='Search...' />
          </Menu.Item> */}
          <Menu.Item
            as={NavLink}
            to="/profile"
            name='profile'
          >
            <img className="profile-img" src={UserImg} alt="user" />
        </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
    </div>
  );
};

export default Header;
