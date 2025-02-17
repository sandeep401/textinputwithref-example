import React from 'react';
const TextInputWithRef = React.forwardRef((props, ref) => {
  return <input ref={ref} type="text" {...props} />;
});
export default TextInputWithRef;
