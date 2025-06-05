import { AppBar, Toolbar, Button } from '@mui/material';
import { margin } from '@mui/system';
import { Link } from 'react-router-dom';

export default function navigation() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fcfaf5' }}>
        <Link target="_blank" rel="noopener noreferrer" to="/">Home</Link>
        <Link target="_blank" rel="noopener noreferrer" to="/products">Our Selection</Link>
        <Link target="_blank" rel="noopener noreferrer" to="/team">Team</Link>
      </Toolbar>
    </AppBar>
  );
}