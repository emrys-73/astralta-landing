<script>
// @ts-nocheck

  import { onMount } from 'svelte';

  var words = ['Students', 'Business Owners', 'Creators' ];
  var part = '';
  var i = 0;
  var offset = 0;
  var len = words.length;
  var forwards = true;
  var skip_count = 0;
  var skip_delay = 15;
  var speed = 70;

  let wordElement;

  function wordflick() {
    setInterval(function () {
      if (forwards) {
        if (offset >= words[i].length) {
          ++skip_count;
          if (skip_count === skip_delay) {
            forwards = false;
            skip_count = 0;
          }
        }
      } else {
        if (offset === 0) {
          forwards = true;
          i++;
          offset = 0;
          if (i >= len) {
            i = 0;
          }
        }
      }
      part = words[i].substr(0, offset);
      if (skip_count === 0) {
        if (forwards) {
          offset++;
        } else {
          offset--;
        }
      }
      wordElement.textContent = part;
    }, speed);
  }

  onMount(() => {
    wordElement = document.querySelector('.word');
    wordflick();
  });
</script>

<!-- Add this HTML element with the "word" class -->
<section class="items-center flex-col flex h-[200px] pt-10 xl:pt-20 pb-2">
  <div class="min-w-full relative">
    <h1 class="text-4xl pl-10 pr-10 md:text-5xl xl:text-6xl text-center text-true-white justify-center mt-20 font-bold">
      <div class="text-base-gray">Made for </div>
      <div class="word text-true-white"></div>
    </h1>
  </div>
</section>

