import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import Divider from '@mui/material/Divider';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from "react-router-dom";

interface propType {
    name: string,
    items: string[],
}

const FadeMenu: React.FC<propType> = ({name,items})=> {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClick = (item: string) =>{
        handleClose()
        if(['Beginner','Intermediate','Advanced'].includes(item)){
          window.location.href = `/courses/${item.toLowerCase()}`
            // navigate(`/courses/${item.toLowerCase()}`)
        }
  }

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{color: 'black', fontWeight: 'bold'}}
      >
        {name} 
        <ExpandMoreIcon />
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        sx={{boxShadow: 'none'}}
      >
        {items.map((item: string, ind)=><>
            <MenuItem onClick={()=>handleMenuClick(item)}>{item}</MenuItem>
            {ind!=items.length-1 && <Divider sx={{ my: 0.5 }} />}
        </>)}
      </Menu>
    </div>
  );
}

export default FadeMenu