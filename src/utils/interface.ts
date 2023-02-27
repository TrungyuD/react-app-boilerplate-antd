// interface for page
export interface User {
  address: string;
  createdAt: number;
  email: string | null;
  id: number;
  role: string;
  status: string;
  updatedAt: number;
}
// interface common option input....
interface Options {
  label: string;
  value: string | number;
}
export interface IOptions {
  placeholder: string;
  value: Options;
  options: Options[];
  onChange: (value: any) => void;
  size: 'large' | 'middle' | 'small';
  showSearch?: boolean;
}

export interface IToolTip {
  placement:
    | 'top'
    | 'topLeft'
    | 'topRight'
    | 'left'
    | 'leftBottom'
    | 'leftTop'
    | 'right'
    | 'rightTop'
    | 'rightBottom'
    | 'bottom'
    | 'bottomLeft'
    | 'bottomRight';
  title: string;
  children: React.ReactNode;
}
