import React, { useState, useEffect } from 'react';

const Navbar = ({ onValueChange }) => {
    const [inputValue, setInputValue] = useState('');
    const [screenResolution, setScreenResolution] = useState({ width: 0, height: 0 });
    const [img, setImg] = useState("/burger.png")
    const [open, setOpen] = useState(false)
    const handleSubmit = (e) => {
        console.log(e)
        e.preventDefault(); // Prevent the default form submission behavior
        console.log('Form submitted '+ inputValue);
        const newValue = inputValue;
        onValueChange(newValue);
    }
    const handleChange = (event) => {
        setInputValue(event.target.value);
        console.log(inputValue)
      };
    useEffect(() => {
      const handleResize = () => {
        setScreenResolution({
          width: window.innerWidth,
          height: window.innerHeight
        });
      };
      // Initial screen resolution
      handleResize();
  
      // Add event listener to handle screen resize
      window.addEventListener('resize', handleResize);
  
      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    
    function log(){
        if(open){
            setOpen(false)
            setImg("/burger.png")
        }else{
            setOpen(true)
            setImg("/x.png")
        }
    }
    
    return ( 
        <div className='nav-container'>
        <nav>
            <h1>Home</h1>
            <div className='search'>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name search" onChange={handleChange} />
                    <button type="submit">Submit</button>
                </form>
            </div> 
            { screenResolution.width>1024 && <ul>
                <li> <a> Contact</a> </li>
                <li> <a> About</a> </li>
            </ul> || 
            <>
                <img src={img} alt="Brogis" width={'50px'} onClick={log}/>
            </>}
        
        </nav>
        
        {open && screenResolution.width < 1024 &&
        <div className='burger'>
            <ul>
                <li>Contact</li>
                <li>About</li>
            </ul>
        </div>}
        </div>

     );
}
 
export default Navbar;