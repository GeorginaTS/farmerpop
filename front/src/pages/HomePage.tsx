import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { ProductCard } from "../components/ProductCard";
import style from "../App.module.css";
import styles from "../styles/pages/HomePage.module.css";

export const HomePage = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const config = {
          url: "http://localhost:3000/product",
          method: "GET",
        };
        const response = await axios(config);

        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to Fetch:(");
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    // Display loading state
    return <div className="error-messages">Loading...</div>;
  }
  if (error) {
    // Display error message
    return <div className="error-messages"> {error}</div>;
  }

  return (
    <section id="homePage" className={style.container}>
      <div className={style.content}>
        <h1>Productes frescos de les mans dels teus veïns. <br />Anima't a menjar sa i de proximitat</h1>
        <div className={style.productGrid}>
          {products.map((product, i) => (
            <div key={i} id={product.id} className={style.productDiv}>
              <Link to={`/product/${product.id}`}>
                <ProductCard
                  title={product.title}
                  price={product.price}
                  user_id={product.user_id}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
