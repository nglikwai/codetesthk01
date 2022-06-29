import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useTheme } from '../../ThemeProvider'
import { searchApp } from '../../redux/app'
import { useDispatch } from 'react-redux'

const SearchBox = () => {

  const [term, setTerm] = useState('')
  const [debouncedTerm, setDebouncedTerm] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
    const timerId = setTimeout(() => setDebouncedTerm(term), 300);

    return () => clearTimeout(timerId)
  }, [term])

  useEffect(() => {
    dispatch(searchApp({ name: debouncedTerm }))

  }, [debouncedTerm])



  return (
    <SearchWrapper> <Search value={term} onChange={(e) => setTerm(e.target.value)} />
      <Placeholder>
        <img src='images/icon-magnify.svg' />
        搜尋</Placeholder>
    </SearchWrapper>
  )
}

export default SearchBox

const Search = styled.input`
&:hover+div{display:none}
  width:90%;
  height:36px;
  background-color: #ddd;
  border:none;
  border-radius: 4px;
  padding:0 8px;
  margin:10px;
  font-size: 1rem;
`

const SearchWrapper = styled.div`
  height: 54px;
  background-color: #eee;
  width:100%;
  border-bottom:1px solid #ccc;
  position: relative;
`
const Placeholder = styled.div`
  &:active{display:none}
  width:90%;
  height:56px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top:0;
  left: 0;
  color:#999

`