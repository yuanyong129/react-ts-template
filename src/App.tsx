import { useState } from 'react';
import logo from './logo.svg';
import { PrimaryButton, DefaultButton, Stack } from '@fluentui/react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Stack horizontal>
        <PrimaryButton> 标准按钮 </PrimaryButton>
        <DefaultButton> 默认按钮 </DefaultButton>
      </Stack>
    </div>
  );
}

export default App;
