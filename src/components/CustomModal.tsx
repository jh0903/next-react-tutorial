import { useContext } from 'react';
import { ModalContext } from './modal-provider';

export default function CustomModal() {
  const { state, dispatch } = useContext(ModalContext);

  return (
    <div className="relative w-full h-full z-10">
      <div className="relative w-80 bg-white z-20">
        <h2>{state.title}</h2>

        <p>{state.description}</p>

        <div className="flex flex-row">
          {state.useConfirmButton ? (
            <button
              type="button"
              className="inline-block w-full"
              onClick={() => {
                state.confirmCallback && state.confirmCallback();
              }}
            >
              {state.confirmButton ?? '확인'}
            </button>
          ) : (
            <></>
          )}
          {state.useCancleButton ? (
            <button
              type="button"
              className="inline-block w-full"
              onClick={() => {
                state.cancelCallback && state.cancelCallback();
              }}
            >
              {state.cancelCallback ?? '취소'}
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>

      <div className="fixed top-0 left-0 w-full h-full bg-slate-500 z-0 opacity-50" />
    </div>
  );
}
