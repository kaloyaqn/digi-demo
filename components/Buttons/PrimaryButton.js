const PrimaryButton = ({ children, isCta, isBig }) => {
  if (isBig) {
    return (
      <button className="group font-semibold text-2xl leading-[17.6px] px-12 pr-6 py-6 bg-[var(--spectra-green-light)] text-[var(--text-black)] rounded-full flex items-center gap-6 transition-transform">
        {children}

        <div className="rounded-full bg-[var(--button-black)] w-14 aspect-square flex justify-center items-center">
          <svg
            className="transform transition-transform duration-300 group-hover:rotate-45"
            width="12"
            height="11"
            viewBox="0 0 12 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.2496 0.999933C11.2496 0.447648 10.8019 -6.77395e-05 10.2496 -6.7318e-05L1.24958 -6.75288e-05C0.697295 -6.75288e-05 0.249579 0.447648 0.249579 0.999933C0.249579 1.55222 0.697295 1.99993 1.24958 1.99993L9.24958 1.99993L9.24958 9.99993C9.24958 10.5522 9.69729 10.9999 10.2496 10.9999C10.8019 10.9999 11.2496 10.5522 11.2496 9.99993L11.2496 0.999933ZM2.70711 9.95662L10.9567 1.70704L9.54247 0.292826L1.29289 8.5424L2.70711 9.95662Z"
              fill="white"
            />
          </svg>
        </div>
      </button>
    );
  }

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
