import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import SelectUnstyled, { selectUnstyledClasses } from '@mui/base/SelectUnstyled';
import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import { styled } from '@mui/system';

function Teachers() {

  const blue = {
    100: '#DAECFF',
    200: '#99CCF3',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
  };
  
  const grey = {
    50: '#F3F6F9',
    100: '#E7EBF0',
    200: '#E0E3E7',
    300: '#CDD2D7',
    400: '#B2BAC2',
    500: '#A0AAB4',
    600: '#6F7E8C',
    700: '#3E5060',
    800: '#2D3843',
    900: '#1A2027',
  };
  
  const StyledButton = styled('button')(
    ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    min-height: calc(1.5em + 22px);
    min-width: 320px;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
    border-radius: 0.75em;
    margin: 0.5em;
    padding: 10px;
    text-align: left;
    line-height: 1.5;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  
    &:hover {
      background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
      border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
    }
  
    &.${selectUnstyledClasses.focusVisible} {
      outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[100]};
    }
  
    &.${selectUnstyledClasses.expanded} {
      &::after {
        content: '▴';
      }
    }
  
    &::after {
      content: '▾';
      float: right;
    }
    `,
  );
  
  const StyledListbox = styled('ul')(
    ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    padding: 5px;
    margin: 10px 0;
    min-width: 320px;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
    border-radius: 0.75em;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    overflow: auto;
    outline: 0px;
    `,
  );
  
  const StyledOption = styled(OptionUnstyled)(
    ({ theme }) => `
    list-style: none;
    padding: 8px;
    border-radius: 0.45em;
    cursor: default;
  
    &:last-of-type {
      border-bottom: none;
    }
  
    &.${optionUnstyledClasses.selected} {
      background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
      color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
    }
  
    &.${optionUnstyledClasses.highlighted} {
      background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    }
  
    &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
      background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
      color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
    }
  
    &.${optionUnstyledClasses.disabled} {
      color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
    }
  
    &:hover:not(.${optionUnstyledClasses.disabled}) {
      background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    }
    `,
  );
  
  const StyledPopper = styled(PopperUnstyled)`
    z-index: 1;
  `;
  
  const Paragraph = styled('p')(
    ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    margin: 10px 0;
    color: ${theme.palette.mode === 'dark' ? grey[400] : grey[700]};
    `,
  );
  
  const Pre = styled('pre')(
    ({ theme }) => `
    font-family: monospace;
    font-size: 0.875rem;
    margin: 0px;
    padding: 5px 10px;
    border-radius: 10px;
    background-color: ${
      theme.palette.mode === 'dark' ? 'rgba(0, 30, 60, 0.5)' : grey[50]
    };
    color: ${theme.palette.mode === 'dark' ? grey[400] : grey[700]};
    `,
  );
  
  function CustomSelect(props) {
    const components = {
      Root: StyledButton,
      Listbox: StyledListbox,
      Popper: StyledPopper,
      ...props.components,
    };
  
    return <SelectUnstyled {...props} components={components} />;
  }
  
  CustomSelect.propTypes = {
    /**
     * The components used for each slot inside the Select.
     * Either a string to use a HTML element or a component.
     * @default {}
     */
    components: PropTypes.shape({
      Listbox: PropTypes.elementType,
      Popper: PropTypes.func,
      Root: PropTypes.elementType,
    }),
  };

const Profdata = [
  {name:"Dr. Ruchi Verma",
   photo: require('./ruchi_cse.jpg'),
   time: "3-5"
  }, 
  {name:"Dr. Amit Kumar",
  photo: require('./amitkumar_CSE.jpg'),
  time: "3-5"
 }, 
 {name:"Dr. Himanshu Jindal",
 photo: require('./himanshujindal_cse.jpg'),
 time: "3-5"
},
{
  name: "Dr. Vivek Kumar Sehgal",
  photo: require('./images/teachers/vs.jpg'),
  time: "3-5"
},
{
  name: "Dr. Pradeep Kumar",
  photo: require('./images/teachers/pk.jpg'),
  time: "3-5"
},
{
  name: "Dr. Pradeep Kumar Gupta",
  photo: require('./images/teachers/pkg.jpg'),
  time: "3-5"
},
{
  name: "Dr. Rajni Mohana",
  photo: require('./images/teachers/raj.jpg'),
  time: "3-5"
},
{
  name: "Dr. Ravindara Bhatt",
  photo: require('./images/teachers/rb.jpg'),
  time: "3-5"
},
{
  name: "Dr. Yugal Kumar",
  photo: require('./images/teachers/yugal.jpg'),
  time: "3-5"
},
{
  name: "Dr. Aman Sharma",
  photo: require('./images/teachers/aman.jpg'),
  time: "3-5"
},
{
  name: "Dr. Amol Vasudeva",
  photo: require('./images/teachers/amol.jpg'),
  time: "3-5"
},
{
  name: "Dr. Deepak Gupta",
  photo: require('./images/teachers/deepak.jpg'),
  time: "3-5"
},
{
  name: "Dr. Hari Singh",
  photo: require('./images/teachers/hari.jpg'),
  time: "3-5"
},
{
  name: "Dr. Jagpreet Sidhu",
  photo: require('./images/teachers/jag.jpg'),
  time: "3-5"
},
{
  name: "Dr. Monika Bharti",
  photo: require('./images/teachers/monika.jpg'),
  time: "3-5"
},
{
  name: "Dr. Rajinder Sandhu",
  photo: require('./images/teachers/rajsandhu.jpg'),
  time:"3-5"
},
{
  name: "Dr. Rakesh Kanji",
  photo: require('./images/teachers/kanji.jpg'),
  time:"3-5"
},
{
  name: "Dr. Pankaj Dhiman",
  photo: require('./images/teachers/pd.jpg'),
  time:"3-5"
},
{
  name: "Dr. Vipul Kumar Sharma",
  photo: require('./images/teachers/vipul.jpg'),
  time:"3-5"
},
{
  name: "Dr. Arvind Kumar",
  photo: require('./images/teachers/Arvind.jpg'),
  time:"3-5"
},
{
  name: "Dr. Prateek Thakral",
  photo: require('./images/teachers/prateek_cse.jpg'),
  time:"3-5"
},
{
  name: "Dr. Surjeet Singh",
  photo: require('./images/teachers/surjeetsingh_cse.jpg'),
  time:"3-5"
},
{
  name: "Dr. Praveen Modi",
  photo: require('./images/teachers/PraveenModi_CSE.jpg'),
  time:"3-5"
}
]

const [prof,setProf] = useState(Profdata[0])

  return (
    <div style={{'text-align':'center'}}>
    <Link className='anchor' to="/">Go Back</Link>
      <h3>Teachers</h3>
      <CustomSelect value={prof} onChange={setProf}>
        {Profdata.map((c) => (
          <StyledOption key={c.name} value={c}>
            {c.name}
          </StyledOption>
        ))}
      </CustomSelect>

      
      <h3 className='content'>{prof.name}</h3>
      <img className='prof_img' src={prof.photo}></img>
      <pre className='content'>{prof.time}</pre>

      {/* <Pre>{JSON.stringify(prof, null, 2)}</Pre> */}
    </div>
  )
}

export default Teachers