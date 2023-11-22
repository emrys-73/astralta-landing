<script>
  import { animate } from '../../stores.js';
  export let data;

</script>

<div class="w-full h-full flex justify-center items-center flex-col">
    <div class="w-full h-3/4 flex justify-center items-center flex-col">
        <span class="font-extrabold text-5xl tracking-wider">
            GPTs
        </span>
        <span class="text-xl leading-7 font-extralight bg-black bg-opacity-20 backdrop-blur-md rounded-xl py-8 w-full px-12 xl:w-1/2 text-center">
            Hand-picked GPTs for all cases
        </span>

        <!-- search bar -->
        <div class="w-full sm:w-3/4 xl:w-1/2 px-12">
          <form class="form" action="?/searchGpts" method="POST">
            <label for="search">
                <input class="input" type="text" placeholder="Describe what you want" id="search">
                <div class="fancy-bg"></div>
                <div class="search">
                    <svg viewBox="0 0 24 24" aria-hidden="true" class="r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-4wgw6l r-f727ji r-bnwqim r-1plcrui r-lrvibr">
                        <g>
                            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                        </g>
                    </svg>
                </div>
                <button class="close-btn" type="reset">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                </button>
            </label>
        </form>
        </div>
    </div>

    <div class="w-full overflow-x-auto px-6 xl:px-40">
        <table class="table">
          <!-- head -->
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Description</th>
              <th>Creator</th>
            </tr>
          </thead>
          <tbody>
            <!-- row 1 -->
            {#each data.gpts as gpt}
            <tr>
              <td class="flex">
                <a href={gpt.url}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="{$animate} w-6 h-6 stroke-[#228bfa] hover:w-8 hover:stroke-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25" />
                      </svg>                      
                </a>
              </td>
              <td class="max-w-[180px] overflow-auto">
                <div class="flex items-center justify-start">
                  <div>
                    <div class="font-bold">{gpt.name}</div>
                  </div>
                </div>
              </td>
              <td>
                {gpt.description}
              </td>
              <td>{gpt.creator}</td>
              
            </tr>  
            {/each}
            
            
           </tbody>
        </table>
      </div>

</div>