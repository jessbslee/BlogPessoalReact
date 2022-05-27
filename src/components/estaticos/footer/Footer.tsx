import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Box, Grid } from '@material-ui/core';

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box style={{ backgroundColor: "#3F51B5", height: "120px" }}>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.facebook.com/generationbrasil" target="_blank">
                                <FacebookIcon style={{ fontSize: 50, color: "white" }} />
                            </a>
                            <a href="https://github.com/jessbslee" target="_blank">
                                <GitHubIcon style={{ fontSize: 45, color: "white" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/j%C3%A9ssica-b-da-silva-66793048/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 50, color: "white" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box style={{ backgroundColor: "#303F9F", height: "60px" }}>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2020 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://brasil.generation.org">
                                <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">brasil.generation.org</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;