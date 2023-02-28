<script setup>
import MoteBox from '../components/MoteBox.vue';
import MoteButton from '../components/MoteButton.vue';
import MoteList from '../components/MoteList.vue';
import CardContainer from '../components/CardContainer.vue';
import BannerContainer from '../components/BannerContainer.vue';
import InputContainer from '../components/InputContainer.vue';

const toc = [
  {
    term: 'button',
    description: 'a button is a clickable element that performs an action',
  },
  {
    term: 'list',
    description: 'a list is a collection of items',
  },
  {
    term: 'card',
    description: 'a card is a container for displaying important content',
  },
  {
    term: 'banner',
    description: 'a banner is a banner',
  },
  {
    term: 'input',
    description: 'an input is an input',
  },
];
</script>

<template>
  <!-- Site wrapper -->
  <MoteBox>
    <template #content>
      <main>
        <!-- Main content -->
        <MoteBox padding="scant">
          <template #content>
            <h2>components</h2>
            <section>
              <!-- Introduction -->
              <MoteBox padding="narrow">
                <template #content>
                  <h3>introduction</h3>
                  <p>This is Mote, a UI component library for Vue.</p>
                </template>
              </MoteBox>
              <!-- Table of Contents -->
              <MoteBox padding="wide">
                <template #content>
                  <MoteList
                    kind="description"
                    :items="toc"
                    :decoration="true" />
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
                  <ul role="list" class="flow">
                    <li>
                      <MoteButton variant="solid" />
                    </li>
                    <li>
                      <MoteButton variant="outline" />
                    </li>
                    <li>
                      <MoteButton variant="disabled" />
                    </li>
                    <li>
                      <MoteButton variant="subtle" />
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
                    <MoteList
                      kind="unordered"
                      :items="[
                        {
                          term: 'gloomy',
                          link: true,
                          target: 'www.google.com',
                        },
                        {
                          term: 'brooklyn',
                          link: false,
                          target: 'williamwhitaker.dev',
                        },
                        { term: 'brownstone', link: true, target: '#' },
                      ]">
                    </MoteList>
                  </section>
                  <section>
                    <h4>ordered</h4>
                    <MoteList
                      kind="ordered"
                      :items="['first item', 'second item', 'third item']">
                    </MoteList>
                  </section>
                  <section>
                    <h4>description</h4>
                    <MoteList
                      kind="description"
                      :items="[
                        { term: 'term 1', description: 'description 1' },
                        {
                          term: ['term 2', 'term 2.1', 'term 2.2'],
                          description: 'description 2',
                        },
                        {
                          term: 'term 3',
                          description: [
                            'description 3',
                            'description 3 pt.2',
                            'description 3 pt. 3',
                          ],
                        },
                      ]">
                    </MoteList>
                  </section>
                </article>
              </template>
            </MoteBox>
            <!-- Cards -->
            <MoteBox padding="narrow">
              <template #content>
                <article id="card">
                  <header>
                    <h3>card</h3>
                    <a href="#top">top</a>
                  </header>
                  <CardContainer>
                    <template #content>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Velit vero quas cupiditate id voluptatum voluptatibus.
                        Ipsa, sunt quod eveniet tempore nulla minima ducimus
                        quae repellendus ratione eum! Quaerat, nam perspiciatis!
                      </p>
                    </template>
                  </CardContainer>
                </article>
              </template>
            </MoteBox>
            <!-- Banner -->
            <MoteBox padding="narrow">
              <template #content>
                <article id="banner">
                  <header>
                    <h3>banner</h3>
                    <a href="#top">top</a>
                  </header>
                  <BannerContainer>
                    <template #content>
                      <p>I'm a banner, not a bananna.</p>
                    </template>
                  </BannerContainer>
                </article>
              </template>
            </MoteBox>
            <!-- Input -->
            <MoteBox padding="narrow">
              <template #content>
                <article id="input">
                  <header>
                    <h3>input</h3>
                    <a href="#top">top</a>
                  </header>
                  <InputContainer>
                    <template #content>
                      <p>I'm an input, not a bananna.</p>
                    </template>
                  </InputContainer>
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
