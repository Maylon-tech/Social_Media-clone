import React from 'react'
import { 
  Box,
  Typography,
  AvatarGroup,
  Avatar,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider
} from '@mui/material'

const Rightbar = () => {
  return (
    <Box 
      flex={2} p={2} 
      sx={{ display: {xs: "none", sm: "block" }}}
    >
      <Box position="fixed">
        <Typography variant='h6' fontWeight={100}>
          Online Friends
        </Typography>

        <AvatarGroup max={7}>
        <Avatar 
            alt="Nemoto Nanda" 
            src="https://images.pexels.com/photos/783243/pexels-photo-783243.jpeg?auto=compress&cs=tinysrgb&w=600" 
          />
          <Avatar 
            alt="Remy Sharp" 
            src="https://images.pexels.com/photos/1001850/pexels-photo-1001850.jpeg?auto=compress&cs=tinysrgb&w=600" 
          />
          <Avatar 
            alt="Travis Howard" 
            src="/static/images/avatar/2.jpg" 
          />
          <Avatar 
            alt="Cindy Baker" 
            src="" 
          />
          <Avatar 
            alt="Agnes Walker" 
            src="https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=600" 
          />
          <Avatar 
            alt="Trevor Henderson" 
            src="https://images.pexels.com/photos/254069/pexels-photo-254069.jpeg?auto=compress&cs=tinysrgb&w=600" 
          />
          <Avatar 
            alt="Trevor Henderson" 
            src="https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=600" 
          />
          <Avatar 
            alt="Nemoto Michel" 
            src="" 
          />
        </AvatarGroup>

        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>

        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
              <img
                src="https://images.pexels.com/photos/302083/pexels-photo-302083.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""                
              />
          </ImageListItem>
          <ImageListItem>
              <img
                src="https://images.pexels.com/photos/302083/pexels-photo-302083.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""                
              />
          </ImageListItem>
          <ImageListItem>
              <img
                src="https://images.pexels.com/photos/302083/pexels-photo-302083.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""                
              />
          </ImageListItem>
          <ImageListItem>
              <img
                src="https://images.pexels.com/photos/302083/pexels-photo-302083.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""                
              />
          </ImageListItem>
        </ImageList>

        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
          Latest Conversations
        </Typography>

        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=600" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Rightbar