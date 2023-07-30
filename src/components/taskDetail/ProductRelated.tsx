import React, { useEffect } from "react";
import {
  Box,
  Typography,
  CardContent,
  Grid,

  Chip,
} from "@mui/material";
import { useSelector, useDispatch } from "../../store";
import { fetchProducts } from "../../store/apps/eCommerce/ECommerceSlice";
import Link from "next/link";
import { ProductType } from "../../types/apps/eCommerce";
import { useTasksWithoutrelationalDataQuery } from "@/graphql/generated/schema";
import { SortOrder } from "@/graphql/generated/schema";
import { useRouter } from "next/router";
import CardSkeleton from "../home/TaskSkeleton";
import TextTruncate from "react-text-truncate";

const ProductRelated = ({ categoryId }: { categoryId: string | undefined }) => {
  const dispatch = useDispatch();
const router = useRouter()
  const { data, error, loading } = useTasksWithoutrelationalDataQuery({
    variables: {

      where: {
        id:{
not:{
  equals:router.query.slug as string
}
        },
        categoryId: {
          equals: categoryId
        }
      },
      orderBy: [
        {
          updatedAt: SortOrder.Desc
        }
      ],
      take: 3
    }
  })
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
    <Box style={{
      backgroundColor:'#F9FAFB',
      padding:'24px'
    }}>

      <Typography variant="h4" mb={2} mt={5} fontSize={'2.25rem'} >
        Related Tasks
      </Typography>
      <Typography   fontSize={'1rem'}>

      Discover related prompts to expand your productivity. Seamlessly connecting with ChatGPT for endless conversation possibilities.
      </Typography>
      <Grid container spacing={3} mt={3}>
      {
          !loading ? <>
            {data?.getUserTasks?.map((task, i) => (
              <Grid item xs={12} sm={3} lg={4} key={task.id} >
                <Link href={`/task/${task.id}`}>
                  <Box height={280}
                    bgcolor={"#fff"}

                    textAlign="center">
                    <CardContent style={{
                      padding: "1.5rem 1.5rem 1.75rem"
                    }}>

                      <Typography lineHeight={'unset'} align="left" fontSize={'2.2rem'}
                        mt={1}
                        pb={1}
                        variant="subtitle1"
                        fontWeight={600}
                      >
                        {task.imoji}
                      </Typography>
                      <Typography align="left"
                        color={'#000'}
                        fontSize={'1.25rem'}
                        mt={1}
                        variant="subtitle1"
                        fontWeight={600}
                      >
                        {task.name}
                      </Typography>
                      <Typography lineHeight={'1.5'} fontSize={'1rem'} align="left"
                        color={'#475467'}
                        mt={1}
                        variant="body2"
                        fontWeight={400}
                      >
                        <TextTruncate
                          line={3}
                          element="p"
                          truncateText="…"
                          text={task.description}
                        />
                      </Typography>

                      <Grid display={'flex'} style={{
                        margin: 5
                      }} justifyContent={'flex-start'} item xs={12} sm={12} lg={12} key={i}>
                        {
                          task.tags.map((tag, index) => (

                            <Chip key={index} style={{
                              marginRight: 5
                            }}
                              variant={"filled"}
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
          </> : <>
            {[...Array(3)].map((_, index) => (
              <CardSkeleton key={index} />
            ))}

          </>
        }

   
      </Grid>


    </Box>
  );
};

export default ProductRelated;
