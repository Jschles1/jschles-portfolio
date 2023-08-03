import ReactDOM from "react-dom";

function Modal({ children }: { children: React.ReactNode }) {
  return ReactDOM.createPortal(
    <div className="absolute z-50 min-h-screen h-full w-screen top-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
      <div className="p-8 bg-white rounded-md shadow-md mx-auto min-w-[350px]">
        {children}
      </div>
    </div>,
    document.getElementById("modal-root") as Element
  );
}

export default Modal;
