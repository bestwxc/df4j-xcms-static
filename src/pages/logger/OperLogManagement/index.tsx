import React, { useRef } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable, { ActionType, ProColumns } from '@ant-design/pro-table';
import { OperLogItem } from '@/pages/logger/OperLogManagement/data';
import { useIntl } from '@@/plugin-locale/localeExports';

const OoerLogManagement: React.FC = () => {
  const intl = useIntl();
  const actionRef = useRef<ActionType>();
  const columns: ProColumns<OperLogItem>[] = [
    { dataIndex: 'id', title: 'ID', search: false },
    { dataIndex: 'uniqueStr', title: '唯一标识串' },
    { dataIndex: 'userName', title: '用户名' },
    { dataIndex: 'nickName', title: '昵称', search: false },
    { dataIndex: 'operType', title: '操作类型' },
    { dataIndex: 'subOperType', title: '子操作类型' },
    { dataIndex: 'operContent', title: '操作类容', search: false },
    { dataIndex: 'remark', title: '备注', search: false },
    { dataIndex: 'createdDate', title: '创建时间', search: false },
  ];
  return (
    <PageContainer>
      <ProTable<OperLogItem>
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

export default OoerLogManagement;
