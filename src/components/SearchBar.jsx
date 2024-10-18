import React, { useState } from 'react';
import { Input, InputGroup, InputLeftElement, IconButton, Box } from '@chakra-ui/react';
import { SearchIcon, CloseIcon } from '@chakra-ui/icons';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleClear = () => {
    setSearchQuery('');
    if (onSearch) onSearch('');
  };

  const handleSearch = () => {
    if (onSearch) onSearch(searchQuery);
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center" p={4}>
      <InputGroup maxW="500px">
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Buscar..."
          size="md"
          bg="white"
          borderRadius="md"
          boxShadow="sm"
        />
        {searchQuery && (
          <IconButton
            aria-label="Clear search"
            icon={<CloseIcon />}
            size="sm"
            onClick={handleClear}
            ml={2}
          />
        )}
        <IconButton
          aria-label="Search"
          icon={<SearchIcon />}
          size="md"
          ml={2}
          onClick={handleSearch}
          colorScheme="teal"
        />
      </InputGroup>
    </Box>
  );
};

export default SearchBar;
