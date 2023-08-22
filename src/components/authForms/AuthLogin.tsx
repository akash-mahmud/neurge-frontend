import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  Stack,
  Divider,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Icon,
} from "@mui/material";
import Link from "next/link";
import { loginType } from "../../../src/types/auth/auth";

import { Spin, notification } from 'antd';

import { useState } from "react";
import { LoginMutationVariables } from "@/graphql/generated/schema";
import { useDispatch, useSelector } from "@/store";
import { login } from "@/store/slices/auth/authSlice";
import { useRouter } from "next/router";
import CustomCheckbox from "../forms/theme-elements/CustomCheckbox";
import CustomFormLabel from "../forms/theme-elements/CustomFormLabel";
import CustomTextField from "../forms/theme-elements/CustomTextField";
import { VisibilityOff, Visibility, AlternateEmail } from "@mui/icons-material";

const AuthLogin = ({ title, subtitle, subtext }: loginType) => {
  const [input, setinput] = useState<LoginMutationVariables>({
    email: '',
    password: ''
  }) 
  const dispatch = useDispatch()
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setinput({
      ...input, [e.target.name]: e.target.value
    })
  }
  const [loading, setloading] = useState(false)
  const { isAuthenticated, error, isError, user } = useSelector((store) => store.auth)
  const router = useRouter()
  // const onSubmit = async () => {
  //   setloading(true)
  //   try {
  //     const result = await dispatch(login(input))
  //     notification.success({
  //       message: 'Logged in'
  //     })
  //     router.push('/')

  //   } catch (error: any) {
  //     notification.error({
  //       message: error.message
  //     })
  //   }

  //   setloading(false)

  // }
  const onSubmit = async () => {
    setloading(true)
    try {
      const result = await dispatch(login(input))
      // console.log(result);
      // @ts-ignore
      
      if(result?.payload?.login?.isAuthenticated){
        notification.success({
          message: 'Logged in',
          style: {
            marginBottom:'unset', 
            paddingBottom:10
          }
        })
        router.push('/')
      }
      else{
        // console.log(result.payload.message as string);
        
// notification.error({
//   message:result.payload as string
// })
notification.error({
  // @ts-ignore
  message:result?.payload?.message as string ,
  style: {
    marginBottom:'unset', 
    paddingBottom:10
  }
})
      }
 

    } catch (error: any) {
      
      notification.error({
        message: error.message,
        style: {
          marginBottom:'unset', 
          paddingBottom:10
        }
      })
    }

    setloading(false)

  }
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <>
      <Spin spinning={loading}>

        {title ? (
          <Typography fontWeight="700" variant="h3" mb={1}>
            {title}
          </Typography>
        ) : null}

        {subtext}


        {/* <Box mt={3}>
          <Divider>

          </Divider>
        </Box> */}

        <Stack>
          <Box>
            <CustomFormLabel htmlFor="username">Email</CustomFormLabel>
            <OutlinedInput name="email" id="username"  endAdornment={
            <InputAdornment position="end">
               <IconButton
                aria-label="toggle password visibility"
               
                // onMouseDown={handleMouseDownPassword}
                edge="end"
              >
              <AlternateEmail  style={{
                  color:'#D6E4FF'
                }}/>
              </IconButton>
           {/* <Typography color={'#D6E4FF'} variant="h5">@</Typography> */}
            </InputAdornment>
          }  autoComplete={'off'} fullWidth onChange={onChange} />
          </Box>
          <Box>
            <CustomFormLabel htmlFor="password">Password</CustomFormLabel>
            <OutlinedInput           type={showPassword ? "text" : "password"}
 endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                // onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff style={{
                  color:'#D6E4FF'
                }} /> : <Visibility  style={{
                  color:'#D6E4FF'
                }}/>}
              </IconButton>
            </InputAdornment>
          } autoComplete={'new-password'} onChange={onChange}
              id="password"
              // variant="outlined"
              fullWidth
              name="password"
            />
          </Box>
          <Stack
            justifyContent="space-between"
            direction="row"
            alignItems="center"
            my={2}
          >
            <FormGroup>
              <FormControlLabel
                control={<CustomCheckbox defaultChecked />}
                label="Remeber this Device"
              />
            </FormGroup>
            <Typography
              // component={Link}
              // href="/auth/forgot-password"
              fontWeight="500"
              sx={{
                textDecoration: "none",
                color: "primary.main",
              }}
            >
              Forgot Password ?
            </Typography>
          </Stack>
        </Stack>
        <Box>
          <Button onClick={onSubmit}
            color="primary"
            variant="contained"
            size="large"
            fullWidth
            type="button"
          
          >
            <Typography fontWeight={'bold'}>
                          Sign In

            </Typography>
          </Button>
        </Box>
        {/* {subtitle} */}
      </Spin>

    </>
  )
};

export default AuthLogin;
