import React from 'react';
import { Container } from 'semantic-ui-react'
import { Tab } from 'semantic-ui-react'
import Overall from './Overall';
import Thai from './Thai';

const panes = [
  { menuItem: 'Overall', render: () => <Overall /> },
  { menuItem: 'Thailand', render: () => <Thai /> },
]


function App() {
  return (
      <Container>
        <h1>Covid 19 Checker</h1>
        <Tab panes={panes} />
      </Container>
  );
}

export default App;
