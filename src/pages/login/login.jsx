import React, { Component } from 'react'
import './login.less'
import logo from './images/zemei.png'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import 'antd/dist/antd.min.css';

const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

export default class Login extends Component {

    validatePwd = (rule, value, callback) =>{
        if (!value){
            callback('Please input your Password!')
        } else if (value.length<4){
            callback('min 4')
        } else if (value.length>12){
            callback('max 12')
        } else if (!/^[a-zA-Z0-9_]+$/.test(value)){
            callback('Password should be combination of numbers & alphabets')
        } else {
            callback()
        }
    }
    render() {

        return (
            <div className="login">
                <header className="login-header">
                <img src={logo} alt='logo' />
                <h1>Back-end System</h1>
                </header>
                <section className="login-content">
                    <h2>User Login</h2>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish} >
                        <Form.Item
                            name="username"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                            {
                                min: 4,
                                message: 'Username should between 4 to 12',
                            },
                            {
                                max: 12,
                                message: 'Username should between 4 to 12',
                            },
                            {
                                pattern: /^[a-zA-Z0-9_]+$/,
                                message: 'Username should be combination of numbers & alphabets'
                            }
                            ]} >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    validator: this.validatePwd
                                },
                            ]}
                        >
                            <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <a className="login-form-forgot" href="">
                            Forgot password
                            </a>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                            </Button>
                            Or <a href="">register now!</a>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        )
    }
}
