import React, { useEffect, useState } from 'react'
import { jsx, Box, Image, Flex, Heading, Text, Styled } from 'theme-ui'
import AllIn from './allIn'
let axios = require('axios')
let jsonpAdapter = require('axios-jsonp')

export default function Menus({ gonationID, hasMenuImages }) {
  const [menus, setMenus] = useState({
    menuData: null,
    isLoading: true,
  })

  useEffect(() => {
    axios({
      url: `https://data.prod.gonation.com/pl/get?profile_id=${gonationID}`,
      adapter: jsonpAdapter,
    })
      .then(res => {
        console.log(res)
        setMenus({
          ...menus,
          menuData: res.data,
          isLoading: false,
        })
      })
      .catch(e => {
        console.log('error : ', console.e)
        setMenus({ ...menus, isLoading: false })
      })
  }, [])

  return (
    <Box sx={{ marginBottom: 4 }}>
      <Styled.h2>Our Menus</Styled.h2>
      {/*  if data has arrived then load else show loading*/}

      {!menus.isLoading && menus.menuData ? (
        <AllIn menuData={menus.menuData} hasMenuImages={hasMenuImages} />
      ) : (
        'Loading...'
      )}
    </Box>
  )
}
