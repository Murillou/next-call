import Image from 'next/image';
import { Container, UserHeader } from './styles';
import { Heading, Text } from '@ignite-ui/react';

export default function Schedule() {
  return (
    <Container>
      <UserHeader>
        <Image
          src="https://lh3.googleusercontent.com/a/ACg8ocJ_x484IoYuX1L75HorM81trlltGm_iIR8yr8fBZXreH6isWYU=s96-c"
          width={64}
          height={64}
          alt=""
        />
        <Heading>Murillo Vinícius</Heading>
        <Text>Dev Web Front-end </Text>
      </UserHeader>
    </Container>
  );
}
