import { GlobalStyles } from 'styles/globalStyles';
import { useEffect, useState } from 'react';
import { Users } from 'api/api';
import { Header } from 'components/Header';
import { Card } from 'components/Card';
import { IUser } from 'interfaces/IUser';
import { UserProvider } from 'contexts/UserContext';

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [users, setUsers] = useState<IUser[] | null>(null);

  useEffect(() => {
    Users.getUsers()
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
        <section>
          {loading && <p>Carregando usuários...</p>}
          {error}
          {users ? (
            users.map(user => <Card key={user.email} />)
          ) : ('')}
        </section >
      </>
    </UserProvider>
  );
}

export default App;
