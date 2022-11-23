import { useTheme } from "@emotion/react";
import { Grid, Button, List, ListItemButton, Typography } from "@mui/material";
import { BannerContainer, BannerContent, BannerDescription, } from "../../styles/banner";
import { Colors } from "../../styles/theme";
import { MenuTitle, TutorialAlert, TutorialTypes } from "../../styles/TutorialMenu";

export default function TutorialMenu() {
    const theme = useTheme ();
     return (
        <>
        <Button>
            Yes

        </Button>
        <BannerContainer>
        
            <BannerContent>
            <MenuTitle align="center"> Tutorials 
            </MenuTitle>
            <TutorialAlert align="center" >
                You must Log in first !
            </TutorialAlert>
                <Grid container spacing={5} justifyContent="center">
                    <Grid item md={6} lg={7}>
                        <TutorialTypes>
                            Programming
                        </TutorialTypes>

                    <List>

                        <ListItemButton>
                            <Typography lineHeight={2} variant="caption2"> 
                                Java
                            </Typography>
                        </ListItemButton>

                        <ListItemButton>
                            <Typography lineHeight={2} variant="caption2">
                                 Python
                            </Typography>
                        </ListItemButton>

                        <ListItemButton>
                            <Typography lineHeight={2} variant="caption2">
                                C#
                            </Typography>
                        </ListItemButton>
            
                    </List>

                    </Grid>
                    <Grid item md={6} lg={7}>
                        <TutorialTypes>
                            HTML/CSS
                        </TutorialTypes>

                    <List>

                        <ListItemButton>
                            <Typography lineHeight={2} variant="caption2"> 
                                HTML  
                            </Typography>
                        </ListItemButton>

                        <ListItemButton>
                            <Typography lineHeight={2} variant="caption2">
                                 CSS
                            </Typography>
                        </ListItemButton>

                        <ListItemButton>
                            <Typography lineHeight={2} variant="caption2">
                                Bootstrap
                            </Typography>
                        </ListItemButton>
            
                    </List>

                    </Grid>
                    <Grid item md={7} lg={2}>
                        <TutorialTypes>
                            Javascript
                        </TutorialTypes>

                    <List>

                        <ListItemButton>
                            <Typography lineHeight={2} variant="caption2"> 
                                React
                            </Typography>
                        </ListItemButton>

                        <ListItemButton>
                            <Typography lineHeight={2} variant="caption2">
                                 Angular JS  
                            </Typography>
                        </ListItemButton>

                        <ListItemButton>
                            <Typography lineHeight={2} variant="caption2">
                                JavaScript  
                            </Typography>
                        </ListItemButton>
            
                    </List>

                    </Grid>
                    <Grid item md={7} lg={5}>
                        <TutorialTypes>
                            Server Side
                        </TutorialTypes>

                    <List>

                        <ListItemButton>
                            <Typography lineHeight={2} variant="caption2"> 
                                MYSQL
                            </Typography>
                        </ListItemButton>

                        <ListItemButton>
                            <Typography lineHeight={2} variant="caption2">
                                 PHP 
                            </Typography>
                        </ListItemButton>

                        <ListItemButton>
                            <Typography lineHeight={2} variant="caption2">
                                MongoDB 
                            </Typography>
                        </ListItemButton>
            
                    </List>

                    </Grid>
                    
                </Grid>
                
                
            </BannerContent>
        </BannerContainer>
        </>
 
        
     );
}