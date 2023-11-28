import { GET } from '@/utlils/useApi';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { POST } from '@/utlils/useApi'

export const Artigos = () => {
    const [artigos, setArtigos] = useState([]);

    const buscarArtigos = async () => {
        try {
            const resposta = await GET("api/articles");
            return resposta;
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const resposta = await buscarArtigos();
            if (resposta) {
                setArtigos(resposta);
            }
        };

        fetchData();
    }, []);


    async function darLike(){
      try {
        const resposta = await POST("api/articles/6525c5cb86d1dcbe8023f448/like")
        console.log(resposta)
      } catch (error) {
        console.log(error);
      }
    }

    return (
        <div className="artigos-container">
            {artigos.map((artigo, index) => (
                <div className="artigo" key={index}>
                    <h2>{artigo.kb_title}</h2>
                    <p>{artigo.kb_body}</p>
                    <div className="botoes">
                        <button onClick={()=> darLike()} className="like-btn">Like</button>
                        <button className="like-btn">Deslike</button>
                        <Link href={"/artigo" +artigo._id}key={index}>
                           a
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};
