import { IMainProps } from './type'
import classNames from 'classnames'

const Main = ({ children, className }: IMainProps) => {
  return <main className={classNames(className, 'main')}>{children}</main>
}

export default Main
