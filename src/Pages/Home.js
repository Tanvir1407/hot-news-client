import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummeryCard from './Sheared/NewsSummeryCard';

const Home = () => {
        const news = useLoaderData();
    return (
        <div>
            {news.map(singleNews => <NewsSummeryCard news={singleNews}></NewsSummeryCard>)}
        </div>
    );
};

export default Home;