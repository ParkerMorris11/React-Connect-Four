export default function tile(props) {
  let color = props.color;

  return (
    <div
      onClick={props.tileClick}
      id={props.location}
      class={color + " tile"}
    ></div>
  );
}
