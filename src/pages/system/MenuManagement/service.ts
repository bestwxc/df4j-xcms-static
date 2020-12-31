import { request } from 'umi';
import { MenuManagementListParams } from '@/pages/system/MenuManagement/data';
import { adaptRes } from '@/utils/utils';

export async function list(params?: MenuManagementListParams) {

  // @ts-ignore
  const res = await request('/api/xcms/core/menu/list', {
    method: 'POST',
    data: {
      ...params,
    },
    requestType: 'json',
  });
  console.log(res);
  res.data = res.result
  console.log(res);
  return res;
}
