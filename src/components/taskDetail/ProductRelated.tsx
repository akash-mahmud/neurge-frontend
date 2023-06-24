import React, { useEffect } from "react";
import {
  Box,
  Stack,
  Typography,
  CardContent,
  Grid,
  Rating,
  Skeleton,
  Chip,
} from "@mui/material";
import { useSelector, useDispatch } from "../../store/Store";
import { fetchProducts } from "../../store/apps/eCommerce/ECommerceSlice";
import Link from "next/link";
import BlankCard from "../shared/BlankCard";
import { ProductType } from "../../types/apps/eCommerce";
import { topcards } from "../home/Tasks";

const ProductRelated = () => {
  const dispatch = useDispatch();

  // Get Product
  React.useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filterRelatedProduct = (products: ProductType[]) => {
    if (products) return products.filter((t) => t.related);

    return products;
  };

  // Get Products
  const Relatedproducts = useSelector((state) =>
    filterRelatedProduct(state.ecommerceReducer.products)
  );

  // skeleton
  const [isLoading, setLoading] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box>
      <Typography variant="h4" mb={2} mt={5}>
        Related Tasks
      </Typography>
      <Grid container spacing={3} mt={3}>
      {topcards.map((topcard, i) => (
        <Grid item xs={12} sm={4} lg={3} key={i}>
          <Link href='/task/slug'>
          <Box bgcolor={
            topcard.bgcolor + ".light"} 
          
          textAlign="center">
            <CardContent>
              {/* <Image src={topcard.icon} alt={"topcard.icon"} width="50" /> */}
              {/* <Typography
                color={topcard.bgcolor + ".main"}
                mt={1}
                variant="h1"
                fontWeight={600}
              >
                {topcard.imoji}
              </Typography> */}
              <Typography align="left"
                color={topcard.bgcolor + ".main"}
                mt={1}
                variant="subtitle1"
                fontWeight={600}
              >
               {topcard.imoji} {topcard.title}
              </Typography>
              <Grid display={'flex'} style={{
                margin:5
              }} justifyContent={'flex-start'} item xs={12} sm={12} lg={12} key={i}>
              {
                topcard.tags.map((tag)=> (
                    
                  <Chip style={{
                    marginRight:5
                  }}
                  // color={item?.chipColor}
                  variant={ "filled"}
                  size="small"
                  label={tag}
                  />
                  ))
                }
                </Grid>
              
            </CardContent>
          </Box>
          </Link>
          
        </Grid>
      ))}
    </Grid>
    </Box>
  );
};

export default ProductRelated;
