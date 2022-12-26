interface InitState {
  credit: {
    accessToken: string;
    displayName: string;
    email: string;
    photoUrl: string;
    uid: string;
    refreshToken: string;
  } | null;
}

interface Context {
  state: InitState;
  dispatch: React.Dispatch<any>;
}

interface AllInp {
  name: null | string;
  email: null | string;
  pass: null | string;
  age: null | string;
}

type Action = {
  type: "LOGIN" | "LOGOUT";
  payload: any;
};
