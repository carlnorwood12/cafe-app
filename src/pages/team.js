import { Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';
import team from '../data/team_members';

export default function Team() {
  return (
    <Grid container spacing={3} p={3} justifyContent="center" minHeight="100vh">
      {team.map(member => (
        <Grid item xs={12} sm={6} md={4} key={member.id}>
            <Card class="team-card">
            <CardMedia
              component="img"
              height="400"
              image={member.image}
              alt=" "
            />
            <CardContent>
              <Typography variant="h6">{member.name}</Typography>
              <Typography>{member.role}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
