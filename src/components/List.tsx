import * as React from "react";
interface Props<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

export default function List<T>(props: Props<T>) {
  const {items, renderItem} = props;
  const [state, setState] = React.useState<T>([]);

  return (
    <div>
      {items.map(renderItem)}
    </div>
  )
}