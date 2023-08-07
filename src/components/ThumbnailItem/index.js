import './index.css'

const ThumbnailItem = props => {
  const {thumbnailItem, isActive, updateActiveId} = props
  const {thumbnailUrl, thumbnailAltText, id} = thumbnailItem
  const thambnailClassName = isActive ? `thumbnail active` : `thumbnail`

  const onClickThumbnail = () => {
    updateActiveId(id)
  }

  return (
    <li className="list-container">
      <button
        type="button"
        onClick={onClickThumbnail}
        className={`btn-button ${thambnailClassName}`}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thambnailClassName}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
