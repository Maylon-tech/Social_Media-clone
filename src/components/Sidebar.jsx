import React from 'react'
import { 
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  Switch,
} from '@mui/material'
import {
  AccountBox, 
  Groups, 
  Home, 
  ModeNight, 
  LightMode,
  Pages, 
  Person, 
  Settings, 
  Storefront,
  Mode
} from '@mui/icons-material'

const Sidebar = ({ mode, setMode }) => {
  return (
    <Box   
      flex={1}
      p={2}
      sx={{ marginTop:'2rem', display: { xs: "none", sm: "block" }}}
    >
      <Box position="fixed">
        <List>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#home">
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Homepage" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemIcon>
                  <Pages />
                </ListItemIcon>
                <ListItemText primary="Pages" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemIcon>
                  <Groups />
                </ListItemIcon>
                <ListItemText primary="Groups" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemIcon>
                  <Storefront />
                </ListItemIcon>
                <ListItemText primary="Marketplace" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemIcon>
                  <Person />
                </ListItemIcon>
                <ListItemText primary="Friends" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemIcon>
                  <AccountBox />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemIcon>
                  {
                    mode === 'light' ? <ModeNight /> : <LightMode />
                  }
                </ListItemIcon>
                <Switch onChange={e => setMode(mode === "light" ? "dark" : "light")} />
              </ListItemButton>
            </ListItem>
        </List>    
      </Box>
    </Box>
  )
}

export default Sidebar  