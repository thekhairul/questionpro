import MyButton from '@/components/ui/MyButton';
import type { PropsWithChildren } from 'react';
import React, { useState } from 'react';

const MyComponent: React.FC<PropsWithChildren> = ({ children, ...props }) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
    console.log('Button clicked', count);
  };

  const processChildren = (
    children: React.ReactNode,
    firstButtonFound: { current: boolean }
  ): React.ReactNode => {
    return React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        if (child.type === MyButton) {
          if (!firstButtonFound.current) {
            firstButtonFound.current = true;
            return React.cloneElement(
              child as React.ReactElement<{ onClick?: () => void }>,
              {
                onClick: () => handleClick(),
              }
            );
          }
          return React.cloneElement(
            child as React.ReactElement<{ onClick?: () => void }>,
            {
              onClick: undefined, // Disable click for subsequent buttons
            }
          );
        }

        const childProps = child.props as { children?: React.ReactNode };
        if (childProps.children) {
          return React.cloneElement(
            child,
            undefined,
            processChildren(childProps.children, firstButtonFound)
          );
        }
      }
      return child;
    });
  };

  return (
    <div {...props}>
      <p className="mb-2">Hey! you have clicked me {count} times</p>
      {processChildren(children, { current: false })}
    </div>
  );
};

export default MyComponent;
