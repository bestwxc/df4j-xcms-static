import { request } from 'umi';

export async function query() {
  return request<API.CurrentUser[]>('/api/xcms/core/user/login', {
    method: 'POST',
    data: {},
  });
}

export async function queryCurrent() {
  const xmsResult: API.XcmsResult = await request<API.XcmsResult>('/api/xcms/core/user/info', {
    method: 'POST',
    data: {},
  });
  if (xmsResult.errorNo === 0) {
    return <API.CurrentUser>xmsResult.result;
  }
  return undefined;
}

export async function queryNotices(): Promise<any> {
  return request<{ data: API.NoticeIconData[] }>('/api/notices');
}
