import { Container } from './styles';

// children vai ser tudo que vamos passar dentro da section lá no Details
export function Section({ title, children }){
  return (
    <Container>
      <h2>{title}</h2>
      {children}
    </Container>
  );
}