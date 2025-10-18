import { Box, Button, Title } from '@mantine/core';
import { AppProviders } from './AppProviders';

export const App = () => {
  const onClick = () => {
    alert('Hello from popup!');
  };

  return (
    <AppProviders>
      <Box w={300}>
        <Title order={3} mb="md">
          Title Here
        </Title>
        <Button onClick={onClick}>Click Me!</Button>
      </Box>
    </AppProviders>
  );
};
