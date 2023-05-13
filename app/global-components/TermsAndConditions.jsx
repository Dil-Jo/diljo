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
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Terms and Conditions
            </h3>
          </div>
          <div className="p-6 space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Welcome to Dil-Jo. By using our website, you agree to be bound by these terms and conditions ("Terms of Service"). If you do not agree to these Terms of Service, please do not use our website.

            </p>
            <ul className={"list-disc"}>
              <li className={"text-base leading-relaxed text-gray-500 dark:text-gray-400"}>
                <span className={"font-semibold"}>Use of Dil-Jo Platform</span><br/>
                Dil-Jo provides a platform for charitable donations and non-profit organizations. We do not represent or endorse any of the organizations listed on our platform, nor do we guarantee the accuracy of the information posted by these organizations. Donors are solely responsible for verifying the legitimacy of the organizations and causes they choose to support.
              </li>
              <br/>
            
              <li className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              <span className={"font-semibold"}>Donations</span><br/>
              
              Dil-Jo facilitates the donation process by connecting donors with charities and non-profit organizations. All donations made through our platform are subject to our Privacy Policy, which is incorporated into these Terms of Service. Donors are responsible for ensuring that their donation information is accurate and up-to-date.
            
            </li><br/>
            <li className={"text-base leading-relaxed text-gray-500 dark:text-gray-400"}>
              <span className={"font-semibold"}>Refunds</span><br/>
              
              Donations made through Dil-Jo are final and non-refundable. If you believe that an error has occurred in your donation, please contact us immediately at [contact email address] to resolve the issue.
            
            </li><br/>
            <li className={"text-base leading-relaxed text-gray-500 dark:text-gray-400"}>
              <span className={"font-semibold"}>User Conduct</span><br/>
              
              By using our website, you agree to conduct yourself in a respectful and professional manner. You agree not to use our website for any unlawful purposes or to engage in any behavior that may harm or disrupt the platform, its users, or any third parties.
            
            </li><br/>
            <li className={"text-base leading-relaxed text-gray-500 dark:text-gray-400"}>
              
              <span className={"font-semibold"}>Intellectual Property</span><br/>
              
              The content on Dil-Jo is protected by copyright laws and is the property of Dil-Jo or its licensors. You may not use our content without express written permission.
            
            </li><br/>
            </ul>
          </div>
        </div>




      </div>
    </div>
  </>;
}