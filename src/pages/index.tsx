import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import NinjaList from '../components/NinjaList';
import { ninjas } from '../data/characters';

const HomePage: React.FC = () => {
  const [keyword, setKeyword] = useState('');
  const filtered = ninjas.filter(n =>
    n.name.includes(keyword) || n.description.includes(keyword)
  );

  return (
    <div style={{ padding: '32px', textAlign: 'center' }}>
      <h1>火影忍者wiki</h1>
      <p>
        欢迎来到火影忍者手游百科网站，这里收录了所有忍者角色、技能、攻略等信息。
      </p>
      <SearchBar onSearch={setKeyword} />
      <NinjaList ninjas={filtered} />
    </div>
  );
};

export default HomePage;