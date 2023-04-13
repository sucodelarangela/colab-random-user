import { GlobalStyles } from 'styles/globalStyles';
import { useEffect, useState } from 'react';
import { Users } from 'api/api';
import { Header } from 'components/Header';
import { Cards } from 'components/Cards';
import { IUser } from 'interfaces/IUser';
import { UserProvider } from 'contexts/UserContext';
import { Loader } from 'components/Loader';

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [users, setUsers] = useState<IUser[] | null>(null);
  const [initialpage, setInitialPage] = useState(1);

  useEffect(() => {
    Users.getUsers(initialpage)
      .then(data => {
        setUsers(data);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(`Não foi possível carregar os dados. Erro: ${err.message}`);
        setLoading(false);
      });
  }, []);

  return (
    <UserProvider value={users}>
      <>
        <GlobalStyles />
        <Header />
        {loading && <p>Carregando usuários...</p>}
        {error}
        <Cards />
        <Loader />
      </>
    </UserProvider >
  );
}

export default App;
