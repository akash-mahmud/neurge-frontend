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

import { AppState, useSelector, useDispatch } from "../../store/Store";
import {
  fetchProducts,
  addToCart,
} from "../../store/apps/eCommerce/ECommerceSlice";
import { IconCheck, IconMinus, IconPlus } from "@tabler/icons-react";
import AlertCart from "../ecommerce/productCart/AlertCart";
import { ProductType } from "../../types/apps/eCommerce";

const ProductDetail = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const router = useRouter();
  const getTitle: string | any = router.query.slug;
  console.log(getTitle);
  // Get Product
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log(getTitle);

  // Get Products
  const product: ProductType | any = useSelector(
    (state: AppState) => state.ecommerceReducer.products[getTitle - 1]
  );

  /// select colors on click
  const [scolor, setScolor] = useState(product ? product.colors[0] : "");
  const setColor = (e: string) => {
    setScolor(e);
  };

  //set qty
  const [count, setCount] = useState(1);

  // for alert when added something to cart
  const [cartalert, setCartalert] = React.useState(false);

  const handleClick = () => {
    setCartalert(true);
  };

  const handleClose = (reason: string) => {
    if (reason === "clickaway") {
      return;
    }
    setCartalert(false);
  };
  return (
    <Box p={2}>
      {product ? (
        <>
          <Box display="flex" alignItems="center">
            {/* ------------------------------------------- */}
            {/* Badge and category */}
            {/* ------------------------------------------- */}

          </Box>
          {/* ------------------------------------------- */}
          {/* Title and description */}
          {/* ------------------------------------------- */}
          <Typography fontWeight="600" variant="h4" mt={1}>
            🙂 In this prompt you will learn how to use chatgpt
          </Typography>
          <Typography
            variant="subtitle2"
            mt={1}
            color={theme.palette.text.secondary}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium magnam tempore error iste similique? Quidem perspiciatis, ut impedit assumenda in, fugit alias iste nulla animi hic commodi deleniti est, officia tenetur obcaecati maiores neque atque beatae. Ad maxime delectus tenetur autem corrupti. Quasi delectus non fugit voluptatum officiis magni iure minus deleniti alias voluptates quibusdam eligendi expedita exercitationem, vel sapiente doloribus, nihil voluptate, natus magnam blanditiis suscipit consectetur ex a! Recusandae accusamus quod expedita quas modi repudiandae consequuntur provident praesentium. Libero facilis temporibus, et repudiandae, quos nobis harum eaque error sed sint sit! Natus, deleniti ad blanditiis asperiores possimus veritatis?
          </Typography>

          {/* ------------------------------------------- */}
          {/* Ratings */}
          {/* ------------------------------------------- */}
          <Stack direction={"row"} alignItems="center" gap="10px" mt={2} pb={3}>
            <Chip label="Marketing" color={"warning"} size="small" />

          </Stack>
          <Divider />




          {/* ------------------------------------------- */}
          {/* Alert When click on add to cart */}
          {/* ------------------------------------------- */}
          <AlertCart handleClose={handleClose} openCartAlert={cartalert} />
        </>
      ) : (
        "No product"
      )}
    </Box>
  );
};

export default ProductDetail;
