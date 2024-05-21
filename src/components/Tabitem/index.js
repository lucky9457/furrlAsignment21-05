import '../../Styles/tabitem.css'

const Tabitem = props => {
  const {activeTabChange, classSelection, item} = props
  const {uniqueId, contentType} = item
  const classval = classSelection ? 'activebuttontab' : 'buttonTab'
  const changeactivetab = () => {
    activeTabChange(uniqueId, contentType)
  }
  return (
    <li className="tablistelement">
      <button onClick={changeactivetab} type="button" className={classval}>
        {item.name}
      </button>
    </li>
  )
}

export default Tabitem
