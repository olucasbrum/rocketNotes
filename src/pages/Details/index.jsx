// criando a interface.
// nome da interface tem que ser o nome do arquivo
// e o nome do componente tem que começar em maiúsculo.
import { Container, Links, Content } from "./styles";

import { Tag } from "../../components/Tag";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";



export function Details(){
  // para renderizar tem que ter sempre um return.
  // tem uma regra no react que diz que um componente retorna no maximo um elemento.
  // para retornar mais de um, utizamos um div para embrulhar.
  // ou o "Fragment" (<> </> )que é uma biblioteca do react

  // criando propriedade para nomear varios buttons;
  // title = props(propriedade) mas poderia ser qlqr nome
  // e então defina o nome.
  
  return (
    <Container> 
      <Header />

      <main>
        <Content>

      <ButtonText title="Excluir nota" />

      <h1>Introdução ao React</h1>

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>


      <Section title="Links úteis">
        <Links>
          <li><a href="#">https://www.linkedin.com/in/lucas-brum-javascript/</a></li>          
          <li><a href="#">https://github.com/olucasbrum</a></li>          
        </Links>
      </Section>

      <Section title="Marcadores">
        <Tag title="LinkedIn" />
        <Tag title="GitHub" />
      </Section>

      
      <Button title="Voltar" />

      </Content>
      </main>
    </Container>
  )
};