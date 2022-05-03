import React,{useState} from 'react'
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
      Bf : "Boiled Eggs, Bread Pakora/Bread Roll, Dalia, Cold Coffe ",
      L : "Dal Masoor Sabut, Matar Paneer, Bundi Raita, Apple/Mango",
      D : "Mix Veg, Dal Makhani, Ice Cream"
    },
    {
      Bf : "Poori, Aloo Sabji, Cornflakes, Sprouts, Tea, Milk",
      L : "Lauki Tamatar, Rajma Masala, Plain Curd, Banana", 
      D : "Paneer Bhurji, Dal Urad Channa, Fruit Custard"
    },
    {
      Bf : "Pasta, Poha, Dalia, Tea",
      L : "Chole Bhature, Dahi Vada",
      D : "Egg Bhurji/Curry, Aloo Matar, Dal Sabut Moong, Ice Cream"
    },
    {
      Bf : "Kachodi Dal/Matar, Aloo Sabji, Sprouts, Tea",
      L : "Kadhi Pakora, Aloo Jeera, Banana, (Plain Rice and Arhar Dal for Bhutanese Students) ", 
      D : "Shahi Paneer, Dal Urad Dhulli, Gulab Jamun"
    },
    {
      Bf : "Omelette, Aloo/Veg Sandwich, Cold Coffee",
      L : "Aloo Matar, Sambar, Bundi Raita, Missi Roti, WaterMelon",
      D : "Kala Channa, Kathal/Karela, Sewaiyn"
    },
    {
      Bf : "Aloo Parantha, Plain Curd, Pickle, Sprouts, Tea",
      L : "Aloo Gazar Matar, Rajma, Lassi, Banana", 
      D : "Veg Kofta/Dum Aloo, Dal Channa Urad, Fruit Cream"
    },
    {
      Bf : "Samosa/Veg Cutlet, Cornflakes, Tea, Milk",
      L : "Veg Pulao, Paneer Onion Parantha, Veg Biryani, Pickle, Plain Curd, Papad",
      D : "Masala Bhindi, Chana Masala, Rice kheer"
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
            <br />
            <br />
            <t />
            <Button onClick={handleClose}>close</Button>
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
            <br />
            <br />
            <t />
            <Button onClick={handleClose}>close</Button>
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
            <br />
            <br />
            <t />
            <Button onClick={handleClose}>close</Button>
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
      <Button onClick={()=>handleOpen(0)} className='mess-options'>Monday</Button>
      <br/>
      <br/>
      <Button onClick={()=>handleOpen(1)} className='mess-options'>Tuesday</Button>
      <br/>
      <br/>
      <Button onClick={()=>handleOpen(2)} className='mess-options'>Wednesday</Button>
      <br/>
      <br/>
      <Button onClick={()=>handleOpen(3)} className='mess-options'>Thursday</Button>
      <br/>
      <br/>
      <Button onClick={()=>handleOpen(4)} className='mess-options'>Friday</Button>
      <br/>
      <br/>
      <Button onClick={()=>handleOpen(5)} className='mess-options'>Saturday</Button>
      <br/>
      <br/>
      <Button onClick={()=>handleOpen(6)} className='mess-options'>Sunday</Button>
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
