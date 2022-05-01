import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};





export default function MessMenu() {
  const [open, setOpen] = React.useState(false);
  const [day, setDay] = React.useState(0);

  const handleOpen = (d) => {
    setOpen(true);
    setDay(d);
  };
  const handleClose = () => {
    setOpen(false);
    setDay(0);
  };

  const DineM = [
    {
      Bf : "Boiled Eggs1",
      L : "Kali Masoor",
      D : "Paneer"
    },
    {
      Bf : "Poori",
      L : "rajma", 
      D : "urad"
    },
    {
      Bf : "Pasta",
      L : "Chole",
      D : "Egg Bhurji"
    },
    {
      Bf : "Kachodi",
      L : "Kadhi", 
      D : "Gulab Jamun"
    },
    {
      Bf : "Omelette",
      L : "Sambar",
      D : "Channa"
    },
    {
      Bf : "Aloo Parantha",
      L : "rajma", 
      D : "Urad"
    },
    {
      Bf : "Samosa",
      L : "Veg Pulao",
      D : "Chane"
    }
  ]
  
  const [dine,setDine] = useState(DineM[0])

  function ChildModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <React.Fragment>
        <Button onClick={handleOpen}>Breakfast</Button>
        <Modal
          hideBackdrop
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style, width: 200 }}>
            {DineM[day].Bf}
            <Button onClick={handleClose}>Close Child Modal</Button>
          </Box>
        </Modal>
      </React.Fragment>
    );
  }
  
  function ChildModalL() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <React.Fragment>
        <Button onClick={handleOpen}>Lunch</Button>
        <Modal
          hideBackdrop
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style, width: 200 }}>
            {DineM[day].L}
            <Button onClick={handleClose}>Close Child Modal</Button>
          </Box>
        </Modal>
      </React.Fragment>
    );
  }
  
  function ChildModalD() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <React.Fragment>
        <Button onClick={handleOpen}>Dinner</Button>
        <Modal
          hideBackdrop
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style, width: 200 }}>
            {DineM[day].D}
            <Button onClick={handleClose}>Close Child Modal</Button>
          </Box>
        </Modal>
      </React.Fragment>
    );
  }

  return (
    <div>
    <Link className='anchor' to="/">Go Back</Link>
      <h3>Mess Menu</h3>
      <br/>
      <div className='mess'>
      <Button onClick={()=>handleOpen(0)}>Monday</Button>
      <br/>
      <br/>
      <Button onClick={()=>handleOpen(1)}>Tuesday</Button>
      <br/>
      <br/>
      <Button onClick={()=>handleOpen(2)}>Wednesday</Button>
      <br/>
      <br/>
      <Button onClick={()=>handleOpen(3)}>Thursday</Button>
      <br/>
      <br/>
      <Button onClick={()=>handleOpen(4)}>Friday</Button>
      <br/>
      <br/>
      <Button onClick={()=>handleOpen(5)}>Saturday</Button>
      <br/>
      <br/>
      <Button onClick={()=>handleOpen(6)}>Sunday</Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 100 }}>
          <ChildModal />
          <br/>
          <br/>
          <ChildModalL />
          <br/>
          <br/>
          <ChildModalD />
        </Box>
      </Modal>
    </div>
  );
}
