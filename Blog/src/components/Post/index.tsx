import { useEffect, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import styles from './styles.module.css';
import { TArtigo } from "../../types/artigo";

export default function Post() {
    var [artigos, setArtigos] = useState<TArtigo[]>([]);

    function getPosts() {
        setArtigos([
            {
                id: 1,
                title: 'teste 1',
                text: 'Teste',
                likes: 10
            },
            {
                id: 2,
                title: 'teste 2',
                text: 'Teste 2',
                likes: 5
            },
        ])
    }

    useEffect(() => {
        getPosts();
    }, [])

    const RenderPosts = () => {
        return artigos.map((artigo) => {
            return (
                <form key={artigo.id} className={styles.card} >
                    <div className={styles.card__title}>
                        {artigo.title}
                    </div>
                    <div className={styles.card__body}>
                        <div className={styles.card__body__article}>{artigo.text}</div>
                        <div className='d-flex align-items-center '>
                            {artigo.likes}<button><AiOutlineLike /></button>
                        </div>
                    </div>
                </form>
            )
        })
    }

    return (
        <div><RenderPosts /></div>
    )
}