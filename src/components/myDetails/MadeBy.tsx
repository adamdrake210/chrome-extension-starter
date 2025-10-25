import { Anchor, Flex, Text } from '@mantine/core';
import { IconHeartFilled } from '@tabler/icons-react';
import { myDetailsConfig } from './config';

export const MadeBy = () => {
  return (
    <Flex justify="center" align="center" gap={4} w="100%">
      <Text size="xs" c="dark.4" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        Made with <IconHeartFilled size={14} /> by{' '}
      </Text>
      <Anchor
        c="dark.8"
        fw={500}
        fz={12}
        href={myDetailsConfig.madeByUrl}
        td="underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {myDetailsConfig.madeByName}
      </Anchor>
    </Flex>
  );
};
