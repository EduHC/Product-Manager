import * as Yup from 'yup';

const estoque = [];
let id = 0;

class ProductController {
  index(req, res) {
    if (!estoque.length > 0) {
      return res.json({ message: 'Estoque está vazio' });
    }

    return res.status(200).json(estoque);
  }

  async store(req, res) {
    const { nome, preco, categoria } = req.body;

    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      preco: Yup.string().required(),
      categoria: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ message: 'Erro na validação dos dados' });
    }

    id += 1;
    const formatedId = JSON.stringify(id);
    estoque.push({ formatedId, nome, preco, categoria });

    return res.status(200).json({ message: 'Produto adicionado' });
  }

  async update(req, res) {
    const productId = req.params.id;
    const { novoNome, novoPreco, novaCategoria } = req.body;

    const schema = Yup.object().shape({
      novoNome: Yup.string().required(),
      novoPreco: Yup.string().required(),
      novaCategoria: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ message: 'Erro na validação dos dados' });
    }

    const productIndex = estoque.findIndex((item) => {
      return item.formatedId === productId;
    });

    if (productIndex < 0) {
      return res.status(400).json({ message: 'Produto não encontrado' });
    }

    estoque[productIndex] = {
      formatedId: productId,
      nome: novoNome,
      preco: novoPreco,
      categoria: novaCategoria,
    };

    return res.status(200).json({ message: 'atualizado com sucesso' });
  }

  delete(req, res) {
    const productId = req.params.id;

    const productIndex = estoque.findIndex((item) => {
      return item.formatedId === productId;
    });

    if (productIndex < 0) {
      return res.status(400).json({ message: 'Produto não encontrado' });
    }

    estoque.splice(productIndex, 1);

    return res.status(200).json({ message: 'Item excluído com sucessso' });
  }
}

export default new ProductController();
