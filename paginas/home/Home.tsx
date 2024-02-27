import React from 'react';
import homeLogo from '../../assets/Anya.png'
import './Home.css';
import ListaPostagens from '../../components/postagens/listaPostagens/ListaPostagens';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { Link } from 'react-router-dom';



function Home() {
    return (
        <>
        <div className="bg-pink-600 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Seja bem vinde onii-chan!</h2>
              <p className='text-xl'>quando seus pensamentos e opiniões forem pix vc manda blz??????</p>
  
              <div className="flex justify-around gap-4">
              <ModalPostagem />
              <Link to='/postagens'>
              <button className='border rounded px-4 hover:bg-white hover:text-indigo-800'>Ver postagens</button>
              </Link>
            </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-2/3' />
      
            </div>
          </div>
        </div>
        <ListaPostagens />
      </>
    );
}

export default Home;