import React from 'react';

interface Ninja {
  name: string;
  description: string;
}

interface Props {
  ninjas: Ninja[];
}

const NinjaList: React.FC<Props> = ({ ninjas }) => (
  <ul>
    {ninjas.map(ninja => (
      <li key={ninja.name}>
        <strong>{ninja.name}</strong>: {ninja.description}
      </li>
    ))}
  </ul>
);

export default NinjaList;