import { Button, Form, Input, Alert, Typography } from "antd";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const { Title, Text } = Typography;

function LoginPage() {
  const [form] = Form.useForm();
  const authCtx = useContext(AuthContext);

  console.log(authCtx);

  const onFinish = (values) => {
    
    authCtx.loginUser(values);

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4">
      <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-10 w-full max-w-md">
        
        {/* Header */}
        <div className="text-center mb-8">
          <Title level={2} className="!mb-2">
            Welcome Back 👋
          </Title>
          <Text type="secondary">
            Please login to your account
          </Text>
        </div>

        {/* Form */}
        <Form
          layout="vertical"
          form={form}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Email Address"
            name="email"
            rules={[
              { required: true, message: "Email is required!" },
              { type: "email", message: "Enter a valid email!" },
            ]}
          >
            <Input size="large" placeholder="john@example.com" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Password is required!" },
            ]}
          >
            <Input.Password size="large" placeholder="Enter your password" />
          </Form.Item>

         <div className="mb-3">
           {authCtx.error && (
            <Alert
              message={authCtx.error}
              type="error"
              showIcon
              className="mb-4"
            />
          )}
         </div>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={authCtx.loading}
              size="large"
              className="w-full !h-12 !rounded-xl !bg-gradient-to-r !from-indigo-500 !to-pink-500 !border-0 hover:!opacity-90"
            >
              Login
            </Button>
          </Form.Item>
        </Form>

        {/* Footer */}
        <div className="text-center mt-4">
          <Text type="secondary">
            Don’t have an account? <a href="#">Register</a>
          </Text>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
