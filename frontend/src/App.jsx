import { useEffect } from 'react';
// import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import NavBar from './components/navBar/navBar.jsx';
import { Container } from '@mui/material';
import useStore from './store/store.js';

function App() {
  const fetchUsers = useStore((state) => state.fetchUsers);
  const users = useStore((state) => state.users);

  console.log(users.length)
  

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <Container maxWidth="sm">
      <NavBar />
      <Box sx={{ mt: 10 }}>
      </Box>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    
      <Box sx={{ my: 2 }}>
      </Box>
    </Container>
  )
}

export default App
