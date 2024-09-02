const PrimaryButton = ({ children, isCta }) => {
  return (
    <>
      {isCta ? (
        <button className="group text-base leading-[17.6px] px-8 pr-3 py-3 bg-[var(--spectra-green-light)] text-[var(--text-black)] rounded-full flex items-center gap-6 transition-transform">
          {children}

          <div className="rounded-full bg-[var(--button-black)] w-10 h-10 flex justify-center items-center">
            <svg
              className="transform transition-transform duration-300 group-hover:rotate-45"  
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.99958 1.00002C9.99958 0.585811 9.66379 0.250024 9.24958 0.250024L2.49958 0.250024C2.08537 0.250024 1.74958 0.58581 1.74958 1.00002C1.74958 1.41424 2.08537 1.75002 2.49958 1.75002H8.49958V7.75002C8.49958 8.16424 8.83537 8.50002 9.24958 8.50002C9.66379 8.50002 9.99958 8.16424 9.99958 7.75002L9.99958 1.00002ZM1.53033 9.77993L9.77991 1.53035L8.71925 0.469694L0.46967 8.71927L1.53033 9.77993Z"
                fill="#26CA57"
              />
            </svg>
          </div>
        </button>
      ) : (
        <button className="text-base px-8 py-4 bg-[var(--spectra-green-light)] text-[var(--text-black)] rounded-full flex items-center gap-6">
          {children}
        </button>
      )}
    </>
  );
};

export default PrimaryButton;
