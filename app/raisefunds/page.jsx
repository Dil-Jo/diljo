const RaiseFunds = () => {
  return (
    <>
      <div className="h-screen w-screen mt-8 flex bg-slate-400 rounded-l-3xl">
        <div className="w-2/6 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-medium tracking-tight text-slate-700 sm:text-4xl mb-8">Let's lend a hand to someone,</h2>
        <h2 className="text-3xl font-semi-bold tracking-tight text-blue-900 sm:text-5xl">who really needs it.</h2>
        </div>
        <div className="w-4/6 bg-slate-300 rounded-l-3xl shadow-xl">
          
<h3 class="mb-5 text-lg font-medium text-gray-900 dark:text-white">What is the reason behind this Fundraising?</h3>
<ul class="grid w-full gap-6 md:grid-cols-2">
    <li>
        <input type="radio" id="education" name="education" value="education" class="hidden peer" required>
        <label htmlFor="education" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
            <div class="block">
                <div class="w-full text-lg font-semibold">Education</div>
            </div>
        </label>
   </input> </li>
    <li>
        <input type="radio" id="emergency" name="emergency" value="emergency" class="hidden peer">
        <label for="emergency" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div class="block">
                <div class="w-full text-lg font-semibold">Emergencies</div>
            </div>
          </label>
   </input> 
   </li>
</ul>

        </div>
      </div>
    </>
  );
};
export default RaiseFunds;
