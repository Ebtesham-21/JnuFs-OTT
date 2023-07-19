import React from 'react';
import useMovie from '@/hooks/useMovie';
import { useRouter } from 'next/router';
import { AiOutlineArrowLeft } from 'react-icons/ai';


const Watch = () => {
    const router = useRouter();
    const {movieId} = router.query;

    const {data} = useMovie(movieId as string );

    return (
        <div className='h-screen w-screen bg-black'>
            <nav className='fixed 
            w-full
            p-4
            z-10
            flex
            flex-row
            items-center
            gap-8
            bg-black
            bg-opacity-70

            '>
                <AiOutlineArrowLeft onClick={() => router.push('/')} className='text-white cursor-pointer ' size={40}/>
                <p className='text-white text-1xl md:text-3xl font-bold'>
                    <span className='font-light'>
                        Watching:
                    </span>
                    {data?.title}
                </p>


            </nav>
            <video
            src={data?.videoUrl}
            autoPlay
            controls
            className='h-full w-full'
             >

            </video>
            {/* <iframe src="https://player.vimeo.com/video/796058029?h=81e7ab4435"   allow="autoplay; fullscreen; picture-in-picture" ></iframe> */}

            {/* <iframe src={data?.videoUrl} width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"></iframe> */}
        </div>
    )
}

export default Watch;