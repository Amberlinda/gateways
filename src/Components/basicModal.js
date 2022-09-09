import React from "react"
import {
    Modal,
    Box,
    Typography
} from '@mui/material'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const BasicModal = ({
    instructions,
    heading,
    open,
    onClose,
    subHeading
}) => {
    return(
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
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
            </Box>
        </Modal>
    )
}

export default BasicModal