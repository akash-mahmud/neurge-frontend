import React, { useEffect, useRef } from "react";
import { Box, Button, Grid } from "@mui/material";
import { Favorite, Link } from "@mui/icons-material";
import copy from "copy-to-clipboard";
import { useRouter } from "next/router";
import { notification } from "antd";


const SideSection = () => {

  const router = useRouter()

  return (
<>

<Button onClick={()=> {
    copy(`${process.env.NEXT_PUBLIC_HOST}${router.asPath}`)

  notification.success({
    message: "Link Copied to Clipboard",
        placement: "top",
        style: {
          marginBottom:'unset', 
          paddingBottom:10
        }
     
  })
}} style={{
  margin:5
}}><Link/>

</Button>
{/* <Button><Favorite/></Button> */}
</>

  );
};

export default SideSection;
