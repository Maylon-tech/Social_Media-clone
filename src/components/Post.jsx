import React from 'react'

import { 
    Card,
    CardMedia,
    Typography,
    CardActions,
    CardHeader,
    Avatar,
    IconButton,
    CardContent,
    Checkbox,
} from '@mui/material'

import {
    MoreVert,
    Favorite,
    Share,
    FavoriteBorder,
} from '@mui/icons-material'
  
const Post = () => {
  return (
    <Card sx={{ margin: 5 }}>
        <CardHeader
          avatar={
            <Avatar src="https://images.pexels.com/photos/1449667/pexels-photo-1449667.jpeg?auto=compress&cs=tinysrgb&w=600" aria-label="recipe" />
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="John Doe"
          subheader="April 16, 2024"
        />

        <CardMedia
          component="img"
          height="20%"
          image="https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Paella dish"
        />

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CardContent>

        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder /> } 
              checkedIcon={<Favorite sx={{ color: 'red' }} />}
            />            
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
    </Card>
  )
}

export default Post