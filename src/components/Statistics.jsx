import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const marks = [
  {
    id: 'A-1',
    name: 'Assignment 1',
    number: 58,
  },
  {
    id: 'A-2',
    name: 'Assignment 2',
    number: 57,
  },
  {
    id: 'A-3',
    name: 'Assignment 3',
    number: 60,
  },
  {
    id: 'A-4',
    name: 'Assignment 4',
    number: 60,
  },
  {
    id: 'A-5',
    name: 'Assignment 5',
    number: 58,
  },
  {
    id: 'A-6',
    name: 'Assignment 6',
    number: 60,
  },
  {
    id: 'A-7',
    name: 'Assignment 7',
    number: 60,
  },
];
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};
const TriangleBar = props => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};
const Statistics = () => {
  
  return (
    <div className="my-container">
      <BarChart width={1000} height={500} data={marks}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="id" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="name" />
        <Bar
          dataKey="number"
          fill="#8884d8"
          shape={<TriangleBar/>}
          label={{ position: 'top' }}
        >
          {marks.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default Statistics;