export default function TermsAndConditions() {
  return <>
    <input type="checkbox" id="terms-and-conditions" className="modal-toggle" />
    <div className="modal">
      <div className="modal-box relative">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          
          <label
            htmlFor="terms-and-conditions"
            className="btn-sm btn absolute right-2 top-2 border-0 bg-white text-black hover:text-white"
          >
            x
          </label>
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Terms and Conditions
            </h3>
          </div>
          <div className="p-6 space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
              companies around the world are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
              to ensure a common set of data rights in the European Union. It requires organizations to notify users as
              soon as possible of high-risk data breaches that could personally affect them.
            </p>
          </div>
        </div>
      </div>
    </div>
  </>;
}