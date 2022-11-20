import { Typography} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { BannerContainer,BannerContent, BannerTitle, BannerDescription, BannerImage } from "../../styles/banner";

export default function Banner(){
    const theme = useTheme ();
    
    return(
        <BannerContainer>
            <BannerImage src="/images/homee1.png"/>
            <BannerContent>
                <Typography variant="h6"> Not sure where to begin? Start here and </Typography>
                <BannerTitle>
                Learn Coding
                </BannerTitle>
                <BannerDescription >
                Everyone’s talking about coding, but where do you start? This path will give you an introduction to the world of code and programming fundamentals that can be helpful for any language you learn..

                </BannerDescription>
            </BannerContent>
        </BannerContainer>
    );
}
