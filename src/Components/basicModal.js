import React from "react"
import {
    Modal,
    Box,
    Typography,
    Button,
    Link,
    Dialog,
    DialogTitle,
    TextField,
    DialogContent,
    DialogContentText,
    DialogActions
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
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{heading}</DialogTitle>
            <DialogContent>
                {instructions.map((instruction,index) => (
                    <DialogContentText key={index} id="modal-modal-description" sx={{ mt: 2 }}>
                        {instruction}
                    </DialogContentText>
                    ))}
            
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Close</Button>
                <Button target="_blank" href="mailto:gateways.hackathon@gmail.com">Send mail</Button>
            </DialogActions>
        </Dialog>
    )
}

export default BasicModal