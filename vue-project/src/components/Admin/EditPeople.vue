<script setup>
</script>

<template>
    <div class="p-6">
      <h1 class="has-text-centered is-size-1 pb-6 pt-4">Edit</h1>
      <div class="columns pt-6">
        <div class="column is-3 is-offset-1">
          <div class="is-align-items-center is-justify-content-center" style="display:flex;">
            <a style="width: 260px; height:300px; border-radius: 8px; border:1px solid #fff;" class="">
              <div class="is-size-3" style="position:relative; left:40px; top:110px;">
                + Addphoto
              </div>
            </a>
          </div>
        </div>
        <div class="column  p-5 is-2 is-offset-0 ">
          <form action="">
            <div class="subtitle is-4 mt-4 has-text-white">
              <div class="mb-6">
                <label for="" >First Name</label>
              </div>
              <div class="mb-6">
                <label for="" >Last Name</label> 
              </div>
              <div class="mb-6">
                <label for="" >Birthday</label> 
              </div>
              <div class="mb-6">
                <label for="" >Nationality</label> 
              </div>
            </div>
          </form>
        </div>
        <div class="column is-5 p-5">
          <div class="mt-3">
            <div><input class="is-medium mb-5 input" type="text" name="firstname" id="firstname"></div>
            <div><input class="is-medium mb-5 input" type="text" name="lastname" id="lastname"></div>
            <div><input class="is-medium mb-5 input" type="text" name="birthday" id="birthday"></div>
            <div><input class="is-medium mb-5 input" type="text" name="nationality" id="nationality"></div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column has-text-centered" >
          <button type="submit" style="width:90%;" class="button subtitle is-5">CANCEL</button>
        </div>

        <div class="column has-text-centered">
          <button type="submit" style="width:90%;" class="button subtitle is-5 is-primary is-outlined">CONFIRM</button>
        </div>
      </div>
    </div>
</template>
