// @ts-nocheck
export default function AddButton(props) {
  
  return (<>
    <a onClick={props.onClick} className="cursor-pointer py-2 px-30 text-white hover:bg-green-600  bg-green-700 rounded">{props.title}</a>
  </>)
}