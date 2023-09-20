import React, { ChangeEvent, useState } from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'

import style from '../App.module.css'
import styles from '../styles/components/SearchBar.module.css'

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
    <section id='searchBar' className={styles.container}>
      <InputGroup>
        <FormControl
          onChange={handleChange}
          value={keywords}
          placeholder='Search...'
          className={styles.searchInput}
        /> 
      </InputGroup>
    </section>
  )
}
