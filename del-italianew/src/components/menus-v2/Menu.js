import React, { useEffect, useState } from 'react'
import axios from 'axios'
import jsonpAdapter from 'axios-jsonp'
import styled from 'styled-components'
import { Spinner } from 'theme-ui'
import ItemModal from './itemModal'
import AllInOnce from './allIn'
import CellsAndAllIn from './cellsAndAllIn'
import TabsView from './tabsView'

export default function Food({ id, poweredListID, mode }) {
  const [menuData, setMenuData] = useState({})
  const [modalActive, setModalActive] = useState('')

  //   const poweredListID = "powered-list-4"

  //   const mode = "cellsThenAllInOnce"

  // Fetch the menu data when the template renders.
  useEffect(() => {
    axios({
      url: `https://data.prod.gonation.com/pl/get?profile_id=${id}&powerlistId=${poweredListID}`,
      adapter: jsonpAdapter,
    }).then(res => {
      setMenuData(res.data[0])
    })
  }, [])

  const getRenderType = () => {
    switch (mode) {
      case 'allInOnce':
        return <AllInOnce menuData={menuData} setModalActive={setModalActive} />
      case 'cellsThenAllInOnce':
        return (
          <CellsAndAllIn menuData={menuData} setModalActive={setModalActive} />
        )
      case 'tabs':
        return <TabsView menuData={menuData} setModalActive={setModalActive} />
      case 'cellsThenTabs':
        return (
          <CellsAndAllIn
            menuData={menuData}
            setModalActive={setModalActive}
            isCellsAndTabs
          />
        )
      default:
        return 'no menu selected'
    }
  }

  return (
    <>
      {modalActive ? (
        <ItemModal data={modalActive} setModalActive={setModalActive} />
      ) : (
        ''
      )}
      <MenuWrapper>
        Menu Version2
        {menuData && menuData.section ? (
          getRenderType()
        ) : (
          <SpinnerWrapper>
            <Spinner />
          </SpinnerWrapper>
        )}
      </MenuWrapper>
    </>
  )
}

const MenuWrapper = styled.div``

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
`
