<template>
  <!DOCTYPE html>
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Hello Bulma!</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
  </head>
  <body>
    <div class="columns">
      <div class="column is-2"></div>

      <div class="column is-2">
        <figure class="image is-128x128 ">
          <img
            class="is-rounded"
            src="https://cdn.discordapp.com/attachments/1087447051387813909/1087617962984357918/Ellipse_7.png"
          />
        </figure>
        <span>
          <p class="is-size-3">Admin</p>
          <p class="control has-icons-left">
            <input class="input" type="text" placeholder="Search" />
            <span class="icon is-left">
              <i class="fa fa-search" aria-hidden="true"></i>
            </span>
          </p>
        </span>
      </div>
      <div class="column is-8"></div>
    </div>
  </body>
</template>

<script>
export default {};
</script>

<style>
</style>