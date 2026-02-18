import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from 'react-data-table-component';
import {Eye, Trash} from "lucide-react";


function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const columns = [
    // {
    //   name: 'Photo',
    //   selector: row => row.name,
    // },
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true
    },
    {
      name: 'Price',
      selector: row => row.price,
      sortable: true
    },
    {
      name: 'Rating',
      selector: row => row.rating,
    },
    {
      name: "Actions",
      cell: (row) => {
        return (
          <>
            <button
              onClick={() => alert(row.name)}
              style={{
                padding: "4px 8px",
                backgroundColor: "#1677ff",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                marginRight: "4px"
              }}
            >
              <Eye size={18} />
            </button>
            <button
              onClick={() => alert(row.name)}
              style={{
                padding: "4px 8px",
                backgroundColor: "red",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              
              }}
            >
              <Trash size={18} />
            </button>
          </>
        )
      }
    }
  ];



  const getProducts = async () => {
    setLoading(true);
    try {

      const response = await axios.get("https://antd-store-backend.vercel.app/product/all", {
        headers: {
          "x-student-id": "masif",
        },
      });

      setProducts(response.data.products);

    } catch (error) {
      console.log(error.message);

    } finally {
      setLoading(false);
    }

  }

  useEffect(() => {

    getProducts();

  }, []);


  return (
    <>
      <h3 className="font-bold text-3xl text-slate-700 mb-8">View all products</h3>
      <DataTable
       title="All Available Products"
        columns={columns}
        data={products}
        progressPending={loading}

      />
    </>

  )
}

export default ProductsPage