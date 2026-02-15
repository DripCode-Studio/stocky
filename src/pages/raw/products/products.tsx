import { useQuery } from "@tanstack/react-query";
import { getAllRawProducts } from "../../../api/raw-products";

function Products() {
  const productQuery = useQuery({
    queryKey: ["rawProducts"],
    queryFn: async () => {
      const data = await getAllRawProducts();

      return data;
    },
  });

  console.log(productQuery.data);
  return (
    <>
      <h1>Products page</h1>
    </>
  );
}

export default Products;
