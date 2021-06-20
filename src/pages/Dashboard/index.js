import React, { useEffect, useState, useCallback } from 'react';
import Header from '../../Components/Header';
import Menu from '../../Components/Menu';
import Card from '../../Components/Card';
import {FiUser, FiGlobe, FiPlus, FiXCircle} from 'react-icons/fi';
import Title from '../../Components/Title';
import './style.css'
import {Row, Col } from 'react-flexbox-grid';
import List from '../../Components/List';
import firebase from '../../service/FirebaseConnection';
import {toast} from 'react-toastify';

export default function Dashboard() {
  const [listLinksUteis, setListLinksUteis] = useState([]);
  const [inputLink, setInputLink] = useState('')
  const [loadingButton, setLoadingButton] = useState(false)
  useEffect(()=>{
    getLinkUtil()
  },[]);

  async function getLinkUtil(){
    const linkFirestore = await firebase.firestore().collection('links').get()
    .then((snapshot) => {
      
      let lista = [];

      snapshot.forEach((doc)=>{
        lista.push({
          id: doc.id,
          linkUtel: doc.data().linkUtel
        });
      });
      setListLinksUteis(lista);
      console.table(lista)
    });
  }
  function linkSubmit(e){
    e.preventDefault();
    if(inputLink !== ''){
      setLinkFirestore(inputLink);
    }else{
      toast.error('Campo de link não pode ficar vazio');
    }
  }
  async function setLinkFirestore(link){
    setLoadingButton(true);
    await firebase.firestore().collection('links').add({
      linkUtel: link
    }).then(()=>{
      setLoadingButton(false);
      setInputLink('');
      toast.success('Link Adicionado com sucesso')
      getLinkUtil();
    }).catch((e)=>{
      setLoadingButton(false);
      toast.error('erro: ' + e);
    });
  }
  async function DeleteLink(id){
    await firebase.firestore().collection('links').doc(id).delete()
    .then(() => {
      getLinkUtil();
      toast.success('Link Excluído')
    });
  }
  return (
    <div>
        <Header/>
        <Menu/>
        <div className='content'>
          <Title title='Dashboard'/>
          <div className='content_dashboard'>
            <div className='container_card'>
              <Card link='/candidatos' title='Quantidade de Candidatos'>
                <span>0</span> <FiUser size={50} color={'red'}/>
              </Card>
              <Card link='/empresas' title='Quantidade de Empresas'>
                <span>0</span> 
                <FiGlobe size={50} color={'red'}/>
              </Card>
            </div>
            <div className='list_links'>
              <form className='form' onSubmit={linkSubmit}>
                  <div className='form_header'>
                    <p>Links Uteis</p>
                  </div>
                  <div className='form_area_input'>
                    <Row>
                      <Col md={9} xs={9}>
                        <input type="text" placeholder='novo link' value={inputLink} onChange={(e) => setInputLink(e.target.value)}/>
                      </Col>
                      <Col md={3} xs={3}>
                        <button type='submit'>
                          <FiPlus size='15' color='red'/> <span>Adicionar</span>
                        </button>
                      </Col>
                    </Row>
                  </div>
              </form>
              <div className='list_Data'>
              <List>
                  {listLinksUteis.map((Link, index) => (
                    <li key={Link.id} id={index}>
                      <Row>
                        <Col md={2} sm={2}><img src={Link.linkUtel + '/favicon.ico'}/></Col>
                        <Col md={8} sm={8} className='list_text'><a href={Link.linkUtel}>{Link.linkUtel}</a></Col>
                        <Col md={2} sm={2} className='list_text'>
                          <button class="btDelete" onClick={() => DeleteLink(Link.id)}>
                            <FiXCircle size={25} color='#FFF'/>
                          </button>
                        </Col>
                      </Row>
                    </li>
                  ))}
              </List>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}