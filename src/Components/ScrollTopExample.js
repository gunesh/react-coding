import React, { useEffect } from 'react';

const ScrollTopExample = () => {
  const dropdownRef = React.useRef(null);

  useEffect(() => {
    console.log(dropdownRef);
  }, [dropdownRef]);

  return (
    <div>
      <div id="container">
        <div id="scroller" ref={dropdownRef}>
          <p>
            Far out in the uncharted backwaters of the unfashionable end of the
            western spiral arm of the Galaxy lies a small unregarded yellow sun.
            Orbiting this at a distance of roughly ninety-two million miles is
            an utterly insignificant little blue green planet whose
            ape-descended life forms are so amazingly primitive that they still
            think digital watches are a pretty neat idea.
          </p>
        </div>
      </div>

      <div id="output">scrollTop: 0</div>
    </div>
  );
};

export default ScrollTopExample;
