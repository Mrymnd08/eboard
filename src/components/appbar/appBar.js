import { ListItemIcon, ListItemButton, ListItemText, Button } from "@mui/material";
import { AppbarContainer, MyList } from "../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search"
import HomeIcon from "@mui/icons-material/Home";
import BookIcon from "@mui/icons-material/Book";
import ContactIcon from "@mui/icons-material/ContactMail";
import AdminIcon from "@mui/icons-material/VerifiedUser";
import UserIcon from "@mui/icons-material/Login";

export default function AppBar(){

    return (
        <AppbarContainer>
            < img style={{ width: 200 , height: 60 }} src="/images/eboardlogo.jpg"/>
            
            <MyList type = "row">
                    
                    <ListItemButton>
                    <ListItemIcon>
                        <SearchIcon/>
                        <label >Search</label>
                    </ListItemIcon>
                    </ListItemButton>

                    <ListItemButton > <ListItemIcon><HomeIcon/></ListItemIcon>Home </ListItemButton>
                    <ListItemButton > <ListItemIcon><BookIcon/></ListItemIcon>Tutorials </ListItemButton>
                    <ListItemButton > <ListItemIcon><ContactIcon/></ListItemIcon>Contact Us </ListItemButton>
                    <ListItemButton > <ListItemIcon><UserIcon/></ListItemIcon>User </ListItemButton>
                    <ListItemButton > <ListItemIcon><AdminIcon/></ListItemIcon>Admin </ListItemButton>
            </MyList>
            
        </AppbarContainer>
    );
   
}