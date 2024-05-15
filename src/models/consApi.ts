// Objetivo: Definir la interfaz de la clase ConsApi


interface ConsApi {
    urlBase: String;
    urls: {
        idiomas: string;
    }
}

export default class ConsApiClass implements ConsApi {
    urlBase = 'http://localhost/api/public/';
    urls = {
        idiomas: 'idiomas',
        cartel: "hero",
        marquetin: "marquetin",
        productoFeacture: "productofeacture",
        productos: "productoChampuindex",
        smBarner: "smbanner",
        banner: "banner",
        newsletter: "newsletter",
        footer: "footer",
        pageHeader: "pageheader",
    }
    url = (path: string,lenguage:string) => `${this.urlBase}${path}/${lenguage}`;
}