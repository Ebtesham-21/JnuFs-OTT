import Billboard from '@/components/Billboard';
import MovieList from '@/components/MovieList';
import Navbar from '@/components/Navbar';
import InfoModal from '@/components/infoModal';
import useCurrentUser from '@/hooks/useCurrentuser';
import useFavorites from '@/hooks/useFavorites';
import useMovieList from '@/hooks/useMovieList';
import useInfoModal from '@/hooks/useinfoModal';
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
  const { data: movies = [] } = useMovieList();
  const {data: favorites = [] } = useFavorites();
  const {isOpen, closeModal} = useInfoModal();
 


  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal}/>
      <Navbar />
      <Billboard/>
    
      <div className='pb-40'>
       <MovieList title='Trending Now' data={movies} />
       <MovieList title='My List' data={favorites} />
      </div>
      <div>
      <iframe src="https://player.vimeo.com/video/796058029?h=81e7ab4435"  allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

      </div>
      

   
    
    

    </>
  )
}
