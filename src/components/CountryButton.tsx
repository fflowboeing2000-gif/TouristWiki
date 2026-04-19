// @ts-nocheck
export default function CountryButton(props) {
  return (
    <>
      <div
        onClick={props.onClick}
        className="my-2 ml-4 flex hover:bg-gray-100 cursor-pointer justify-between items-center border-[1px] border-gray-500 rounded px-2 py-1"
      >
        <div>
          <a>{props.name}</a>
          <p className="text-gray-500">{props.nativeName}</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#6a7282"
        >
          <path d="m320.23-107.69-42.54-42.54L607.46-480 277.69-809.77l42.54-42.54L692.54-480 320.23-107.69Z" />
        </svg>
      </div>
    </>
  );
}
