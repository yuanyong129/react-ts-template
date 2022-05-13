import { FC } from 'react';
import { mergeStyleSets, TextField } from '@fluentui/react';

const classNames = mergeStyleSets({
  loginBox: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default (() => {
  return (
    <div className={classNames.loginBox}>
      <div
        style={{
          width: '40vw',
          height: '40vh',
          boxShadow: '0px 0px 3px #000',
          padding: '10px',
          boxSizing: 'border-box',
          borderRadius: '6px',
        }}
      >
        <TextField />
      </div>
    </div>
  );
}) as FC;
