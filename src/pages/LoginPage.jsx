import { Button, Form, Input, Alert } from 'antd';
import axios from 'axios';
import { useState } from 'react';

function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    setLoading(true);
    setError(null);
    axios.post("https://antd-store-backend.vercel.app/user/login", values, {
      headers: {
        "x-student-id": "masif"
      }
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.message);
        setError("Login failed, email or password is incorrect");
      })
      .finally(() => {
        setLoading(false);
      })
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  return (
    <div className='flex justify-center items-center' style={{ minHeight: "100vh" }}>
      <div className='rounded p-10 bg-slate-200 w-160'>
        <h1 className='my-3 text-xl font-bold text-center'>Login Form</h1>
        <Form
          name="basic"
          form={form}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{}}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Email Address"
            name="email"
            className='mb-5'
            rules={[{ required: true, type: "email", message: 'Please provide your valid email address!' }]}
          >
            <Input placeholder="john@example.com" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please provide your valid password!' }]}
          >
            <Input.Password />
          </Form.Item>

          {
            (error != null) ? <div className='mb-3'>
              <Alert title={error} type="error" />
            </div> : null
          }

          <Form.Item label={null}>
            <Button loading={loading} color="pink" type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default LoginPage