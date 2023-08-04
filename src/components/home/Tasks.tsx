import Image from "next/image";
import { Box, CardContent, Chip, Grid, Typography } from "@mui/material";

import TextTruncate from 'react-text-truncate'; // recommend

import Link from "next/link";
import { QueryMode, useAggregateTaskQuery, useTasksWithoutrelationalDataQuery } from "@/graphql/generated/schema";
import { useRouter } from "next/router";
import { useState } from "react";
import { Pagination, Spin } from "antd";
import CardSkeleton from "./TaskSkeleton";



const Tasks = () => {
  const router = useRouter()
  const [limit, setlimit] = useState(25)
  const [skip, setskip] = useState(0)
  const { data: tasks, loading } = useTasksWithoutrelationalDataQuery({
    variables: {
      take: limit,
      skip: skip * limit,
      where: {
        categoryId: {
          equals: router.query.category as string
        },
          name:{
    contains: router.query.search as string , 
    mode:QueryMode.Insensitive

  },




      }
    }
  })
  const { data: total, refetch: refetchTotal, loading: loadingAgregete } = useAggregateTaskQuery({
    variables: {

      where: {
        categoryId: {
          equals: router.query.category as string
        },
       
                  name:{
            contains: router.query.search as string,
            mode:QueryMode.Insensitive
          },
     
        
      
      
      
      
      }
    }
  })

  return (
    <Spin spinning={loading}>

      <Grid container spacing={3} >
       

        {
          !loading ? <>
            {tasks?.getUserTasks?.map((task, i) => (
              <Grid item xs={12} sm={6} lg={4} key={task.id}>
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

                      <Grid display={'flex'}  justifyContent={'flex-start'} item xs={12} sm={12} lg={12} key={i}>
                        {
                          task.tags.map((tag, index) => (

                            <Chip key={index} style={{
                              marginRight: 5,
                              backgroundColor: task?.category?.colour,
                              color:"#fff"
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
            {[...Array(25)].map((_, index) => (
              <CardSkeleton key={index} />
            ))}

          </>
        }
        {
           !loadingAgregete&&  total?.aggregateTask?._count?._all && total?.aggregateTask?._count?._all>0 ? null:    <Grid item md={12} >


           <Box height={'100vh'} display={'flex'} alignContent={'center'} alignItems={'center'} justifyContent={'center'}>
<Typography variant="h1" textAlign={'center'}>
 No Tasks Found
</Typography>
             
           </Box>
                         </Grid>
            
        }                        

        
     
{
  total?.aggregateTask?._count?._all && total?.aggregateTask?._count?._all>0 ?
   <Grid item xs={12} sm={12} lg={12}>

  <Box pb={2} mt={2} display={'flex'} alignItems={'center'} justifyContent={'center'}>

    <Pagination current={skip + 1} onShowSizeChange={(current, size) => setlimit(size)} onChange={(pageNumber) => {
      if (pageNumber > 1) {
        router.push({
          query: {
            ...router.query,
            page: pageNumber
          }
        })

      } else {
        delete router.query['page']
        router.push({
          query: {
            ...router.query
          }
        })
      }
      setskip(pageNumber - 1)

    }} total={total?.aggregateTask._count?._all} pageSize={limit} />
  </Box>
</Grid>:null
}
      


      </Grid>

    </Spin>
  );
};

export default Tasks;
