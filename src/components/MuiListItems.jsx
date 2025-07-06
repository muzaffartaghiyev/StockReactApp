import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import StoreIcon from '@mui/icons-material/Store';
import StarsIcon from '@mui/icons-material/Stars';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import { useNavigate } from "react-router-dom";

const links = [
    {
        title:"Dashboard",
        url:"/stock/",
        icon:<SpaceDashboardIcon />,
    },
    {
        title:"Purchases",
        url:"/stock/purchases",
        icon:<ShoppingCartIcon/>,
    },
    {
        title:"Sales",
        url:"/stock/sales",
        icon:<AttachMoneyIcon/>,
    },
    {
        title:"Firms",
        url:"/stock/firms",
        icon:<StoreIcon/>,
    },
    {
        title:"Brands",
        url:"/stock/brands",
        icon:<StarsIcon/>,
    },
    {
        title:"Products",
        url:"/stock/products",
        icon:<Inventory2Icon/>,
    }
]

const MuiListItems = () => {

    const navigate = useNavigate()
  return (
    <div>
      <Toolbar />
      <List>
        {links.map((link, index) => (
          <ListItem key={index} disablePadding sx={{
            transition: "color 0.3s ease",
                "&:hover": {
            color: "red",
            "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
            color: "red",
            },
          },
        }}>
            <ListItemButton onClick={()=>navigate(link.url)} >
              <ListItemIcon >
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                {link.icon}

              </ListItemIcon>
              <ListItemText primary={link.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default MuiListItems
