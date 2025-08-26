// app/products/page.tsx
"use client";
import { useEffect, useState } from "react";
import { ProductService } from "@/lib/services/ProductService";
// import { ProductRepository } from "@/lib/repositories/ProductRepository";
import { Api2ProductRepository } from "@/lib/repositories/ApiV2ProductRepository";

interface ProductsProps {
  id: number;
  name: string;
  price: string;
}
export default function ProductsPage() {
  const [products, setProducts] = useState<ProductsProps[]>([]);
  const productService = new ProductService(new Api2ProductRepository());

  useEffect(() => {
    productService.getProducts().then(setProducts);
  }, []);

  const addProduct = async () => {
    await productService.createProduct({ name: "Tablet", price: 300 });
    setProducts(await productService.getProducts());
  };

  const deleteProduct = async (id: number) => {
    await productService.deleteProduct(id);
    setProducts(await productService.getProducts());
  };

  return (
    <div>
      <h1>Products</h1>
      <button onClick={addProduct}>Add Product</button>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - ${p.price}
            <button onClick={() => deleteProduct(p.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
