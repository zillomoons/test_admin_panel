import React, { Component } from 'react';
import { Card, Table, Tooltip, message, Button } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import moment from 'moment';
import UserView from './UserView';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import { Link } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const API = 'https://jsonplaceholder.typicode.com/users';

async function getUsers() {
  try {
    return await fetch(API)
      .then((res) => res.json())
      .then((json) => json);
  } catch (err) {
    console.log({ err });
  }
}

export class UserList extends Component {
  state = {
    users: [],
    userProfileVisible: false,
    selectedUser: null,
    isLoading: false,
  };

  componentDidMount() {
    try {
      getUsers().then((res) => this.setState({ users: res }));
      this.setState({ isLoading: true });
    } catch (err) {
      console.log({ err });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  deleteUser = (userId) => {
    this.setState({
      users: this.state.users.filter((item) => item.id !== userId),
    });
    message.success({ content: `Deleted user ${userId}`, duration: 2 });
  };

  showUserProfile = (userInfo) => {
    this.setState({
      userProfileVisible: true,
      selectedUser: userInfo,
    });
  };

  closeUserProfile = () => {
    this.setState({
      userProfileVisible: false,
      selectedUser: null,
    });
  };

  render() {
    const { users, userProfileVisible, selectedUser } = this.state;
    const { match } = this.props;
    const { isLoading } = this.state;
    const tableColumns = [
      {
        title: 'User',
        dataIndex: 'name',
        render: (_, record) => (
          <Link
            to={`${match.url}/setting?name=${record.name}&email=${record.email}&phone=${record.phone}&username=${record.username}`}
            className='d-flex cursor-pointer'
          >
            <AvatarStatus
              src={record.img}
              name={record.name}
              subTitle={record.email}
            />
          </Link>
        ),
        sorter: {
          compare: (a, b) => {
            a = a.name.toLowerCase();
            b = b.name.toLowerCase();
            return a > b ? -1 : b > a ? 1 : 0;
          },
        },
      },
      {
        title: 'Company',
        dataIndex: 'company',
        render: (company) => <span>{company.name}</span>,
        sorter: {
          compare: (a, b) => {
            a = a.name.toLowerCase();
            b = b.name.toLowerCase();
            return a > b ? -1 : b > a ? 1 : 0;
          },
        },
      },
      {
        title: 'Phone number',
        dataIndex: 'phone',
        render: (phone) => <span>{phone} </span>,
        sorter: (a, b) =>
          moment(a.lastOnline).unix() - moment(b.lastOnline).unix(),
      },
      {
        title: 'Website',
        dataIndex: 'website',
        render: (website) => <span>{website}</span>,
        sorter: {
          compare: (a, b) => a.status.length - b.status.length,
        },
      },
      {
        title: '',
        dataIndex: 'actions',
        render: (_, elm) => (
          <div className='text-right'>
            <Tooltip title='View'>
              <Button
                type='primary'
                className='mr-2'
                icon={<EyeOutlined />}
                onClick={() => {
                  this.showUserProfile(elm);
                }}
                size='small'
              />
            </Tooltip>
            <Tooltip title='Delete'>
              <Button
                danger
                icon={<DeleteOutlined />}
                onClick={() => {
                  this.deleteUser(elm.id);
                }}
                size='small'
              />
            </Tooltip>
          </div>
        ),
      },
    ];

    if (isLoading) {
      return <Loading cover='page' />;
    }
    return (
      <Card bodyStyle={{ padding: '0px' }}>
        <Table columns={tableColumns} dataSource={users} rowKey='id' />
        <UserView
          data={selectedUser}
          visible={userProfileVisible}
          close={() => {
            this.closeUserProfile();
          }}
        />
      </Card>
    );
  }
}

export default UserList;
