import React, { useRef } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable, { ProColumns, ActionType } from '@ant-design/pro-table';
import { MenuManagementItem } from '@/pages/system/MenuManagement/data';
import { Button } from 'antd';
import { FormattedMessage } from 'umi';

import { list } from './service';

/**
 * id: number,
 uniqueStr: string,
 sysCode: string,
 createdBy: string,
 createdDate: string,
 lastModifiedBy: string,
 lastModifiedDate: string,
 orderNum: number,
 state: number,
 menuType: number,
 parentMenuCode: string,
 menuName: string,
 menuCode: string,
 menuDesc: string,
 menuLevel: number,
 menuPath: string,
 menuIcon: string,
 jumpType: number,
 jumpSpec: string
 */
const columns: ProColumns<MenuManagementItem>[] = [
  { dataIndex: 'id', title: 'ID' },
  { dataIndex: 'uniqueStr', title: '唯一标识' },
  { dataIndex: 'sysCode', title: '系统代码' },
  { dataIndex: 'state', title: '状态' },
  { dataIndex: 'menuType', title: '菜单类型' },
  { dataIndex: 'parentMenuCode', title: '上级菜单代码' },
  { dataIndex: 'menuName', title: '菜单名称' },
  { dataIndex: 'menuCode', title: '菜单代码' },
  { dataIndex: 'menuDesc', title: '菜单说明' },
  { dataIndex: 'menuLevel', title: '菜单层级' },
  { dataIndex: 'menuPath', title: '菜单路径' },
  { dataIndex: 'menuIcon', title: '菜单图标' },
  { dataIndex: 'jumpType', title: '跳转类型' },
  { dataIndex: 'jumpSpec', title: '跳转内容' },
];

const MenuManagement: React.FC = () => {
  const actionRef = useRef<ActionType>();
  return (
    <div>
      <PageContainer>
        <ProTable
          actionRef={actionRef}
          toolBarRender={() => [
            <Button
              type='primary'
              key='primary'
            >
              <FormattedMessage id='pages.searchTable.new' defaultMessage='3434' />
            </Button>,
            <Button
              type='primary'
              key='primary'
            ><FormattedMessage id='pages.searchTable.new' defaultMessage='3434' /></Button>,
          ]}
          columns={columns}
          request={(params, sorter, filter) => list({ ...params, sorter, filter })}
        />
      </PageContainer>
    </div>
  );
};
export default MenuManagement;
