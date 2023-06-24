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
  IconAward,
  IconBoxMultiple,
  IconPoint,
  IconAlertCircle,
  IconNotes,
  IconCalendar,
  IconMail,
  IconTicket,
  IconEdit,
  IconGitMerge,
  IconCurrencyDollar,
  IconApps,
  IconFileDescription,
  IconFileDots,
  IconFiles,
  IconBan,
  IconStar,
  IconMoodSmile,
  IconBorderAll,
  IconBorderHorizontal,
  IconBorderInner,
  IconBorderVertical,
  IconBorderTop,
  IconUserCircle,
  IconPackage,
  IconMessage2,
  IconBasket,
  IconChartLine,
  IconChartArcs,
  IconChartCandle,
  IconChartArea,
  IconChartDots,
  IconChartDonut3,
  IconChartRadar,
  IconLogin,
  IconUserPlus,
  IconRotate,
  IconBox,
  IconShoppingCart,
  IconAperture,
  IconLayout,
  IconSettings,
  IconHelp,
  IconZoomCode,
  IconBoxAlignBottom,
  IconBoxAlignLeft,
  IconBorderStyle2,
  IconAppWindow
} from '@tabler/icons-react';

const Menuitems: MenuitemsType[] = [
  {
    navlabel: true,
    subheader: 'Home',
  },

  {
    id: uniqueId(),
    title: 'Tasks',
    icon: IconAperture,
    href: '/',
    // chip: 'New',
    chipColor: 'secondary',
  },
  {
    navlabel: true,
    subheader: 'Product',
  },
  {
    id: uniqueId(),
    title: 'Packs',
    icon: IconShoppingCart,
    href: '/dashboards/ecommerce',
  },
  {
    id: uniqueId(),
    title: 'Addons',
    icon: IconShoppingCart,
    href: '/dashboards/ecommerce',
  },











  






  //These lines commented for examples
  // {
  //   id: uniqueId(),
  //   title: 'Maintenance',
  //   icon: IconSettings,
  //   href: '/auth/maintenance',
  // },
 
  // {
  //   navlabel: true,
  //   subheader: 'Other',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Menu Level',
  //   icon: IconBoxMultiple,
  //   href: '/menulevel/',
  //   children: [
  //     {
  //       id: uniqueId(),
  //       title: 'Level 1',
  //       icon: IconPoint,
  //       href: '/l1',
  //     },
  //     {
  //       id: uniqueId(),
  //       title: 'Level 1.1',
  //       icon: IconPoint,
  //       href: '/l1.1',
  //       children: [
  //         {
  //           id: uniqueId(),
  //           title: 'Level 2',
  //           icon: IconPoint,
  //           href: '/l2',
  //         },
  //         {
  //           id: uniqueId(),
  //           title: 'Level 2.1',
  //           icon: IconPoint,
  //           href: '/l2.1',
  //           children: [
  //             {
  //               id: uniqueId(),
  //               title: 'Level 3',
  //               icon: IconPoint,
  //               href: '/l3',
  //             },
  //             {
  //               id: uniqueId(),
  //               title: 'Level 3.1',
  //               icon: IconPoint,
  //               href: '/l3.1',
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },

];

export default Menuitems;
