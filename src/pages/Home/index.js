import React from 'react';

import Menu from '../../components/Menu';
//import dadosIniciais from '../../data/dados_iniciais.json';
import filmes from '../../data/filmes.json';
import BannerMain from '../../components/BannerMain';
//import Carousel from '../../components/Carousel';
import CarroselFilmes from '../../components/Carousel/CarroselFilmes';
import Footer from '../../components/Footer';

const novo = filmes.slice(1, 10);
const classicos = filmes.slice(100, 110);
const bonus = filmes.slice(301, 320);
console.log(novo);

function Home() {
    return (
        <div style={{ background: '#141414' }}>
            <Menu />

            <BannerMain
                videoTitle={filmes[0].name}
                url="http://guaraci.lhmtv.gq/filmes/MILAGRENACELA72019DUB.mp4?LHMTv"
                logo={filmes[0].tvg_logo}
                videoDescription={"Separado de sua filha, um homem com deficiência intelectual precisa provar sua inocência ao ser preso pela morte da filha de um comandante."}
            // videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
            // url={dadosIniciais.categorias[0].videos[0].url}
            // videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
            />
            <CarroselFilmes
                ignoreFirstVideo
                category={{
                    titulo: novo[0].group_title,
                    cor: 'green',
                    link_extra: '',
                    videos: novo
                }}
            />
            <CarroselFilmes
                ignoreFirstVideo
                category={{
                    titulo: classicos[0].group_title,
                    cor: 'blue',
                    link_extra: '',
                    videos: classicos
                }}
            />
            <CarroselFilmes
                ignoreFirstVideo
                category={{
                    titulo: bonus[0].group_title,
                    cor: 'cyan',
                    link_extra: '',
                    videos: bonus
                }}
            />
            {/*
            <Carousel
                ignoreFirstVideo
                category={dadosIniciais.categorias[0]}
            />

            <Carousel
                ignoreFirstVideo
                category={dadosIniciais.categorias[0]}
            />

            <Carousel
                category={dadosIniciais.categorias[1]}
            />

            <Carousel
                category={dadosIniciais.categorias[2]}
            />

            <Carousel
                category={dadosIniciais.categorias[3]}
            />

            <Carousel
                category={dadosIniciais.categorias[4]}
            />

            <Carousel
                category={dadosIniciais.categorias[5]}
            /> */}

            <Footer />

        </div>
    );
}

export default Home;
