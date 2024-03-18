<script setup lang="ts">
import { onBeforeUnmount, onMounted } from "vue";
import { observerHeadings } from "@/composables/intersectionObserver";

import LayoutColumn from "@/components/LayoutColumn.vue";
import LayoutSection from "@/components/LayoutSection.vue";

import TheMain from "@/components/TheMain.vue";

onMounted(timeToObserve);
onBeforeUnmount(() => {
  observerHeadings.disconnect();
});

function timeToObserve() {
  const targets = document.querySelectorAll("section");
  for (const target of targets) {
    observerHeadings.observe(target);
  }
}
</script>

<template>
  <TheMain>
    <LayoutSection id="section-1" heading="Contact" use-blue>
      <div
        class="opacity-0 translate-y-48 transition-fade duration-200"
        data-transitional-content
      >
        <p>Ryan Overmyer</p>
        <p>ryano8583@gmail.com</p>
      </div>
    </LayoutSection>

    <LayoutSection id="section-2" heading="Education" use-green>
      <div
        class="opacity-0 translate-y-48 transition-fade duration-200"
        data-transitional-content
      >
        <p>Indiana Wesleyan University</p>
        <p>Marion, IN 46953</p>
        <p>Bachelor of Science: Marketing</p>
      </div>
    </LayoutSection>

    <LayoutSection id="section-3" heading="Work Experience" use-purple>
      <LayoutColumn
        class="opacity-0 translate-y-48 transition-fade duration-200"
        data-transitional-content
      >
        <div>
          <p>Information Technology</p>
          <p>Indiana Wesleyan University</p>
          <p>March 2017 - Present</p>
          <p>LMS Administrator</p>
        </div>

        <div>
          <p>Facilities Services</p>
          <p>Indiana Wesleyan University</p>
          <p>March 2013 - March 2017</p>
          <p>Assistant to Business Manager</p>
        </div>

        <div>
          <p>Liberty National Life Insurance</p>
          <p>Carmel, IN 46032</p>
          <p>July 2016 - October 2016</p>
          <p></p>
        </div>

        <div>
          <p>Coldwell Banker Preferred Realtors: The Packer Group</p>
          <p>Plymouth, MI 48170</p>
          <p>May 2015 - June 2015</p>
          <p>Marketing/Realtor Intern</p>
        </div>
      </LayoutColumn>
    </LayoutSection>

    <LayoutSection id="section-4" heading="Accomplishments" use-orange>
      <div
        class="opacity-0 translate-y-48 transition-fade duration-200"
        data-transitional-content
      >
        <ul class="pl-4 list-inside list-disc">
          <li>
            Created 41 HTML template files and six custom content items used for
            providing coursework
            <ul class="pl-4 list-inside list-[circle]">
              <li>
                Together, all the content meets 31 WCAG 2.1 accessibility
                standards and violates none
              </li>
              <li>
                You can review one of the HTML templates and all six of the
                custom content items on the "Portfolio" page of this site
              </li>
            </ul>
          </li>
          <li>
            Built two widgets to automate manual processes, both of which use
            multiple API fetch calls
          </li>
          <li>
            Led the development of the UI for the new Distributed Web Apps
            project
            <ul class="pl-4 list-inside list-[circle]">
              <li>Created 28 components</li>
            </ul>
          </li>
          <li>
            Assisted with the development of software that integrates the
            enterprise system with the learning management system to automate
            the creation and management of courses and users
            <ul class="pl-4 list-inside list-[circle]">
              <li>
                The software was complex to develop given all the inner workings
                and possible scenarios that can occur related to courses,
                registration of students, and assigning of faculty
              </li>
              <li>
                Made the testing plan for all the various scenarios, which ended
                up being a 31-page long document
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </LayoutSection>
  </TheMain>
</template>
