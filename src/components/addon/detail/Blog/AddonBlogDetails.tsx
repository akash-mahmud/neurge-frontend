/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import parse from 'html-react-parser';

import { useRouter } from "next/router";
import {
  CardContent,
  Stack,
  Typography,
  Chip,
  Box,
  Divider,

} from "@mui/material";
import {
  
  IconPoint,
} from "@tabler/icons-react";
import { format } from "date-fns";

import BlankCard from "../../../shared/BlankCard";
import {  useDispatch } from "../../../../store";
import { useGetUserBlogSingleQuery } from "@/graphql/generated/schema";

const AddonBlogDetails = () => {
  const router = useRouter();
const {blogId} = router.query

const {data, loading, error} = useGetUserBlogSingleQuery({
    variables: {
        where: {
            id:blogId as string
        }
    }
})
 const post = data?.getUserBlogSingle 








  return (
    <Box>
      {post ? (
        <>
          <BlankCard>
            <>
              
              <CardContent>
              
                <Chip
                  label={post?.addonBlogCategory?.name}
                  size="small"
                  sx={{ marginTop: 2 }}
                ></Chip>
                <Box my={3}>
                  <Typography
                    gutterBottom
                    variant="h1"
                    fontWeight={600}
                    color="inherit"
                    sx={{ textDecoration: "none" }}
                  >
                    {post?.title}
                  </Typography>
                </Box>
                <Stack direction="row" gap={3} alignItems="center">
               

                  <Stack direction="row" ml="auto" alignItems="center">
                    <IconPoint size="16" />
                    <small>
                      {post ? (
                        <>{format(new Date(post.createdAt), "E, MMM d")}</>
                      ) : (
                        ""
                      )}
                    </small>
                  </Stack>
                </Stack>
              </CardContent>
              <Divider />
              <CardContent>
              {parse(post.description)}

                
        
                <Box my={4}>
                  <Divider />
                </Box>
           
              
             
              </CardContent>
            </>
          </BlankCard>
         
        </>
      ) : (
        "No found"
      )}
    </Box>
  );
};

export default AddonBlogDetails;
