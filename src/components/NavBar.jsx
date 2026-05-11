import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Logo from "../assets/virtual-design-logo.png";
import { IoIosMore } from "react-icons/io";

const drawerWidth = 240;

// 1. EXTRAEMOS setPage DE LAS PROPS AQUÍ
function NavBar({ setPage, ...props }) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      {/* 2. HACEMOS QUE EL LOGO VUELVA AL HOME */}
      <img
        src={Logo}
        className="max-w-[15rem] cursor-pointer"
        alt="logo"
        onClick={() => setPage('home')}
      />
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }} onClick={() => setPage('home')}>
            <ListItemText primary="Home" className="text-black!" />
          </ListItemButton>
        </ListItem>

        {/* 3. TAMBIÉN AÑADIMOS setPage EN EL MENÚ MÓVIL */}
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }} onClick={() => setPage('community')}>
            <ListItemText primary="Community" className="text-black!" />
          </ListItemButton>
        </ListItem>
        
        {/* ... Resto de los items del Drawer ... */}
        <ListItem disablePadding>
           <ListItemButton sx={{ textAlign: 'center' }}>
             <ListItemText primary="Support" className="text-black!" />
           </ListItemButton>
         </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" className="bg-slate-50! shadow-none! p-1! border-b-1 border-slate-200">
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
            className="text-[#85cf67]!"
          >
            <MenuIcon />
          </IconButton>
          
          {/* 4. EL LOGO PRINCIPAL TAMBIÉN REGRESA AL HOME */}
          <img
            src={Logo}
            className="max-w-[15rem] cursor-pointer"
            alt="logo"
            onClick={() => setPage('home')}
          />

          <Box sx={{ display: { xs: 'none', sm: 'block' } }} className="ml-8!">
            <Button className="text-black! capitalize! ml-1! md:ml-3! lg:ml-5! hidden! sm:inline-flex!">
              More Tools
            </Button>

            <Button className="text-black! capitalize! ml-1! md:ml-3! lg:ml-5! hidden! md:inline-flex!">
              Support
            </Button>

            {/* AQUÍ YA TENÍAS EL setPage, AHORA SÍ FUNCIONARÁ PORQUE LO RECIBIMOS ARRIBA */}
            <Button 
              onClick={() => setPage('community')}
              className="text-black! capitalize! ml-1! md:ml-3! lg:ml-5! hidden! lg:inline-flex!"
            >
              Community
            </Button>

            <Button className="text-black! capitalize! ml-1! md:ml-3! lg:ml-5! hidden! lg:inline-flex!">
              Prices
            </Button>

            <Button className="text-black! capitalize! ml-1! md:ml-3! lg:ml-5! inline-flex! lg:hidden!">
              <IoIosMore />
            </Button>
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }} className="ml-auto!">
            <Button className="bg-[#85cf67]! text-white! capitalize! mr-3! rounded-3xl!">
              Sign up
            </Button>

            <Button className="border! border-[#85cf67]! text-black! capitalize! rounded-3xl!">
              Log in
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

NavBar.propTypes = {
  window: PropTypes.func,
  setPage: PropTypes.func, // Añadido a las propTypes por buena práctica
};

export default NavBar;