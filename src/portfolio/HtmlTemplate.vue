<template>
  <p class="icon GettingStarted"></p>
  <h2
    class="mt-[0.5em] mb-[1em] text-2xl text-[#a6192e] dark:text-red-300 sm:mb-6 sm:ml-20"
  >
    Getting Started
  </h2>
  <p class="my-4 text-[#353535] sm:ml-20">
    An example of one of the HTML templates created for the Instructional
    Designers team at Indiana Wesleyan University. The templates provide uniform
    content across the courses students take.
  </p>
  <p class="my-4 text-[#353535] sm:ml-20">
    <strong
      >Upon successful completion of this assignment, you will be able
      to:</strong
    >
  </p>
  <ul class="my-4 pl-10 sm:ml-20">
    <li class="list-disc text-[#353535]">
      Utilize the assignment activity based HTML template
    </li>
    <li class="list-disc text-[#353535]">Build content for courses</li>
  </ul>
  <hr class="clear-both my-2 mx-auto" />

  <p class="icon BackgroundInfo"></p>
  <h2
    class="mt-[0.8em] mb-[1em] text-2xl text-[#a6192e] dark:text-red-300 sm:my-6 sm:ml-20"
  >
    Background Information
  </h2>
  <p class="my-4 text-[#353535] sm:ml-20">
    A total of 18 activity based HTML templates created. Another 23 syllabi HTML
    templates.
  </p>
  <hr class="clear-both my-2 mx-auto" />

  <p class="icon Instructions"></p>
  <h2
    class="mt-[0.8em] mb-[1em] text-2xl text-[#a6192e] dark:text-red-300 sm:my-6 sm:ml-20"
  >
    Instructions
  </h2>
  <ol class="my-4 pl-10 sm:ml-20">
    <li class="list-decimal text-[#353535]">
      Review the rubric to make sure you understand the criteria for earning
      your grade.
    </li>
    <li class="list-decimal text-[#353535]">Complete the assignment.</li>
  </ol>
  <hr class="clear-both my-2 mx-auto" />

  <p class="icon Assignments"></p>
  <h3 class="my-4 ml-[60px] text-xl text-[#353535] dark:text-zinc-50 sm:ml-20">
    Review the associated rubric
  </h3>
  <h3 class="my-4 ml-[60px] text-xl text-[#353535] dark:text-zinc-50 sm:ml-20">
    Access the assignment submission page
  </h3>
</template>

<style scoped lang="scss">
@use "sass:math";

@mixin section-images($Names...) {
  @for $count from 0 to length($Names) {
    $Name: #{nth($Names, $count + 1)};
    .icon.#{$Name} {
      background-image: url("./assets/HTML_#{$Name}.png");
    }
  }
}

@include section-images(
  Assignments,
  BackgroundInfo,
  GettingStarted,
  Instructions
);

.icon {
  float: left;

  display: block;

  margin: math.div(60px - 45px, 2) (60px - 45px) 0.5em 0;
  width: 45px;
  height: 45px;

  background-size: 45px 45px;
  background-repeat: no-repeat;
}

@media print, screen and (min-width: 642px) {
  .icon {
    margin: 0 20px 0 0;
    width: 60px;
    height: 60px;

    background-size: 60px 60px;
  }
}
</style>
