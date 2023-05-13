import React from 'react';
import { Box, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/image.png";


const HeroBanner = () => {
    return (
        <Box sx={{
            mt: { lg: "212px", xs: "70px" },
            ml: { sm: "50px" },
            flexWrap: 'wrap',
            justifyContent: 'flex-start'

        }} position="relative" p="20px" display={"flex"}>
            <Box sx={{ mr: "20px", mb: "20px" }}>
                <Typography color="#FF2625"
                    fontWeight="600px"
                    fontSize="26px">
                    FitClub
                </Typography>
                <Typography fontWeight={700}
                    sx={{ fontSize: { lg: " 44px", xs: "40px" } }}
                    mb="23px" mt="30px"

                >
                    Too Much is not
                    Enough,
                    <br /> Stay Hungry!
                </Typography>
                <Typography flex fontSize="30" fontFamily="Alegreya" lineHeight="35px" mb={4}>
                    Check out some interesting exercises
                    <br /> for your health and fitness.
                </Typography>
                <Button variant="contained" color="error" href="#exercises"
                    sx={{ backgroundColor: "#ff2625", padding: "10px" }} >Explore EXercises</Button>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
                <img src={HeroBannerImage} alt="image" className="img" />
                <Typography fontWeight={600}
                    color="#ff2625"
                    sx={{
                        opacity: 0.1,
                        display: { lg: "block", xs: "none" }
                    }}
                    fontSize="200px">
                    Exercises
                </Typography>
            </Box>
        </Box>

    )
}

export default HeroBanner;