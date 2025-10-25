import { Card, Flex } from '@mantine/core';
import { BuyMeACoffeeButton } from './BuyMeACoffeeButton';
import { MadeBy } from './MadeBy';

export const MyDetails = () => {
  return (
    <Flex justify="flex-end" align="center" p="md">
      <Card
        withBorder
        radius="lg"
        shadow="lg"
        p={8}
        px={16}
        bg="white"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <BuyMeACoffeeButton />
        <MadeBy />
      </Card>
    </Flex>
  );
};
