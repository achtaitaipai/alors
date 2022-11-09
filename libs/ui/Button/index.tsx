import {buttonStyle} from './style.css'
interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  title:string
}

const Button: React.FC<Props> = ({ title,...props }) => (
  <button className={buttonStyle} {...props}>{title}</button>
);

export {Button};