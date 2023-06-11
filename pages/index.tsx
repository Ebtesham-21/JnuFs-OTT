import useCurrentUser from '@/hooks/useCurrentuser';
import { NextPageContext } from 'next';
import {getSession,signOut} from 'next-auth/react';

export async function getServerSideProps(context:NextPageContext) {
  const session = await getSession(context);

  if(!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }
  return{
    props: {}
  }

}

export default function Home() {
  const { } = useCurrentUser();

  return (
    <>
    <h1>NEtFLIX CLONE</h1>
    <button className='h-18 w-full bg-white' onClick={() => signOut()}>LogOut</button>

    </>
  )
}
