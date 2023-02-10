<script setup>
import SiteHeader from "../components/SiteHeader.vue";
import SiteFooter from "../components/SiteFooter.vue";
import MoteStack from "../components/MoteStack.vue";
import MoteBox from "../components/MoteBox.vue";
import MoteButton from "../components/MoteButton.vue";
import Paragraph from "../content/paragraph.js";
</script>

<template>
  <MoteStack>
    <template v-slot:elements>
      <SiteHeader />
      <div class="m-container">
        <main>
          <article>
            <MoteStack>
              <template v-slot:elements>
                <h2>Boxes</h2>
                <div class="m-grid">
                  <!-- small padding -->
                  <section>
                    <MoteBox padding="none">
                      <template v-slot:content>
                        <MoteStack>
                          <template v-slot:elements>
                            <MoteBox class="invert" padding="narrow">
                              <template v-slot:content>
                                <header>
                                  <h3>small</h3>
                                </header>
                              </template>
                            </MoteBox>
                            <MoteBox padding="narrow">
                              <template v-slot:content>
                                <p v-html="Paragraph.template"></p>
                              </template>
                            </MoteBox>
                          </template>
                        </MoteStack>
                      </template>
                    </MoteBox>
                  </section>
                  <!-- medium padding -->
                  <section>
                    <MoteBox padding="none">
                      <template v-slot:content>
                        <MoteStack>
                          <template v-slot:elements>
                            <MoteBox class="invert" padding="normal">
                              <template v-slot:content>
                                <header>
                                  <h3>medium</h3>
                                </header>
                              </template>
                            </MoteBox>
                            <MoteBox padding="normal">
                              <template v-slot:content>
                                <p v-html="Paragraph.template"></p>
                              </template>
                            </MoteBox>
                          </template>
                        </MoteStack>
                      </template>
                    </MoteBox>
                  </section>
                  <!-- large padding -->
                  <section>
                    <MoteBox padding="none">
                      <template v-slot:content>
                        <MoteStack>
                          <template v-slot:elements>
                            <MoteBox class="invert" padding="wide">
                              <template v-slot:content>
                                <header>
                                  <h3>large</h3>
                                </header>
                              </template>
                            </MoteBox>
                            <MoteBox padding="wide">
                              <template v-slot:content>
                                <p v-html="Paragraph.template"></p>
                              </template>
                            </MoteBox>
                          </template>
                        </MoteStack>
                      </template>
                    </MoteBox>
                  </section>
                  <!-- jumbo padding -->
                  <section>
                    <MoteBox padding="none">
                      <template v-slot:content>
                        <MoteStack>
                          <template v-slot:elements>
                            <MoteBox class="invert" padding="jumbo">
                              <template v-slot:content>
                                <header>
                                  <h3>jumbo</h3>
                                </header>
                              </template>
                            </MoteBox>
                            <MoteBox padding="jumbo">
                              <template v-slot:content>
                                <p v-html="Paragraph.template"></p>
                              </template>
                            </MoteBox>
                          </template>
                        </MoteStack>
                      </template>
                    </MoteBox>
                  </section>
                </div>
              </template>
            </MoteStack>
          </article>
          <article>
            <MoteStack>
              <template v-slot:elements>
                <h2>Buttons</h2>
                <div class="m-grid">
                  <section>
                    <h3>Default</h3>
                    <MoteBox class="medium-pad">
                      <template v-slot:content>
                        <MoteButton class="mote-button--default"></MoteButton>
                      </template>
                    </MoteBox>
                  </section>
                  <section>
                    <h3>Outlined</h3>
                    <MoteBox class="medium-pad">
                      <template v-slot:content>
                        <MoteButton class="mote-button--outlined"></MoteButton>
                      </template>
                    </MoteBox>
                  </section>
                  <section>
                    <h3>Clear</h3>
                    <MoteBox class="medium-pad">
                      <template v-slot:content>
                        <MoteButton class="mote-button--clear"></MoteButton>
                      </template>
                    </MoteBox>
                  </section>
                </div>
              </template>
            </MoteStack>
          </article>
        </main>
      </div>
      <SiteFooter />
    </template>
  </MoteStack>
</template>
