import{createContext, useState, useEffect} from 'react';
import firebase from '../service/FirebaseConnection';

//APIContext
export const AuthContext = createContext({});

function AuthProvider({children}){
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loading, setLoading] = useState(true);
    
    //Ao iniciar a aplicação, verifica se há usuário autenticado 
    useEffect(() => {
        function loadStorage(){
            const storageUser = localStorage.getItem('SistemaUser');
            if(storageUser){
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }
            setLoading(false);
        }
        loadStorage();
    }, [])
    //Método de login: recebe email e senha e faz login no firebase
    async function signIn(email, senha){
        setLoadingAuth(true);
        await firebase.auth().signInWithEmailAndPassword(email, senha)
        .then(async (value) => {
            //Após login, Puxa as informações do usuário do firestore database
            let uid = value.user.uid;
            const userProfile = await firebase.firestore().collection('users')
            .doc(uid).get();
            //data - Dados do usuário salvos em um objeto
            let data = {
                uid: uid,
                nome: userProfile.data.nome,
                avatarurl: userProfile.data.avatarurl,
                email: value.user.email
            }
            setUser(data);
            storageUser(data);
            setLoadingAuth(false);

        })
        .catch((error) => {
            console.log(error);
            setLoadingAuth(false);
        })
    }
    //Método de criação de usuário - Recebe email, senha e outras informações do usuário
    //Responsável pela criação e pela inserção de dados do usuário no database firestore
    async function signUp(email, senha, nome){
        setLoadingAuth(true);
        await firebase.auth().createUserWithEmailAndPassword(email, senha)
        .then( async (value) => {
            //Recebe o resultado da criação do usuário e insere as informações no database firestore
            let uid = value.user.uid
            await firebase.firestore().collection('users').doc(uid).set({
                nome: nome,
                avatarurl: null,
            }).then(()=>{
                //Recebe as informações do database firestore e insere essas informações no obeto data
                let data = {
                    uid: uid,
                    nome: nome,
                    email: value.user.email,
                    avatarurl: null
                }
                setUser(data);
                storageUser(data);
                setLoadingAuth(false);
            });
        }).catch((error) =>{
            console.log(error);
            toast.error(error.message);
            setLoadingAuth(false);
        })
    }
    //Insere os dados do usuário no local storage para futuramente ser usado como verificação de usuário logado
    function storageUser(data){
        localStorage.setItem('SistemaUser', JSON.stringify(data));
    }
    //Método responsável pela saída do responsável do sistema (Deslogar)
    async function signOut(){
        //Desloga no firebase
        await firebase.auth().signOut();
        //Remove informações do localStorage
        localStorage.removeItem('SistemaUser');
        //Remove informações da State
        setUser(null);
    }
    return(
        //Provedor do contexto de autenticação e seus métodos para toda a aplicação
        //Classe deve ser chamada na app.js, ao redor das rotas
        <AuthContext.Provider 
        value={{
            signed: !!user, 
            user, 
            loading, 
            signUp,
            signOut,
            signIn,
            loadingAuth,
            setUser,
            storageUser
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;