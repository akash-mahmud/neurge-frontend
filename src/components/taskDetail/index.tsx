import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

// MUI Elements
import {
  Box,
  Grid,
  Typography,
  Chip,
  Button,
  Rating,
  Divider,
  Stack,
  useTheme,
  Fab,
  ButtonGroup,
} from "@mui/material";

import { AppState, useSelector, useDispatch } from "../../store";
import {
  fetchProducts,
  addToCart,
} from "../../store/apps/eCommerce/ECommerceSlice";
import { IconCheck, IconMinus, IconPlus } from "@tabler/icons-react";
import { ProductType } from "../../types/apps/eCommerce";
import { Task, TaskQueryResult } from "@/graphql/generated/schema";
import { TaskQuery } from "@/graphql/generated/schema";

const ProductDetail = ({ task }: {
  task: TaskQuery | undefined | null
}) => {
  const theme = useTheme();
  const router = useRouter();

  // Get Product







  return (
    <Box p={2}>
      {task?.task ? (
        <>
          <Box display="flex" alignItems="center">
            {/* ------------------------------------------- */}
            {/* Badge and category */}
            {/* ------------------------------------------- */}

          </Box>
          {/* ------------------------------------------- */}
          {/* Title and description */}
          {/* ------------------------------------------- */}
          <Typography fontWeight="600" variant="h4" fontSize={'2.25rem'} lineHeight={'1.2'}  mt={1}>
            {task?.task?.imoji}
          </Typography>
          <Typography fontWeight="600" fontSize={'2.25rem'} lineHeight={'1.2'} variant="h4" mt={1}>
{task?.task?.name}
          </Typography>
          <Typography
            variant="subtitle2"
            mt={1}
            fontSize={'1rem'}
            color={theme.palette.text.secondary}
          >
            {task?.task?.description}
          </Typography>

          {/* ------------------------------------------- */}
          {/* Ratings */}
          {/* ------------------------------------------- */}
          <Stack direction={"row"} alignItems="center" gap="10px" mt={2} pb={3}>

            {task?.task?.tags.map((tag, index) =>
              <Chip key={index} label={tag} style={{
                backgroundColor: task.task?.category?.colour,
                color:"#fff"
              }} size="small" />

            )}


          </Stack>

        </>
      ) : (
        "No Task"
      )}
    </Box>
  );
};

export default ProductDetail;
