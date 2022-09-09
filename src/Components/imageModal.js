import React from "react"
import {
    Modal,
    Box,
    Typography
} from '@mui/material'
import schedule from '../assets/schedule.jpg'

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
  };


const ImageModal = ({
    onClose,
    open,
    image
}) => {
    return(
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={modalStyle} component="div">
                <Box sx={{
                        width:"100%",
                        height:"100%"
                    }}
                    component="img"
                    alt="hello"
                    src={schedule}
                />
        </Box>
      </Modal>
    )
}

export default ImageModal