# CSSProperties

```tsx
import { CSSProperties } from "react";

const App = () => {
  return <Child id="child" style={{ top: 10, left: 10 }} />;
};

interface IChildProps {
  id: string;
  style?: CSSProperties;
}

const Child: React.FC<IChildProps> = (props) => {
  const { style } = props;

  return <div style={style}></div>;
};
```
