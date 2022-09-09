import React from "react"
import {
    Modal,
    Box,
    Typography,
    Button,
    Link
} from '@mui/material'
import { styled } from '@mui/material/styles';

const CustomModal = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      width:350,
      height:400
    },
    [theme.breakpoints.up('md')]: {
        width: 700,
        height:500,
      },
  }));

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflowY:"scroll",
  };

const BasicModal = ({
    instructions,
    heading,
    open,
    onClose,
    subHeading,
    showBtn
}) => {
    return(
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <CustomModal sx={style} >
                <Typography id="modal-modal-title" variant="h5" component="h2">
                    {heading}
                </Typography>
                <Typography id="modal-modal-title" variant="h6" component="h2" sx={{mt:2}}>
                    {subHeading}
                </Typography>
                {instructions.map((instruction,index) => (
                <Typography key={index} id="modal-modal-description" sx={{ mt: 2 }}>
                    {instruction}
                </Typography>
                ))}
                {showBtn && <Button target="_blank" 
                href="mailto:gateways.hackathon@gmail.com" 
                variant="contained" sx={{mt:2}}>
                    Send mail
                </Button>}
            </CustomModal>
        </Modal>
    )
}

export default BasicModal