import React, { useEffect, useRef } from "react";
import { Box, Button, Grid } from "@mui/material";
import { Favorite, Link } from "@mui/icons-material";


const SideSection = () => {

  

  return (
<>

<Button style={{
  margin:5
}}><Link/></Button>
<Button><Favorite/></Button>
</>

  );
};

export default SideSection;
