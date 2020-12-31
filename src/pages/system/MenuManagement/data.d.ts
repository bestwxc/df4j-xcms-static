export type MenuManagementListParams = {
  field1?: string,
  field2?: string,
  field3?: string,
  pageSize?: number;
  currentPage?: number;
  filter?: Record<string, any[]>;
  sorter?: Record<string, any>;
};

export type MenuManagementItem = {
  id: number,
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
}


