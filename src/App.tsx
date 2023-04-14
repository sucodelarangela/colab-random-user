import { GlobalStyles } from 'styles/globalStyles';
import { useEffect, useState } from 'react';
import { Users } from 'api/api';
import { Header } from 'components/Header';
import { Cards } from 'components/Cards';
import { Loader } from 'components/Loader';
import { Button } from 'components/Button';
import { UserProvider } from 'contexts/UserContext';
import { IUser } from 'interfaces/IUser';
import { BsFillTriangleFill } from 'react-icons/bs';
import { RiRefreshFill } from 'react-icons/ri';

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [users, setUsers] = useState<IUser[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  console.log(currentPage);
  console.log(users);

  // Função para o get da lista de usuários
  const getUserList = (currentPage: number) => {
    Users.getUsers(currentPage)
      .then(data => {
        setUsers([...users, ...data]);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(`Não foi possível carregar os dados. Erro: ${err.message}`);
        setLoading(false);
      });
  };

  // Atualiza a lista no primeiro loading
  useEffect(() => {
    getUserList(1);
  }, []);

  // Quando a paginação mudar, atualiza a lista com mais 9 usuários por vez
  useEffect(() => {
    getUserList(currentPage);
  }, [currentPage]);

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setCurrentPage(currentPage + 1);
    }, 3000);
  };

  const backToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <UserProvider value={users}>
      <GlobalStyles />
      <Header />
      {error}
      <Cards />
      {loading && <Loader />}
      <Button className='loadBtn' clickAction={loadMore}>
        <RiRefreshFill size={24} />
        Load more
      </Button>
      <Button className='backToTop' clickAction={backToTop}>
        <BsFillTriangleFill size={32} />
      </Button>
    </UserProvider >
  );
}

export default App;
