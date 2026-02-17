
import { useState } from "react";
import { Form, Input, InputNumber, Button, message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const { TextArea } = Input;

function CreateProductPage() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    // console.log(values);
    //     return;


    const token = localStorage.getItem("token");
    if (!token) {
      message.error("You must be logged in to create a product.");
      navigate("/login");
      setLoading(false);
      return;
    }

    try {
      await axios.post(
        "https://antd-store-backend.vercel.app/product/create",
        values,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "x-student-id": "masif",
          },
        }
      );

      message.success("Product created successfully.");
      navigate("/dashboard/products");
    } catch (err) {
      console.error(err);
      const msg = err?.response?.data?.error || "Failed to create product.";
      message.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Add New Product</h2>

      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Product Name"
          name="name"
          rules={[{ required: true, message: "Please enter product name" }]}
        >
          <Input size="large" placeholder="e.g. Wireless Headphones" />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: "Please enter description" }]}
        >
          <TextArea rows={4} placeholder="Product description" />
        </Form.Item>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Form.Item
            label="Price"
            name="price"
            rules={[{ required: true, message: "Please enter price" }]}
          >
            <InputNumber className="w-full" min={0} size="large" />
          </Form.Item>

          <Form.Item
            label="Rating"
            name="rating"
            rules={[{ required: true, message: "Please enter rating" }]}
          >
            <InputNumber className="w-full" min={0} max={5} size="large" />
          </Form.Item>

          <Form.Item label="Stock" name="inStock" initialValue={1} rules={[{ required: true }]}>
            <InputNumber className="w-full" min={0} size="large" />
          </Form.Item>
        </div>

        <Form.Item label="Image URL" name="image">
          <Input size="large" placeholder="https://..." />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} size="large" className="w-full">
            Create Product
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default CreateProductPage;