import { request } from 'umi';

export type LoginParamsType = {
  userName: string;
  userPass: string;
  mobileNo: string;
  captcha: string;
  type: string;
};

export async function fakeAccountLogin(params: LoginParamsType) {
  return request<API.XcmsResult>('/api/xcms/core/user/login', {
    method: 'POST',
    data: params,
  });
}

export async function getFakeCaptcha(mobile: string) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}

export async function outLogin() {
  return request('/api/xcms/core/user/logout', {
    method: 'POST',
    data: {}
  });
}
