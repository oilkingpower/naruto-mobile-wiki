import React, { useState } from 'react';

interface Props {
  onSearch: (keyword: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [keyword, setKeyword] = useState('');
  return (
    <input
      type="text"
      placeholder="搜索忍者..."
      value={keyword}
      onChange={e => {
        setKeyword(e.target.value);
        onSearch(e.target.value);
      }}
      style={{ width: '200px', padding: '8px', marginBottom: '16px' }}
    />
  );
};

export default SearchBar;