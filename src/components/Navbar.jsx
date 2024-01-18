import React, { useState } from 'react'
import { 
  AppBar, 
  styled, 
  Typography, 
  Toolbar, 
  Box, 
  InputBase,
  Avatar,
  Menu,
  MenuItem, 
  Badge,
} from '@mui/material'

import { 
  Mail,
  Notifications,
  Pets 
} from '@mui/icons-material'

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
})

const Search = styled("div")(({ theme }) => ({
  backgroundColor: 'white',
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
})) 

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  alignItems:'center',
  gap: '20px',
  [theme.breakpoints.up("sm")]:{
    display: "flex",
  }
}))

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems:'center',
  gap: '10px',
  [theme.breakpoints.up("sm")]:{
    display: "none",
  }
}))

const Navbar = () => {
  const [open, setOpen] = useState()

  return (
    <AppBar position='sticky'>
      <StyledToolbar>

        <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>
          Social Media
        </Typography>

        <Pets sx={{ display: { xs: "block", sm: "none" } }} />

        {/* Search Bar */}
        <Search>
          <InputBase placeholder='Search...' />
        </Search>

        {/* ICONS nav section */}
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail color="white" />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications color="white" />
          </Badge>
          <Avatar 
            sx={{ width:'30px', height:'30px' }} 
            src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            onClick={() => setOpen(true)} 
          />
        </Icons>
        <UserBox onClick={() => setOpen(true)}>
          <Avatar 
            sx={{ width:'30px', height:'30px' }} 
            src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          />
          <Typography variant='span'>Nemoto</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="basic-menu"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical:'top',
          horizontal:'right',
        }}
        transformOrigin={{
          vertical:'top',
          horizontal:'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar