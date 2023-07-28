import { uniqueId } from 'lodash';

interface MenuitemsType {
  [x: string]: any;
  id?: string;
  navlabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: any;
  href?: string;
  children?: MenuitemsType[];
  chip?: string;
  chipColor?: string;
  variant?: string;
  external?: boolean;
}
import {

  IconShoppingCart,
  IconAperture,

} from '@tabler/icons-react';
import { AddOutlined, Help, Settings } from '@mui/icons-material';

const Menuitems: MenuitemsType[] = [
  // {
  //   navlabel: true,
  //   subheader: 'Home',
  // },

  {
    id: uniqueId(),
    title: 'Tasks',
    icon: IconAperture,
    href: '/',
    // chip: 'New',
    chipColor: 'secondary',
  },
  // {
  //   navlabel: true,
  //   subheader: 'Product',
  // },
  {
    id: uniqueId(),
    title: 'Prompt Packs',
    chip: '13',
    chipColor: 'secondary',
    icon: IconShoppingCart,
    href: '/products',
  },
  {
    id: uniqueId(),
    title: 'Addons',
    chip: '7',
    chipColor: 'secondary',
    icon: AddOutlined,
    href: '/addons',
  },











];



export default Menuitems;
