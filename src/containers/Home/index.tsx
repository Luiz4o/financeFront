import React from 'react'
import Header from '../../components/Header'
import Search from '../../components/Search'
import SideBar from '../../components/SideBar'
import FormularioRecipe from '../../components/Formulario/FormRecipe';
import FormularioExpense from '../../components/Formulario/FormExpense';

function Home() {
// const storageValue=localStorage.getItem('isCreate') ? true : false

// const isCreate= storageValue??JSON.parse(storageValue) ;

const storageValue = localStorage.getItem('isCreate');

  // Verifica se storageValue existe e é verdadeiro, então define isCreate como true
  const isCreate = storageValue ? JSON.parse(storageValue) : false;


  return (
    <div>
    <Header/>
    {isCreate ? <Search/> : <FormularioRecipe
    titulo='Informe o valor da Receita'
    descricao='Deixe uma descrição para este Item'
    /> }
    {isCreate ? '' : <FormularioExpense
    titulo='Informe o valor da Despeza'
    descricao='Deixe uma descrição para este Item'
    /> }
    <SideBar />
    </div>
  )
}

export default Home