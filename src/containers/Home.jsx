import React from 'react'
import { Helmet } from 'react-helmet';
import Products from '../components/Products';
import initialState from '../initialState';

const Home = () => {
    return (
        <React.Fragment>
            <Helmet>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:site" content="@EyeKeyen"/>
                <meta name="twitter:creator" content="@EyeKeyen"/>
                <meta name="twitter:title" content="Platzi Conf Store"/>
                <meta name="twitter:description" content="Platzi Conf Store"/>
                <meta
                    name="twitter:image"
                    content="https://pbs.twimg.com/profile_images/1082796929384415235/N1YCFrXI_400x400.jpg"
                />
                <meta property="og:title" content="Platzi Conf Store"/>
                <meta property="og:description" content="Platzi Conf Store"/>
                <meta
                    property="og:image"
                    content="https://pbs.twimg.com/profile_images/1082796929384415235/N1YCFrXI_400x400.jpg"
                />
                <meta property="og:url" content="platzistore.xyz" />
                <meta property="og:site_name" content="Platzi Conf Store" />
                <meta property="og:locale" content="es_ES" />
                <meta property="og:type" content="article" />
                <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
                <title>Platzi Conf Merch - Productos</title>
            </Helmet>
            <Products products={initialState.products} />
        </React.Fragment>
    )
}

export default Home
