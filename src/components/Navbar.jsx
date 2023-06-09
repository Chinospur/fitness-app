import React from 'react';
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-around" sx={{
      gap: { sm: "122px", xs: "40px"}, mt: { sm: "32px", xs: "20px"}, 
      justifyContent: "none", px: "20px" }}>
      <Link to="/package.json">
        <img src={Logo} alt="logo" style={{
          width: "100x", height: "100px", margin: "0 20px"
        }} />
      </Link> 
      <Stack
        direction="row"
        gap="40px"
        fontSize="40"
        alignItems="flex-end">
        <Link to="/" style={{
          textDecoration: "none", color: "#3A1212", borderBottom: "4px solid #FF2526"
        }}>Home</Link>
        <a href="exercises" style={{
          textDecoration: " none", color: "#3A1212"
        }}>Exercises</a>
      </Stack>
    </Stack>
  )
}
export default Navbar;