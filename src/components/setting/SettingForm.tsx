import React, { useEffect, useState } from 'react';
import {
  Button,
  FormControlLabel,
  FormControl,
  InputAdornment,
  OutlinedInput,
} from '@mui/material';

import { IconLock, IconUser, IconMail } from '@tabler/icons-react';
import { Stack } from '@mui/system';
import CustomFormLabel from '../forms/theme-elements/CustomFormLabel';
import ParentCard from '../shared/ParentCard';
import { useSelector } from '@/store';
import { UserUpdateInput, useUpdateProfileMutation } from '@/graphql/generated/schema';
import { Spin, notification } from 'antd';

const SettingForm = () => {
  const [state, setInput] = useState<UserUpdateInput>({
    name:{
      set:''
    },
    email: {
      set: '',
    },

  });
  const [passwordInput, setpasswordInput] = useState({
    oldPass:'', 
    newPass:''

  })
const {user} = useSelector((store)=> store.auth)
  const handleChange = (event: any) => {
    setInput({ ...state, [event.target.name]:{
      set:event.target.value
    } });
  };
useEffect(() => {
setInput((previousSate)=>{ return {...previousSate , 
name:{
  set:user?.name
},
email:{
  set:user?.email
}
}})
}, [])
const [ProfileUpdate , {loading}] = useUpdateProfileMutation() 
const updateProfile = async() => {
  try {
    let data
    if (passwordInput.newPass && passwordInput.oldPass) {

   const   res=   await ProfileUpdate({
        variables: {
               input:state,
               newPass: passwordInput.newPass,
               oldPassword:passwordInput.oldPass, 
               email:user?.email as string, 
  updatePass:true
              },
      })
       data = res.data
    }else{

   const   res=   await ProfileUpdate({
    variables: {
           input:state,

           email:user?.email as string, 
updatePass:false
          },
  })
   data = res.data
    }

    if (data?.updateProfile?.message==='success') {
notification.success({
  message: data?.updateProfile?.message,
  style: {
    marginBottom:'unset', 
    paddingBottom:10
  }
})
      
    }else{
      notification.error({
        message: data?.updateProfile?.message,
        style: {
          marginBottom:'unset', 
          paddingBottom:10
        }
      })
    }
  } catch (error:any) {
    notification.error({message:error.message , 
      style: {
        marginBottom:'unset', 
        paddingBottom:10
      }})
  }
}
  return (
    <Spin spinning={loading}>

  <ParentCard>
<div>

      <form>
        <FormControl fullWidth>
          <CustomFormLabel
            sx={{
              mt: 0,
            }}
            htmlFor="name"
          >
            Name
          </CustomFormLabel>
          <OutlinedInput value={state.name?.set} name='name' onChange={handleChange} type='text'
            endAdornment={
              <InputAdornment position="end" >
                <IconUser width={20} />
              </InputAdornment>
            }
            id="name"
            placeholder="name"
            fullWidth
          />
        </FormControl>
        {/* 2 */}
        <FormControl fullWidth>
          <CustomFormLabel htmlFor="mail2-text">Email</CustomFormLabel>
          <OutlinedInput  value={state.email?.set} name='email' onChange={handleChange} type='email' autoComplete='off'
            endAdornment={
              <InputAdornment position="end">
                <IconMail width={20} />
              </InputAdornment>
            }
            id="mail2-text"
            placeholder="Email"
            fullWidth
          />
        </FormControl>
        {/* 3 */}
        <FormControl fullWidth>
          <CustomFormLabel htmlFor="pwd2-text">Old Password</CustomFormLabel>
          <OutlinedInput onChange={(event) => setpasswordInput({
            ...passwordInput,
            oldPass:event.target.value
          })} autoComplete='new-password'
            type="password"
            endAdornment={
              <InputAdornment position="end">
                <IconLock width={20} />
              </InputAdornment>
            }
            id="pwd2-text"
            placeholder="Password"
            fullWidth
          />
        </FormControl>

        <FormControl fullWidth>
          <CustomFormLabel htmlFor="cpwd2-text">New Password</CustomFormLabel>
          <OutlinedInput       onChange={(event) => setpasswordInput({
            ...passwordInput,
            newPass:event.target.value
          })}       type="password"

            endAdornment={
              <InputAdornment position="end">
                <IconLock width={20} />
              </InputAdornment>
            }
            id="cpwd2-text"
            placeholder="Confirm Password"
            fullWidth
          />
        </FormControl>
      
      </form>
       <Stack mt={2} direction="row" spacing={1}>
       <Button
         color="primary"
         variant="contained"
         onClick={updateProfile}
       >
         Submit
       </Button>
    
     </Stack>
</div>
  </ParentCard>
    </Spin>
  );
};

export default SettingForm;
