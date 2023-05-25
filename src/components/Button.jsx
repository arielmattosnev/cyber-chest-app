const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-logoname font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px] hover:scale-110 duration-300 ${styles}`}
    >
      Comece
    </button>
  );
};

export default Button;
