<script setup>
import SiteHeader from '../components/SiteHeader.vue';
import SiteFooter from '../components/SiteFooter.vue';
import MoteButton from '../components/MoteButton.vue';
import Paragraph from '../content/paragraph.js';
</script>

<template>
  <div class="site-container">
    <SiteHeader />
    <main>
      <h2>components</h2>
      <section>
        <h3>introduction</h3>
        <p>{{ Paragraph.template }}</p>
        <ol>
          <li>
            <a href="#button">button</a>
            <p>a button performs an action.</p>
          </li>
          <li>
            <a href="#list">list</a>
            <p>a list arranges related item</p>
          </li>
          <li>
            <a href="#menu">menu</a>
            <p>a menu presents choices</p>
          </li>
          <li>
            <a href="toggle">toggle</a>
            <p>a toggle switches between two states</p>
          </li>
          <li>
            <a href="tab">tab</a>
            <p>a tab is a section or article separated visuallly</p>
          </li>
        </ol>
      </section>
      <article id="button">
        <header>
          <h3>button</h3>
          <a href="#top">top</a>
        </header>
        <MoteButton />
      </article>
      <article id="list">
        <header>
          <h3>list</h3>
          <a href="#top">top</a>
        </header>
      </article>
      <article id="menu">
        <header>
          <h3>menu</h3>
          <a href="#top">top</a>
        </header>
      </article>
      <article id="toggle">
        <header>
          <h3>toggle</h3>
          <a href="#top">top</a>
        </header>
      </article>
      <article id="tab">
        <header>
          <h3>tab</h3>
          <a href="#top">top</a>
        </header>
      </article>
    </main>
  </div>
  <SiteFooter />
</template>
<style scoped>
article > header {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

article > header > * {
  flex-basis: 35%;
}
</style>
