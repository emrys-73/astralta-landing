<div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <!--
      Background backdrop, show/hide based on modal state.
  
      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    -->
    <div class="fixed inset-0 bg-black bg-opacity-40 transition-opacity"></div>
  
    <div class="fixed inset-0 z-10 overflow-y-auto backdrop-blur-lg">
      <div class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0 flex-col">
        <!--
          Modal panel, show/hide based on modal state.
  
          Entering: "ease-out duration-300"
            From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            To: "opacity-100 translate-y-0 sm:scale-100"
          Leaving: "ease-in duration-200"
            From: "opacity-100 translate-y-0 sm:scale-100"
            To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        -->

      <!-- <div class="bg-white rounded-2xl min-h-[400px] min-w-[450px] bg-opacity-40">
        hi


      </div> -->

        <!-- <div class="w-full max-w-md pt-2">
          <button class="btn bg-true-black w-full bg-opacity-10 backdrop-blur-md text-xl hover:bg-opacity-20 hover:bg-gray-500 rounded-full text-true-white font-semibold btn-md border-none normal-case drop-shadow-2xl " type="submit">
              <div class="px-1.5 font-regular">
                  Sign me up
              </div>
          </button>
      </div> -->



        <div class="bg-true-white bg-opacity-20  rounded-3xl min-h-full">
          <div class="relative transform overflow-hidden rounded-lg shadow-xl transition-all sm:w-full sm:max-w-lg">
            <div class=" px-4 pt-5 sm:p-6 sm:pb-4 ">
              <div class="sm:flex sm:items-start ">
                <!-- <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <svg class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                </div> -->
                <div class="mt-3 text-center sm:mt-0">
                  <h3 class="text-xl text-center font-semibold leading-6 text-true-white pb-6 pt-8" id="modal-title">
                    <slot name="header"/>
                  </h3>
                  <!-- Fix the margin here! -->
                  <div class="mt-2 items-center justify-center">
                    <slot name="image" />
                    <!-- <img src="nicebro.png" alt="nice" class="rounded-xl my-6"> -->
                  </div>
                  <!-- <div class="w-full max-w-md pt-2">
                    <button class="btn bg-true-black w-full bg-opacity-10 backdrop-blur-md text-xl hover:bg-opacity-20 hover:bg-gray-500 rounded-full text-true-white font-semibold btn-md border-none normal-case drop-shadow-2xl " type="submit">
                        <div class="px-1.5 font-regular">
                            Sign me up
                        </div>
                    </button>
                </div> -->
                  <div class="mt-2">
                    <p class="text-md text-true-white text-center pt-4">
                      <slot name="sub"/>
                    </p>
                  </div>
                  
                  <div class="items-center content-center justify-center">

                      <slot name="backlink"/>
                  </div>


                </div>
              </div>
            </div>
            <!-- <div class="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button type="button" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Deactivate</button>
              <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
            </div> -->
          </div>

        </div>
        
      </div>
    </div>
  </div>