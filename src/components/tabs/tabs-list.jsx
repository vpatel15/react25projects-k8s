import React from 'react'
import Tabs from './tabs';

const TabsList = () => {
  const tabs = [
    {
      label: 'Tab 1',
      content: <div>This is the content for tab 1</div>
    },
    {
      label: 'Tab 2',
      content: <div>This is the content for tab 2</div>
    },
    {
      label: 'Tab 3',
      content: <div>This is the content for tab 3</div>
    },
  ]

  const handleChange = (currentIndex) => {
    console.log('filter tabs data and call api with data at index: ', currentIndex);
  }

  return (
    <Tabs tabs={tabs} onChange={handleChange}/>
  )
}

export default TabsList;