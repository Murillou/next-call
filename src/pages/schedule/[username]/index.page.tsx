import Image from 'next/image';
import { Container, UserHeader } from './styles';
import { Heading, Text } from '@ignite-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { prisma } from '@/lib/prisma';
import { ScheduleForm } from './ScheduleForm';
import { NextSeo } from 'next-seo';

interface ScheduleProps {
  user: {
    fullName: string;
    bio: string;
    avatarUrl: string;
  };
}

export default function Schedule({ user }: ScheduleProps) {
  return (
    <>
      <NextSeo title={`Agendar com ${user.fullName} | Next Call`} />

      <Container>
        <UserHeader>
          <Image src={user.avatarUrl} width={64} height={64} alt="" />
          <Heading>{user.fullName}</Heading>
          <Text>{user.bio}</Text>
        </UserHeader>

        <ScheduleForm />
      </Container>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const username = String(params?.username);

  const user = await prisma.user.findUnique({
    where: { username },
  });

  if (!user) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      user: {
        fullName: user.fullName,
        bio: user.bio,
        avatarUrl: user.avatar_url,
      },
    },
    revalidate: 60 * 60 * 24, // 1 day
  };
};
