import { IconCoffee } from '@tabler/icons-react';
import { RainbowButton } from '../ui/rainbow-button';
import { myDetailsConfig } from './config';

export const BuyMeACoffeeButton = () => {
  return (
    <RainbowButton
      leftSection={<IconCoffee size={16} />}
      px={16}
      w={160}
      onClick={() => {
        window.open(myDetailsConfig.buyMeACoffeeUrl, '_blank');
      }}
    >
      Buy Me a Coffee
    </RainbowButton>
  );
};
