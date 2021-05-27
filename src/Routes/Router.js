//APIContext
import {useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
//Contexto de autenticação com todos os métodos
import {AuthContext} from '../context/auth'

//Reinscrição do método Router do React-router-dom para receber component,
//Se é rota privada
//Parametros padrões como o nome da rota
export default function RouterWrapper({
    component: Component,
    isPrivate,
    ...rest 
}) {
    //Puxa a states signed - que verifica se há usuário na state user
    //Puxa a state loading - usada para puxar tela de carregamento
    const {signed, loading} = useContext(AuthContext)
    //Tela de carregamento
    if(loading){
        return(
            <div>

            </div>
        )
    }
    //Verifica se não há usuário logado e se página é privada
    if(!signed && isPrivate){
        return <Redirect to='/'/>
    }
    //Verifica se há usuário logado e se página não é privada
    if(signed && !isPrivate){
    }

    return (
        //Router alterado para receber propiedades e component
        <Route
            {...rest}
            render={ props => (
                <Component {...props}/>
            )}
        />
    );
}