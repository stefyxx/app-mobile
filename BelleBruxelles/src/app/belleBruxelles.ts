
//il mio obj-tipo
export interface belleBruxelles{
    id: number;
    titre: string;
    description? :string;
    photo: myPhoto;
    location?: MyLocation;
    link_EN_wiki?: string;
}

//la foto deve avere 2 path: uno locale (filePath) e uno dell'url d'internet (webViewPath), per prendere le nuove foto
export interface myPhoto{
    filePath: string;
    webViewPath: string;
}

//x geolocalizzare la mia foto, devo avere una class con latitude et longitude:
//@50.847139,4.351306,18z -> @myLatitude,mylongitude,zoom+z
export interface MyLocation{
    mylatitude: number;
    mylongitude: number;
}

//type per recuperare la foto->nuova creazione (a cui aggiungere id)
export interface LuogoCreate{
    name: string;
    descr: string;
    photo: myPhoto;
    loc?: Location;
    link_EN_wiki?: string;
}

//faccio una prima lista che appare in home
//export const lista: belleBruxelles[];
export let listaBruxelles: belleBruxelles[];
listaBruxelles = [
    {
        id:1,
        titre: 'The Cathedral of St. Michael and St. Gudula',
        description: 'The most important church in Brussels',
        photo: {
            filePath:'../assets/images/cathedrale-St-Michel-etSte-Gudule.jpg',
            webViewPath:'../assets/images/cathedrale-St-Michel-etSte-Gudule.jpg',
        },
        location: {
            mylatitude: 50.8478332,
            mylongitude: 4.3579135,
        },
        link_EN_wiki: 'https://en.wikipedia.org/wiki/Cathedral_of_St._Michael_and_St._Gudula',
    },
    {
        id:2,
        titre: 'The Grand Place',
        description: 'The most important square in Brussels',
        photo : {
            filePath:'../assets/images/grandPlace.jpg',
            webViewPath:'../assets/images/grandPlace.jpg',
        },
        location:{
            mylatitude: 50.847139,
            mylongitude: 4.351306,
        },
        link_EN_wiki: 'https://en.wikipedia.org/wiki/Grand_Place',
    },
    {
        id:3,
        titre: 'Sablon',
        description: 'In Néerlandais \'Zavel\', in French \'Sablon\', it is a lively area with chic bars, trendy restaurants and chocolate shops. The lively Place du Grand Sablon, flanked by the Gothic Notre-Dame du Sablon, hosts an antiques market on weekends.',
        photo : {
            filePath:'../assets/images/sablon.jpg',
            webViewPath:'../assets/images/sablon.jpg',
        },
        location:{
            mylatitude: 50.8400367,
            mylongitude: 4.3512894,
        },
        link_EN_wiki: 'https://en.wikipedia.org/wiki/Sablon,_Brussels',
    },
    {
        id:4,
        titre: 'Mont des Arts garden',
        description: 'Fantastic place, especially to meditate, take pictures or spend a romantic evening!',
        photo : {
            filePath:'../assets/images/mont-des-arts-garden.jpg',
            webViewPath:'../assets/images/mont-des-arts-garden.jpg',
        },
        location:{
            mylatitude: 50.8438375,
            mylongitude: 4.3547088,
        },
        link_EN_wiki: 'https://en.wikipedia.org/wiki/Mont_des_Arts',
    },
    {
        id:5,
        titre: 'Atomiom',
        description: 'Large stainless steel atom where escalators connect the particles. With exhibits and views from 92 m.',
        photo : {
            filePath:'../assets/images/atomium.jpg',
            webViewPath:'../assets/images/atomium.jpg',
        },
        location:{
            mylatitude: 50.8948787,
            mylongitude: 4.3393607,
        },
        link_EN_wiki: 'https://en.wikipedia.org/wiki/Atomium',
    },
];