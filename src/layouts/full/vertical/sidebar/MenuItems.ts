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
  IconBox,

} from '@tabler/icons-react';
import { AddOutlined, Help, HowToVoteRounded, Layers, LayersRounded, LibraryAddRounded, Settings } from '@mui/icons-material';

const Menuitems: MenuitemsType[] = [
  // {
  //   navlabel: true,
  //   subheader: 'Home',
  // },

  {
    id: uniqueId(),
    title: 'Tasks',
    icon: LayersRounded,
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
    chip: '12',
    chipColor: 'secondary',
    icon: HowToVoteRounded,
    href: '/products',
  },
  {
    id: uniqueId(),
    title: 'Addons',
    chip: '2',
    chipColor: 'secondary',
    icon: LibraryAddRounded,
    href: '/addons',
  },











];



export default Menuitems;
