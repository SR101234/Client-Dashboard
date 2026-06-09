import { Button, CloseButton, Drawer, Portal } from "@chakra-ui/react"
import { AiOutlineMenu } from "react-icons/ai";
import "./sider.css"
import { NavLink, useNavigate } from "react-router-dom";
import { RiArrowRightLine } from "react-icons/ri";


const Demo = () => {


  const navigate = useNavigate();
  const logout = async () => {
    const response = await fetch(`http://localhost:5000/logout`, {
      method: "POST",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json"
      },

    })
    const res = await response.json();
    if (res.message === 'Logout') {
      navigate('/login');
    }

  }

  return (
    <Drawer.Root placement={"start"}>
      <Drawer.Trigger asChild>
        <Button variant="outline" size="md">
          <AiOutlineMenu />
        </Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
            </Drawer.Header>
            <Drawer.Body>
              <div className="menuitems">
                <NavLink to="/mfd" style={{ fontSize: "x-large", margin: "2%" }}><p style={{ textAlign: "center", padding: "5%" }}>Mutual Funds</p></NavLink>
                <NavLink to="/corporateportfolio" style={{ fontSize: "x-large", margin: "2%" }}><p style={{ textAlign: "center", padding: "5%" }}>Corporate Portfolio</p></NavLink>
                <NavLink to="/dematportfolio" style={{ fontSize: "x-large", margin: "2%" }}><p style={{ textAlign: "center", padding: "5%" }}>Demat Portfolio</p></NavLink>
                <NavLink to="https://www.suigenerisconsulting.com/about_us.php" target="_blank" style={{ fontSize: "x-large", margin: "2%" }}><p style={{ textAlign: "center", padding: "5%" }}>About US</p></NavLink>
              </div>
            </Drawer.Body>
            <Drawer.Footer>
              <Button variant="ghost" className="logout" onClick={logout}>Logout <RiArrowRightLine /></Button>
            </Drawer.Footer>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}

export default Demo;
