// app/products/page.tsx
"use client";
import { useEffect, useState } from "react";
// import { ProductService } from "@/lib/services/ProductService";
import { ProductServiceISP } from "@/lib/services/ProductServiceISP";
// import { ProductRepository } from "@/lib/repositories/ProductRepository";
import { ApiV2ProductRepositoryISP } from "@/lib/repositories/ApiV2ProductRepositoryISP";
// import { ApiV2ProductRepository } from "@/lib/repositories/ProductRepository";

interface Product {
  id: number;
  name: string;
  price: number;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);

  // DIP: inject via interfaces
  const repo = new ApiV2ProductRepositoryISP(); // new repo, OCP maintain
  const productService = new ProductServiceISP(repo, repo, repo);

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
