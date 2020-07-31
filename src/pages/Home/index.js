import React, { useState, useEffect } from 'react';

import Menu from '../../components/Menu';
//import dadosIniciais from '../../data/dados_iniciais.json';
import filmes from '../../data/filmes_3.json';
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
    /* const [categorys, setCategorys] = useState(
        filmes.reduce((p, c) => {
            p[c['group'].title] = [...p[c['group'].title] || [], c];
            return p;
        }, [])
    );

    useEffect(() => {
        function getFilme(filme) {
            const filterCategorys = filmes.filter((filter) => filter.name.indexOf(filme)).reduce((p, c) => {
                p[c['group'].title] = [...p[c['group'].title] || [], c];
                return p;
            }, []);
            console.log(filterCategorys);
            return filterCategorys;
        }

        if (search && search.length > 5) {
            setCategorys(getFilme(search));
        }
        if (search && search === '') {
            setCategorys(filmes.reduce((p, c) => {
                p[c['group'].title] = [...p[c['group'].title] || [], c];
                return p;
            }, []))
        }
    }, [search]); */


    return (
        <div style={{ background: '#141414' }}>
            <Menu handleSearch={(e) => setSearch(e)} />

            <BannerMain
                videoTitle={filmes[0].name}
                url={filmes[0].url}
                logo={filmes[0].tvg.logo}
                videoDescription={"Separado de sua filha, um homem com deficiência intelectual precisa provar sua inocência ao ser preso pela morte da filha de um comandante."}
            // videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
            // url={dadosIniciais.categorias[0].videos[0].url}
            // videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
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
            {/* <CarroselFilmes
                ignoreFirstVideo
                category={{
                    titulo: 'Drama',
                    cor: 'green',
                    link_extra: '',
                    videos: drama
                }}
            />
            <CarroselFilmes
                ignoreFirstVideo
                category={{
                    titulo: 'Comédia',
                    cor: 'blue',
                    link_extra: '',
                    videos: comedia
                }}
            />
            <CarroselFilmes
                ignoreFirstVideo
                category={{
                    titulo: 'Crime',
                    cor: 'cyan',
                    link_extra: '',
                    videos: crime
                }}
            /> */}
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
