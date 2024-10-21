import "./UListItem.scss";

type props = {
  element: JSX.Element;
};

function UListItem({ element }: props) {
  return (
    <li>
      <b>•</b>
      {element}
    </li>
  );
}

export default UListItem;
