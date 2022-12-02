
export type ProductType = {
    name: string,
    price: number
}

export const Product: React.FC<ProductType> = ({ name, price }) => {
  return (
    <div>
      {name}
      {price}
    </div>
  );
};
