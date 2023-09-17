import React, { ChangeEvent, useState } from 'react'
import { Container, InputGroup, FormControl, Button } from 'react-bootstrap'

import styles from '../styles/components/SearchBar.module.css'
import { Search } from 'react-bootstrap-icons';

interface SearchBarProps {
  onSearch: (keywords: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [keywords, setKeywords] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newKeywords = event.target.value
    setKeywords(newKeywords)
    onSearch(newKeywords)
  }

  return (
    <Container className={styles.container}>
      <InputGroup >
        <FormControl
          onChange={handleChange}
          value={keywords}
          placeholder='Search...'
          className={styles.searchInput}
        /> <Search  className={styles.searchIcon}/>
      </InputGroup>
    </Container>
  )
}
