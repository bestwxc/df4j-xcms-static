declare namespace API {
  export type XcmsResult = {
    errorNo: number,
    errorInfo: string,
    resultType: 'list' | 'object',
    result?: any,
    page?: boolean,
    pageNum?: number,
    pageSize?: number,
    total?: number
  }
  export type CurrentUser = {
    userName: string,
    nickName: string,
    mobileNo: string,
    sex: number,
    userType: number,
    sourceType: number,
    avatar?: string,
    selfIntroduction?: string
  }
  export type BeforeCurrentUser = {
    avatar?: string;
    name?: string;
    title?: string;
    group?: string;
    signature?: string;
    tags?: {
      key: string;
      label: string;
    }[];
    userid?: string;
    access?: 'user' | 'guest' | 'admin';
    unreadCount?: number;
  };

  export type LoginStateType = {
    status?: 'ok' | 'error';
    type?: string;
  };

  export type NoticeIconData = {
    id: string;
    key: string;
    avatar: string;
    title: string;
    datetime: string;
    type: string;
    read?: boolean;
    description: string;
    clickClose?: boolean;
    extra: any;
    status: string;
  };
}
