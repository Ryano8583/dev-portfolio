<script setup lang="ts">
import BaseTabMenu from "./components/BaseTabMenu.vue";
import LayoutColumn from "@/components/LayoutColumn.vue";
</script>

<template>
  <LayoutColumn>
    <BaseTabMenu tab-count="4">
      <template #headingOne>Importance of Accessibility</template>
      <template #headingTwo>What is WCAG</template>
      <template #headingThree>Conformity</template>
      <template #headingFour>What it Means to Me</template>

      <template #panelOne>
        <p>
          The Internet is a resource that everyone has the right to freely and
          easily use. Unfortunately, most sites today are not accessible to
          people who have specific disabilities. At worst, this site will not be
          usable for the user, forcing them to leave the site and find another
          that is more adept to their needs.
        </p>
      </template>
      <template #panelTwo>
        <p>
          Web Content Accessibility Guidelines (WCAG) are a set of standards for
          web accessibility produced by the World Wide Web Consortium (W3C). The
          most current version of WCAG is 2.1.
        </p>
        <p>
          WCAG 2.1 has four main principles: perceivable, operable,
          understandable, and robust. There are over 70 standards for the
          guideline.
        </p>
      </template>
      <template #panelThree>
        <p>
          There are three conformance levels for WCAG 2.1: A, AA, and AAA.
          Satisfying all Level A standards is the minimum level of conformance
          websites must meet. While meeting all Level AAA standards is the best
          outcome, it is only feasible for some websites.
        </p>
      </template>
      <template #panelFour>
        <p>
          One of my top five personality traits is empathy. When I first learned
          about the methods some people with certain disabilities use to
          navigate the Internet and all the barriers they face when websites are
          not accessible to them, it struck a chord with me.
        </p>
        <p>
          Therefore, I have made it my goal to learn as much as possible about
          web accessibility to ensure the content I produce is accessible to
          all.
        </p>
      </template>
    </BaseTabMenu>

    <BaseTabMenu tab-count="3" use-vertical>
      <template #headingOne>Contrast</template>
      <template #headingTwo>Link Text</template>
      <template #headingThree>Keyboard</template>

      <template #panelOne>
        <p>
          Ensuring all colors on your site meet contrast standards is an easy
          way to improve its accessibility. There is one standard level for
          graphical objects and two levels for text. At the least, the lower
          standard level has to be met, though it is best to achieve the higher
          level whenever possible.
        </p>
        <p>
          There are many sites and resources you can use for checking color
          contrast. The one I prefer to use is
          <a href="https://webaim.org/resources/contrastchecker/"
            >WebAIM's Contrast Checker</a
          >.
        </p>
        <p>
          Meeting some WCAG standards is one of many benefits of improving your
          site's color contrast. It will also enhance the overall UI of your
          site.
        </p>
      </template>
      <template #panelTwo>
        <p>
          Providing descriptive text for links so that they make sense out of
          context is another easy way to improve the accessibility of a site.
          Not only does having descriptive text make your content more legible,
          but it vastly benefits individuals using a screen reader.
        </p>
        <p>
          A feature most screen readers have is the ability to state all the
          links on the current page. If all the links use general text, such as
          "click here" or "this page," the user will not know where they
          navigate.
        </p>
        <p>
          It is typical to see a site's URL used for the link's text. When a
          screen reader encounters this, it will read every character
          individually. Hearing this would not only be unpleasant, but it also
          does not help the user understand where it navigates.
        </p>
        <p>
          Tip: do not use the word "link" in the text for your link; screen
          readers say "link" before reading its text, so using it is
          unnecessary.
        </p>
      </template>
      <template #panelThree>
        <p>
          There are two main parts to make your site accessible for keyboard
          navigation.
        </p>
        <p>
          The first part is to ensure that every interactive element is
          accessible via a keyboard. While all interactive HTML5 elements are
          inherently accessible, a site often uses a non-interactive element,
          such as a div, as a button. You must add the [tab-index="0"] attribute
          to the element to make it accessible via a keyboard.
        </p>
        <p>
          While making all interactive elements accessible via a keyboard is
          essential, it is not too helpful if the element's styling does not
          make it visually apparent when it is in focus. Therefore, the second
          part is to ensure the user's current focus on the page has the styling
          to be easily visible.
        </p>
      </template>
    </BaseTabMenu>
  </LayoutColumn>
</template>
