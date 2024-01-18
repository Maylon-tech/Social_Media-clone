import React, { useState } from 'react'

import {
    styled,
    Tooltip,
    Fab,
    Modal,
    Typography,
    Box,
    Avatar,
    TextField,
    Stack,
    ButtonGroup,
    Button,
} from '@mui/material'

import { Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
}

const UserBox = styled(Box) ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
})

const Add = () => {
  const [open, setOpen] = useState(false)
  
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <Tooltip 
        onClick={handleOpen}
        title="Delete"
        sx={{ 
            position: 'fixed', 
            bottom: 20, 
            left: { xs:"calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color='primary' aria-label='add'>
            <AddIcon />
        </Fab>
      </Tooltip>  
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box 
          sx={style} 
          bgcolor={"background.default"} 
          color={'text.primary'}
        >
          <Typography textAlign='center' variant="h6" component="h2">
            Create a Post
          </Typography>
          <UserBox>
            <Avatar
              src="https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=600"
              sx={{}}
            />
            <Typography fontWeight={500} variant="span">
              John Doe
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"            
            multiline
            rows={3}
            defaultValue="What's on your mind?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup 
            fullWidth
            variant="contained" 
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  )
}

export default Add