import { useState } from 'react';
import { Card, CardContent, Typography, CardMedia, Button, Box } from '@mui/material';
import team from '../data/team_members';

export default function Team() {
  const [currentMemberIndex, setCurrentMemberIndex] = useState(0);

  const gotonext = () => {
    setCurrentMemberIndex((prevIndex) => 
      prevIndex < team.length - 1 ? prevIndex + 1 : 0
    );
  };
  const currentMember = team[currentMemberIndex];
  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      justifyContent="center" 
      minHeight="100vh" 
      p={3}
    >
      <Typography variant="h1" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
        Meet Our Team
      </Typography>
      
      <Card sx={{ maxWidth: 400, mb: 3 }}>
        <CardMedia
          component="img"
          height="400"
          image={currentMember.image}
          alt={currentMember.name}
        />
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography variant="h6" gutterBottom>
            {currentMember.name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {currentMember.role}
          </Typography>
        </CardContent>
      </Card>

      <Box display="flex" alignItems="center" gap={2}>
        <Button 
          variant="contained" 
          onClick={gotonext}
          sx={{ 
            backgroundColor: '#555555',
            '&:hover': {
              filter: 'brightness(0.9)',
            }
          }}
        >
          Next ➪
        </Button>
      </Box>
    </Box>
  );
}