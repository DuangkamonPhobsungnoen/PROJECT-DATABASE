<script setup>
// function readURL(input) {
//   if (input.files && input.files[0]) {
//     var reader = new FileReader();

//     reader.onload = function (e) {
//       $("#pullphoto").attr("src", e.target.result).width(150).height(200);
//     };

//     reader.readAsDataURL(input.files[0]);
//   }
// }
</script>
<template>
  <div class="p-2">
    <h1 class="has-text-centered is-size-1 pb-6 pt-4">Edit</h1>
    <div class="columns">
      <div class="column is-offset-1">
        <div class="select" style="width: 85%">
          <select name="" id="" style="width: 100%" class="" required>
            <!-- ยังไม่รู้ว่าใช้อะไร จำไม่ได้ -->
            <option value="">All</option>
            <option value="">drama</option>
            <option value="">romantic</option>
            <option value="">comedy</option>
            <option value="">anime</option>
            <option value="">series</option>
          </select>
        </div>
      </div>
      <div class="column">
        <div class="select" style="width: 85%">
          <select name="" id="" style="width: 100%" class="" required>
            <!-- ยังไม่รู้แนว -->
            <option value="">Genres</option>
            <option value="">drama</option>
            <option value="">romantic</option>
            <option value="">comedy</option>
            <option value="">anime</option>
            <option value="">series</option>
          </select>
        </div>
      </div>
    </div>
    <div class="columns pt-6">
      <div class="column is-3 is-offset-1">
        <div class="is-align-items-center is-justify-content-center file" style="display: flex" >
          <div class="file-label">
            <img id="pullphoto" src="#" style="width: 260px; height: 300px; border-radius: 8px; border:1px solid #fff;" class=""/>
            <label class="is-size-3" style="position: absolute; left: 40px; top: 110px" > 
            + Addphoto 
            </label>
            <input class="file-input" onchange="readURL(this);" type="file" name="resume"/>
          </div>
        </div>
      </div>
      <div class="column p-5 is-2 is-offset-0">
        <form action="">
          <div class="subtitle is-5 has-text-white">
            <div class="ml-3" style="margin-bottom: 40px">
              <label for="">Title</label>
            </div>
            <div class="ml-3" style="margin-bottom: 40px">
              <label for="">Trailer</label>
            </div>
            <div class="ml-3" style="margin-bottom: 40px">
              <label for="">Director</label>
            </div>
            <div class="ml-3" style="margin-bottom: 40px">
              <label for="">Year</label>
            </div>
            <div class="ml-3" style="margin-bottom: 40px">
              <label for="">Actor</label>
            </div>
          </div>
        </form>
      </div>
      <div class="column is-5">
        <div class="">
          <div>
            <input class="mb-5 input" type="text" name="title" id="title" />
          </div>
          <div>
            <input class="mb-5 input" type="text" name="trailer" id="trailer" />
          </div>
          <div>
            <input
              class="mb-5 input" type="text" name="director" id="director"/>
          </div>
          <div>
            <input class="mb-5 input" type="text" name="year" id="year" />
          </div>
          <div>
            <input class="mb-5 input" type="text" name="actor" id="actor" />
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column is-10 is-offset-1">
        <h1 class="title has-text-white">Story</h1>
        <textarea name="story" id="story" class="textarea" rows="10"></textarea>
      </div>
    </div>
    <div class="columns">
      <div class="column has-text-centered">
        <button type="submit" style="width: 90%" class="button subtitle is-5">
          CANCEL
        </button>
      </div>

      <div class="column has-text-centered">
        <button type="submit" style="width: 90%" class="button subtitle is-5 is-primary is-outlined">
            CONFIRM
        </button>
      </div>
    </div>
  </div>
</template>
