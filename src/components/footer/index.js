import styled from "@emotion/styled";
import {
  Grid,
  List,
  ListItemText,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import { Box } from "@mui/system";
import { Colors } from "../../styles/theme";
import { Send, FooterTitle } from "../../styles/footer";
import SendIcon from "@mui/icons-material/Send";

export default function Footer() {
  return (
    <Box
      sx={{
        background: Colors.primary,
        color: Colors.white,
        p: { xs: 4, md: 10 },
        pt: 12,
        pb: 12,
        fontSize: { xs: '12px', md: '14px' }
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">About us</FooterTitle>
          <Typography variant="caption2">
            CCE senior students seeking <br/>
            to help undergraduate students <br/>
            to pass coding courses by offering <br/>
            different coding languages to <br/>
            study & quizes to test their knowledge.
            </Typography>
            
          
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">Information</FooterTitle>
          <List>

            <ListItemText>
              <Typography lineHeight={2} variant="caption2"> 
                +961 81993696
              </Typography>
            </ListItemText>

            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                +961 76821778
              </Typography>
            </ListItemText>

            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                +961 70554184
              </Typography>
            </ListItemText>
            
          </List>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">my account</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Login
              </Typography>
            </ListItemText>
            
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                My Account
              </Typography>
            </ListItemText>
            
          </List>
        </Grid>
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">Contact Us</FooterTitle>
          <Stack>
            <Send
              color="primary"
              label="Email address"
              variant="standard"
            />
            <Button
              startIcon={<SendIcon sx={{ color: Colors.white }} />}
              sx={{ mt: 4, mb: 4 }}
              variant="contained"
            >
              Send
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}