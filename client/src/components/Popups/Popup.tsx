//creat by Min-Xuan

type PopupProps = {
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
};

export type PopupPropsWithoutChildren = Omit<PopupProps, 'children'>;

const Popup = ({ children, isOpen, handleClose }: PopupProps) => {
  return (
    <>
      {isOpen ? (
        <section
          className="fixed w-full h-full top-0 left-0 z-[99999999] bg-black/50 dark:bg-white/30 backdrop-blur-sm"
          onClick={handleClose}
        >
          <div
            className="fixed max-w-xl w-full top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-light-1 rounded-[10px]"
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </section>
      ) : (
        <></>
      )}
    </>
  );
};

export default Popup;
