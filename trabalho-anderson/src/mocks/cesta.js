import logo from '../../assets/logo.png';
import tomate from '../../assets/frutas/Tomate.png';
import brocolis from '../../assets/frutas/Brocolis.png';
import batata from '../../assets/frutas/Batata.png';
import pepino from '../../assets/frutas/Pepino.png';
import abobora from '../../assets/frutas/Abobora.png';


const cesta = {
    topo: {
        titulo: "Detalhe da cesta",
    },
    detalhes: {
        nome: "Cesta Frutas - pelo menos devia ser",
        logoFazenda: logo,
        nomeFazenda: "Jenny Jack Farm",
        descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
        preco: "R$ 40,00",
    },
    itens:{
      titulo: "Itens da cesta",
    lista: [
      {
        nome: "Tomate",
        imagem: tomate,
        link: 'https://www.tuasaude.com/beneficios-do-tomate/',
      },
      {
        nome: "Brócolis",
        imagem: brocolis,
        link: "https://www.conquistesuavida.com.br/noticia/beneficios-do-brocolis-5-razoes-para-comer-mais-esse-vegetal_a14286/1",
      },
      {
        nome: "Batata",
        imagem: batata,
        link: 'https://www.tuasaude.com/batata/',
      },
      {
        nome: "Pepino",
        imagem: pepino,
        link: 'https://www.tuasaude.com/beneficios-do-pepino/',
      },
      {
        nome: "Abóbora",
        imagem: abobora,
        link: 'https://www.tuasaude.com/abobora/',
      }
    ]
    }
}

export default cesta;