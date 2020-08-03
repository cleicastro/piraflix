import React, { useState, useEffect } from 'react';

import Menu from '../../components/Menu';
//import dadosIniciais from '../../data/dados_iniciais.json';
import filmes from '../../data/filmes_2.json';
import BannerMain from '../../components/BannerMain';
//import Carousel from '../../components/Carousel';
import CarroselFilmes from '../../components/Carousel/CarroselFilmes';
import Footer from '../../components/Footer';

const categorys = filmes.reduce((p, c) => {
    p[c['group'].title] = [...p[c['group'].title] || [], c];
    return p;
}, []);

function Home() {
    const [search, setSearch] = useState(null);
    return (
        <div style={{ background: '#141414' }}>
            <Menu handleSearch={(e) => setSearch(e)} />

            <BannerMain
                videoTitle={filmes[0].name}
                url={filmes[0].url}
                logo={filmes[0].tvg.logo}
                videoDescription={"Separado de sua filha, um homem com deficiência intelectual precisa provar sua inocência ao ser preso pela morte da filha de um comandante."}
            />
            {Object.keys(categorys).slice(0, 15).map((category, key) => (
                <CarroselFilmes
                    key={key}
                    ignoreFirstVideo
                    category={{
                        titulo: category,
                        cor: 'green',
                        link_extra: '',
                        videos: categorys[category].slice(0, 20)
                    }}
                />
            ))}
            <Footer />

        </div>
    );
}

export default Home;
