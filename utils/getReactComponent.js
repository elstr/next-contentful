
import * as components from "../components";

// 1st approach
const Components = {
  atf: fields => <components.Atf {...fields} />,
  button: props => <components.Button {...props} />
};
export const getReactComponent = c => Components[c.sys?.contentType?.sys.id];



// 2nd approach
const Components2 = {
  atf: components.Atf,
  button: components.Button
};

const getComponent = c => Components2[c.sys?.contentType?.sys.id];

export function renderer(c) {
  const component = getComponent(c)
  if (typeof component !== "undefined") {
    return React.createElement(
      component,
      c.fields,
      null // children -> use composite: c.fields != string ? renderer(c.fields.fields) : c.fields || or whatever contentful returns
    );
  }
}

