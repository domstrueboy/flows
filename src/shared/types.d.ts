interface Element extends HTMLFormElement {
  value: string;
}

interface Target extends EventTarget {
  elements: Element[];
}

export interface SubmitFormEvent extends React.FormEvent<HTMLFormElement> {
  target: Target;
}
