import React from 'react';
import { Layout, Menu, Breadcrumb} from 'antd';

const { Header, Content, Footer } = Layout;

const CustomLayout=(props) =>{
    return(
 <Layout className="layout">
    <Header>
        <div className="logo" />
        <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
        >
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Upcoming events</Menu.Item>
        <Menu.Item key="3">Contact us</Menu.Item>
        </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>projects</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, maxHeight: 500 }}>
                <h1>Project Dashboard  <span role="img" aria-label='laugh and chill'> ✌🤣 </span></h1>
               
                <hr/>
                {props.children}
                
                
                
            </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
        coding@Design ©2019 Created by kamaa
    </Footer>
 </Layout>
    );
}
export default CustomLayout;
