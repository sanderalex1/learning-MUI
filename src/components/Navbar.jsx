import styled from "@emotion/styled";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import AbcIcon from "@mui/icons-material/Abc";
import { Mail, Notifications } from "@mui/icons-material";
import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  background: "white",
  padding: "0 10px",
  borderRadius: "5px",
  width: "40%",
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: 12,
  alignItems: "center",
  [theme.breakpoints.up("sm")]: { display: "none" },
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: 16,
  alignItems: "center",
  [theme.breakpoints.up("sm")]: { display: "flex" },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Learning MUI
        </Typography>
        <AbcIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail color="action" />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 25, height: 25 }}
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar sx={{ width: 25, height: 25 }} />
          <Typography variant="span">John</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
