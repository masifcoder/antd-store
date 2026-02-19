import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from 'react-data-table-component';
import { Eye, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";



function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const columns = [
    {
      name: 'ID',
      selector: row => row._id,
    },
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
              onClick={() => deleteProduct(row._id)}
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



  // delete product func
  const deleteProduct = (pid) => {
    setLoading(true);
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      setLoading(false);
      return;
    }

    axios.delete(`https://antd-store-backend.vercel.app/product/delete/${pid}`, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "x-student-id": "masif"
      }
    })
      .then((response) => {
        if (response.data.success == true) {
          // product successfullly deleted
          message.success("Product successfully deleted");
          getProducts();

        }
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => { setLoading(false) })
  }


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