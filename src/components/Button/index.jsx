import { Container } from './styles';

// argumento props = propriedade do compononente!
// ps.: deve estar dentro de {};
// passe como argumento ou desestruture direto.

// loading = qnd a page estiver carregando, mude o title do button
// loading é booleando, ?(então) se for vdd(estiver carregando), muda o title do button para "carregando..."
// é uma boa prática definir como false, então ele ira depender da aplicação.


// ...rest = rest operator, pega todas as propriedades do index e inseri aqui. {...rest}
export function Button({ title, loading = false, ...rest }) {

  return (
  <Container 
   type="button"
   disabled={loading}
   {...rest}
   >
   { loading ? 'Carregando...' : title }
  </Container>
  )
}