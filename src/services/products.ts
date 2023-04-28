import modelInsertProduct from '../models/products';

interface INewProduct{
  id: number;
  name: string;
  amount: string;
}

async function serviceInsertProduct(name:string, amount:string):Promise<INewProduct> {
  const result = await modelInsertProduct(name, amount);
  return {
    id: result,
    name,
    amount,
  };
}

export default serviceInsertProduct;