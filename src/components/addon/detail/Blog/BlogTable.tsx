import {
    Typography,
    Box,

    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
  } from '@mui/material';
  

  import { Stack } from '@mui/system';
import BlankCard from '@/components/shared/BlankCard';

import ParentCardBlog from './ParentCardBlog';
import { useRouter } from 'next/router';
  
  const columns = [
    { id: 'pname', label: 'Title', minWidth: 170 },
    { id: 'category', label: 'category', minWidth: 100 },
 
  ];
  

  

  
  const BlogTable = ({addon}: {
    addon: { __typename?: 'Addon', updatedAt: any, name: string, imoji?: string | null, img: string, id: string, description?: string | null, createdAt: any, addonBlogCategory: Array<{ __typename?: 'AddonBlogCategory', createdAt: any, id: string, name: string, updatedAt: any, _count?: { __typename?: 'AddonBlogCategoryCount', blog: number } | null, blog: Array<{ __typename?: 'Blog', id: string, imoji: string, title: string, createdAt: any, updatedAt: any }> }>, _count?: { __typename?: 'AddonCount', addonBlogCategory: number, blog: number } | null } | undefined
}) => {
    const Capitalize = (str:any) => str.charAt(0).toUpperCase() + str.slice(1);
  const router = useRouter()
  const {id} = router.query
    return (
   
        <ParentCardBlog >
          <BlankCard>
            <TableContainer
              sx={{
                maxHeight: 440,
              }}
            >
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        style={{ minWidth: column.minWidth }}
                      >
                        <Typography variant="h6" fontWeight="500">
                          {column.label}
                        </Typography>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>

                {addon?.addonBlogCategory.map((category) => (
                        <>
                        {
                            category?.blog?.map((blogdetail) => (
                                <TableRow hover key={blogdetail.id}>
                                <TableCell onClick={() => router.push(`/addon/${id}/blog/${blogdetail.id}`)} style={{
                                  cursor:'pointer'
                                }}>
                                  <Stack spacing={2} direction="row" alignItems="center">
                                  
                                    <Box>
                                      <Typography variant="h6">{blogdetail.imoji} {blogdetail.title}</Typography>
                                      
                                    </Box>
                                  </Stack>
                                </TableCell>
                                <TableCell>
                                  <Stack spacing={2} direction="row" alignItems="center">
                                  
                                    <Box>
                                      <Typography variant="h6">{category.name} </Typography>
                                      
                                    </Box>
                                  </Stack>
                                </TableCell>
                                {/* <TableCell>
                                  <Stack spacing={1}>
                                    <Typography color="textSecondary" variant="subtitle2">
                                      Earnings
                                    </Typography>
                                    <Typography variant="h6">${row.earnings}</Typography>
                                  </Stack>
                                </TableCell>
                                <TableCell>
                                  <IconButton>
                                    <IconTrash width={18} />
                                  </IconButton>
                                </TableCell> */}
                              </TableRow>
                            ))
                        }
                        </>
                     
                    ))}

                 
                </TableBody>
              </Table>
            </TableContainer>
          </BlankCard>
  
        </ParentCardBlog>
    );
  };
  
  export default BlogTable;
  