import { getClassStr } from '@/util'
import './index.scss'
export default function ImgBackgroundItem({
  outerStyle = {},
  imgSrc,
  onClick,
  outerClassName = '',
  innerClassName = '',
  imgClassName = '',
  imgRevers,
  imgReversX,
  imgWidth,
  imgHeight,
  children,
  isInBack,
  withOutCtn,
}) {
  return (
    <div
      style={{ width: imgWidth, height: imgHeight, ...outerStyle }}
      onClick={onClick}
      className={getClassStr('img-background-item', {
        [outerClassName]: outerClassName,
        isInBack,
        imgRevers,
        imgReversX,
      })}
    >
      <img
        className={'img-bg ' + imgClassName}
        style={{ width: imgWidth, height: imgHeight }}
        src={imgSrc}
        alt=""
      />
      {withOutCtn ? (
        children
      ) : (
        <div className={'img-background-item-content ' + innerClassName}>
          {children}
        </div>
      )}
    </div>
  )
}
