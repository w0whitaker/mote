<script setup>
import MoteBox from '../components/MoteBox.vue';
import MoteButton from '../components/MoteButton.vue';
import ListComponent from '../components/ListComponent.vue';
</script>

<template>
  <MoteBox>
    <template #content>
      <main>
        <MoteBox padding="scant">
          <template #content>
            <h2>components</h2>
            <section>
              <MoteBox padding="narrow">
                <template #content>
                  <h3>introduction</h3>
                  <p>This is Mote, a UI component library for Vue.</p>
                </template>
              </MoteBox>
              <MoteBox padding="wide">
                <template #content>
                  <ListComponent
                    kind="definition"
                    :items="['button', 'list', 'card']"
                  >
                  </ListComponent>
                </template>
              </MoteBox>
            </section>
            <!-- Buttons -->
            <MoteBox padding="narrow">
              <template #content>
                <article id="button">
                  <header>
                    <h3>button</h3>
                    <a href="#top">top</a>
                  </header>
                  <ul role="list">
                    <li>
                      <MoteButton variant="standard" />
                    </li>
                    <li>
                      <MoteButton variant="outlined" />
                    </li>
                    <li>
                      <MoteButton variant="disabled" />
                    </li>
                    <li>
                      <MoteButton variant="clear" />
                    </li>
                  </ul>
                </article>
              </template>
            </MoteBox>
            <!-- Lists -->
            <MoteBox padding="narrow">
              <template #content>
                <article id="list">
                  <header>
                    <h3>list</h3>
                    <a href="#top">top</a>
                  </header>
                  <section>
                    <h4>unordered</h4>
                    <!-- <ListComponent kind="unordered" :items="{}" /> -->
                  </section>
                  <section>
                    <h4>ordered</h4>
                    <!-- <ListComponent kind="ordered" :items="{}" /> -->
                  </section>
                  <section>
                    <h4>definition</h4>
                    <!-- <ListComponent kind="definition" :items="{}" /> -->
                  </section>
                </article>
              </template>
            </MoteBox>
            <!-- Cards -->
            <MoteBox padding="narrow">
              <template #content>
                <article id="card">
                  <header>
                    <h3>tab</h3>
                    <a href="#top">top</a>
                  </header>
                  <MoteCard />
                </article>
              </template>
            </MoteBox>
          </template>
        </MoteBox>
      </main>
    </template>
  </MoteBox>
</template>
<style scoped></style>
