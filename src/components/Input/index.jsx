import { Container } from './styles';

// seguindo a regra que todo componente deve ter letra maiuscula.
// conseguimos converter o icon através do " : ", tipo um parse.
export function Input({ icon: Icon, ...rest }) {
  return (
    <Container>
      {/* && = se existir icone, então mostre ele */}
      {Icon && <Icon size={20} />}
      <input { ...rest } />
    </Container>
  )
}