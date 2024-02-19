import Tema from "./Tema";
import usuario from "./Usuario";

export default interface Postagem{
    id: number;
    titulo: string;
    texto: string;
    data: string;
    tema?: Tema | null;
    usuario?: usuario | null;
}