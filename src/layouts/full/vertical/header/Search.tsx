import { useState } from 'react';
import {
  IconButton,
  Dialog,
  DialogContent,
  Stack,
  Divider,
  Box,
  List,
  ListItemText,
  Typography,
  TextField,
  ListItemButton,
} from '@mui/material';
import { IconSearch, IconX } from '@tabler/icons-react';
import Menuitems from '../sidebar/MenuItems';
import Link from 'next/link';
import { Input } from 'antd';
import { useRouter } from 'next/router';

interface menuType {
  title: string;
  id: string;
  subheader: string;
  children: menuType[];
  href: string;
}

const Search = () => {
  const router = useRouter()
  const [isSearching, setIsSearching] = useState(router.query?.search?true:false);
  const [searchQuery, setSearchQuery] = useState(router.query?.search);

  const handleSearchClick = () => {
    setIsSearching(true);
  };

  const handleSearchChange = (e:any) => {
    if(e.target.value){
      setSearchQuery(e.target.value);

    }else{
delete router.query?.search
router.push({
  query:{
    ...router.query
  }
})
    }
  };

  const handleSearchSubmit = () => {
    
    if(router.pathname=="/"){
      router.push({
        query:{
          ...router.query,
          search: searchQuery
        }
      })
    }else{
      router.push(`/?search=${searchQuery}`)
    }





  };
  if (isSearching) {
    return (
      <div>
        <Input.Search 
        allowClear
        onSearch={handleSearchSubmit}
        onPressEnter={handleSearchSubmit}

          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />

      </div>
    );
  } else {
    return (
      <IconButton
        aria-label="show 4 new mails"
        color="inherit"
        aria-controls="search-menu"
        aria-haspopup="true"
        onClick={handleSearchClick}
        size="large"
      >
        <IconSearch size="16" />
      </IconButton>
    );
  }
};




export default Search;
