import { Button, Container, Menu, Image, Dropdown } from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";

export default observer(function NavBar() {
  const {
    userStore: { user, logout },
  } = useStore();
  return (
    <Menu
      inverted
      fixed="top"
      style={{ marginTop: 0, marginBottom: 0, height: "50px" }}
    >
      <Container>
        <Menu.Item as={NavLink} to="/" header>
          <img
            src={"/assets/marAzores.png"}
            alt="logo"
            style={{ marginRight: 10, width: "70px", height: "50px" }}
          />
          Back Office
        </Menu.Item>

        <Menu.Item as={NavLink} to="/createActivity" header>
          {" "}
          Team1
        </Menu.Item>
        <Menu.Item as={NavLink} to="/activities" name="Team" />

        <Menu.Item as={NavLink} to="/activities" name="Activities" />
        {/* <Menu.Item as={NavLink} to="/errors" name="Errors" /> */}
        <Menu.Item>
          <Button
            as={NavLink}
            to="/createActivity"
            positive
            content="Create Activity"
          />
        </Menu.Item>
        <Menu.Item position="right">
          <Image
            src={user?.image || "/assets/user.png"}
            avatar
            spaced="right"
          />
          <Dropdown pointing="top left" text={user?.displayName}>
            <Dropdown.Menu>
              <Dropdown.Item
                as={Link}
                to={`/profile/${user?.username}`}
                text="My Profile"
                icon="user"
              />
              <Dropdown.Item onClick={logout} text="Logout" icon="power" />
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
      </Container>
    </Menu>
  );
});
{
  /* <Button
  onClick={() => activityStore.openForm()}
  positive
  content="Create Activity"
/>; */
}
