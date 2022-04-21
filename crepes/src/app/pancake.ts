
export class Pancake {
    id: number;
    description: string;
    name: string;
    photo: UserPhoto;
    //ora posso aggiungere localizzazione
    location?: MyLocation;
}
// meglio export interface UserPhoto, cosi' x Pancake
//cosi' posso aggiungere in mia class che eredita da UserPhoto
export class UserPhoto{
    filePath: string; //nel mio disco duro dove é memorizzata l'immagine
    webViewPath: string; //ogni app, che usiamo come servizio, ha una piccola zona di memoria , la nostra é Camera
}

export interface PancakeAddOptions{
    name: string;
    descr: string;
    photo: UserPhoto;
    loc?: Location;
}

export interface MyLocation{
    lati: number;
    longi: number;
}

export const listeCrepes = [
    {
        id: 1,
        description : 'Descrizione 1',
        name : 'Crepe Mikado',
        photo: {
            filePath: 'https://www.pngall.com/wp-content/uploads/5/Pancake-PNG-Images.png',
            webViewPath: 'https://www.pngall.com/wp-content/uploads/5/Pancake-PNG-Images.png',
        },
    },
    {
        id: 2,
        description : 'Descrizione 2',
        name : 'Crepe sirop d\'érable',
        photo: {
            filePath: 'https://www.pngall.com/wp-content/uploads/5/Pancake-PNG-Images.png',
            webViewPath: 'https://www.pngall.com/wp-content/uploads/5/Pancake-PNG-Images.png',
        },
    },
    {
        id: 3,
        description : 'Descrizione 3',
        name : 'Crepe cioccolato',
        photo: {
            filePath:'https://www.pngall.com/wp-content/uploads/5/Pancake-PNG-Images.png',
            webViewPath: 'https://www.pngall.com/wp-content/uploads/5/Pancake-PNG-Images.png',
        },
    },
];
