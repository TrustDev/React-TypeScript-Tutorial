import * as React from "react";

interface IProps {
  prop1: string,
  prop2: number,
  myFunction: () => void,
  prop3?: boolean
}

export default function MyComponent({...props}: IProps) {
  return (
    <div>
      My component
    </div>
  )
}
