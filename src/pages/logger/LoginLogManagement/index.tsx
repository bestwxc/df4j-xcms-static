import React, { useRef } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable, { ActionType, ProColumns } from '@ant-design/pro-table';
import { LoginLogItem } from '@/pages/logger/LoginLogManagement/data';
import { useIntl } from '@@/plugin-locale/localeExports';

const LoginLogManagement: React.FC = () => {
  const intl = useIntl();
  const actionRef = useRef<ActionType>();
  const columns: ProColumns<LoginLogItem>[] = [
    { dataIndex: 'id', title: 'ID' },
    { dataIndex: 'uniqueStr', title: '唯一标识串' },
    { dataIndex: 'userName', title: '用户名' },
    { dataIndex: 'nickName', title: '昵称', search: false },
    { dataIndex: 'netAddress', title: '网络地址', search: false },
    { dataIndex: 'deviceInfo', title: '设备信息', search: false },
    { dataIndex: 'regionCode', title: '地区代码', search: false },
    { dataIndex: 'remark', title: '备注', search: false },
    { dataIndex: 'createdDate', title: '创建时间', search: false },
  ];
  return (
    <PageContainer>
      <ProTable<LoginLogItem>
        headerTitle={intl.formatMessage({
          id: 'pages.searchTable.title',
          defaultMessage: '查询表格',
        })}
        actionRef={actionRef}
        columns={columns}
      ></ProTable>
    </PageContainer>
  );
};

export default LoginLogManagement;
