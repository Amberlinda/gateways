import { 
    Typography,
    Box,
    useMediaQuery
 } from "@mui/material";
import React from "react";

const CustomIframe = ({
    link,
    title,
    mainTheme
}) => {

    const matchSm = useMediaQuery(mainTheme.breakpoints.down('sm'));

    return(
        <>
            <Box component="div" sx={{mt:3,mr:matchSm ? 0 : 5,height:315,textAlign:"right"}}>
                <Typography variant="h6" sx={{my:1}}>{title}</Typography>
                <iframe width="100%" height="100%" 
                src={link} 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
            </Box>
        </>
    )
}

export default CustomIframe