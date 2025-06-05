import { Container, Typography, Box } from '@mui/material';

export default function Home() {
  return (
    <Container maxWidth="md" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h1" gutterBottom sx={{ fontSize: 'clamp(2.5rem, 1.189rem + 6.0976vw, 5rem) !important' }}> Welcome to Cafe Edinburgh</Typography>        
      <Typography>19 Elm Row, Edinburgh EH7 4AA</Typography>
      <Typography>0131 556 6066</Typography>
      <Typography>edinburghcafe@gmail.com</Typography>
      </Box>
    </Container>
  );
}